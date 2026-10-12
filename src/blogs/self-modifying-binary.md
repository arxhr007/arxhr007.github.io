# How Polymorphic Binaries Work: Dissecting a Self-Modifying FASM PoC

> **Educational PoC only.** All techniques shown come from publicly available malware research. The payload is a harmless string. Source: [arxhr007/self-modifying-binary-PoC](https://github.com/arxhr007/self-modifying-binary-PoC).

Signature-based antivirus works by matching known byte patterns against files on disk. Feed it a binary it has never seen before and it has nothing to match. Polymorphic malware exploits this: it mutates its own bytes on every execution so no two copies share the same signature.

This post dissects a minimal PoC written in FASM (Flat Assembler) for x86-64 Linux that demonstrates exactly how this works. By the end you'll understand the marker-scanning self-locate trick, the rotating XOR cipher, the write-then-replace technique, and — crucially — why none of this defeats a behavioral detection engine.

---

## Binary Layout: Marker-Delimited Regions

The first problem any self-modifying binary faces: how does it find its own data inside the file? You can't use fixed offsets; the assembler and linker shift things around. ELF section headers are an option, but parsing them is complex. This PoC uses a simpler trick: ASCII sentinel markers embedded directly in the data segment.

Three regions are defined, each preceded by a unique ASCII tag:

```asm
; Key marker and key storage
marker_begin_key: db "KEYBEGIN/9a7c4f2e:"
key: dd 0x12345678               ; 32-bit XOR key (initial value)

; Payload metadata
marker_begin_metadata: db "METAMETA/4d7a2c5b:"
payload_stored_length: dd 10     ; payload byte count
payload_checksum: dd 0x00000000  ; XOR fold of plaintext

; Encrypted payload
marker_begin_payload: db "PAYLOAD/5b2e1c9d:"
; "HELLOWORLD" XOR 0x12345678 (little-endian key bytes: 0x78, 0x56, 0x34, 0x12)
; H=0x48^0x78=0x30  E=0x45^0x56=0x13  L=0x4C^0x34=0x78  L=0x4C^0x12=0x5E
; O=0x4F^0x78=0x37  W=0x57^0x56=0x01  O=0x4F^0x34=0x7B  R=0x52^0x12=0x40
; L=0x4C^0x78=0x34  D=0x44^0x56=0x12  (null terminator not part of payload)
payload: db 0x30, 0x13, 0x78, 0x5E, 0x37, 0x01, 0x7B, 0x40, 0x34, 0x12, 0x00
payload_max_len = 31  ; 0x00 is a C-string terminator; payload_stored_length=10 excludes it
```

At runtime, when the binary wants to rewrite itself, it reads its own file into a 64 KB heap buffer and linearly scans for those byte sequences. The moment it finds `KEYBEGIN/9a7c4f2e:`, the next 4 bytes are the key. Find `PAYLOAD/5b2e1c9d:` and the next `payload_stored_length` bytes are the ciphertext to patch. No ELF header parsing required.

The marker strings include random-looking hex suffixes (`9a7c4f2e`, `5b2e1c9d`) to avoid false positives if the payload ever happens to contain the word `PAYLOAD`.

---

## The XOR Cipher

Encryption here is a 4-byte rotating XOR. The 32-bit key is split into its four constituent bytes in little-endian order, then applied cyclically:

```
Key 0x12345678 → bytes [0x78, 0x56, 0x34, 0x12]

position 0:  byte ^= 0x78
position 1:  byte ^= 0x56
position 2:  byte ^= 0x34
position 3:  byte ^= 0x12
position 4:  byte ^= 0x78   ← wraps
...
```

The assembly that implements it:

```asm
; xor_payload: rsi=src, rdi=dst, ecx=length, eax=key
xor_payload:
    ; Key arrives in eax; copy to ebx so al is free for byte loads
    mov ebx, eax
    ; Unpack key into four byte registers
    mov r8b, bl          ; key[0] = byte 0 (low)
    shr ebx, 8
    mov r9b, bl          ; key[1]
    shr ebx, 8
    mov dl,  bl          ; key[2]
    shr ebx, 8
                         ; key[3] now in bl

    xor r10, r10         ; position counter
.xor_loop:
    test ecx, ecx
    jz .xor_done
    mov al, [rsi]        ; load source byte
    mov r11, r10
    and r11, 3           ; r11 = position % 4
    cmp r11, 0
    je .use_key0
    cmp r11, 1
    je .use_key1
    cmp r11, 2
    je .use_key2
    xor al, bl           ; key[3]
    jmp .store_result
.use_key0:
    xor al, r8b
    jmp .store_result
.use_key1:
    xor al, r9b
    jmp .store_result
.use_key2:
    xor al, dl
.store_result:
    mov [rdi], al
    inc rsi
    inc rdi
    inc r10
    dec ecx
    jmp .xor_loop
```

**Why this can invalidate naive byte-pattern signatures:** the encrypted bytes change with every new key. A signature that depends on the exact ciphertext bytes will fail to match after one run. The binary's code segment is unchanged, so scanners that use structural features, heuristics, or entropy analysis are unaffected by this technique.

**Why this is trivially breakable:** XOR with a known plaintext is trivially reversible. If an analyst knows (or guesses) any portion of the plaintext, they recover the key in one XOR. Sophisticated polymorphic malware layers this with compression, multiple cipher rounds, and metamorphic code restructuring. This PoC is the minimal baseline.

---

## Execution Flow: Run → Decrypt → Mutate → Persist

Here is what happens on each execution, step by step:

**1. Locate self.** The binary reads `argv[0]` to get its own path. This is the file it will overwrite.

**2. Validate.** It checks that the stored `payload_stored_length` is sane and that the XOR-fold checksum of the decrypted payload matches `payload_checksum`. If either fails, it halts.

**3. Decrypt and print.** It calls `xor_payload` to decrypt the current ciphertext into a stack buffer, then writes it to stdout.

**4. Generate a new key.** This is the mutation step. A fresh 32-bit key is requested from the kernel:

```asm
generate_new_key:
    mov rax, 318        ; sys_getrandom
    mov rdi, new_key    ; destination buffer
    mov rsi, 4          ; 4 bytes
    mov rdx, 0          ; flags (blocking)
    syscall
    cmp rax, 4
    je .done
    ; fallback: /dev/urandom via open/read/close
```

`sys_getrandom` (syscall 318 on x86-64 Linux) pulls bytes directly from the kernel CSPRNG. The fallback opens `/dev/urandom` manually with raw syscalls — no libc, no dynamic linking.

**5. Re-encrypt.** The decrypted plaintext is XOR'd with the new key, producing a new ciphertext.

**6. Patch the in-memory binary image.** The entire binary is read into a 64 KB heap buffer. Three marker scans locate the key field, metadata block, and payload region. All three are overwritten in the buffer with their new values.

**7. Write and replace self.** The patched buffer is written to `argv[0].tmp`, then:

```asm
replace_original_with_temp:
    mov rax, 87             ; sys_unlink — delete original
    mov rdi, [orig_filename]
    syscall

    mov rax, 82             ; sys_rename — temp becomes original
    mov rdi, temp_filename
    mov rsi, [orig_filename]
    syscall
```

---

## The Write-Then-Replace Pattern

Writing directly to the binary while it's executing is risky: an interruption mid-write can corrupt the file. The safer pattern writes a complete replacement first, then swaps the filename.

This PoC uses an `unlink` → `rename` sequence:

1. Write the full patched image to `argv[0].tmp`.
2. `sys_unlink` the original — the pathname disappears.
3. `sys_rename` the temp file to the original name.

**The gap.** This is not atomic. Between `sys_unlink` completing and `sys_rename` completing, the original pathname does not exist. If the process is killed or the rename fails in that window, the executable is gone. A truly atomic replacement on Linux passes the destination path directly to `rename()` without unlinking first — `rename()` can replace an existing destination atomically when both paths are on the same filesystem. This PoC's unlink-first approach sacrifices that guarantee, but works in practice for a single-threaded self-rewriter with no concurrent writers on the file.

**Forensic consequence.** When `sys_rename` completes, the on-disk binary references a new inode with the updated bytes. The process that just ran, however, was mapped from the old inode. Linux keeps open file descriptors and memory mappings alive until all references drop, so the running process's pages still reflect the pre-mutation image. An incident responder who hashes the binary on disk after execution and compares it to a memory dump of the process would see divergence — the on-disk and in-memory images are different files. The exact comparison requires identifying the correct mapped region in `/proc/<pid>/maps` and `/proc/<pid>/mem`, not a simple xxd diff, but the divergence is real and repeatable.

---

## What This Looks Like to Behavior-Based Detection

Signature scanners match bytes. Behavioral engines watch what programs *do*. This PoC's syscall sequence is distinctive regardless of what the bytes look like:

```
open(argv[0], O_RDONLY)         ← process opens its own binary
lseek(fd, 0, SEEK_END)          ← sizes itself
read(fd, buf, size)             ← reads itself into memory
close(fd)
getrandom(new_key, 4, 0)        ← requests kernel entropy
open("argv[0].tmp", O_WRONLY|O_CREAT, 0755)
write(fd_tmp, patched_buf, size) ← writes modified image
close(fd_tmp)
unlink(argv[0])                 ← deletes itself
rename("argv[0].tmp", argv[0])  ← replaces itself
```

A process opening its own executable path, reading it, modifying the bytes, and then replacing the file via rename is a strong behavioral IOC (indicator of compromise). EDR products and sandboxes that trace syscall sequences or monitor filesystem events can flag this pattern independent of any byte signature.

Polymorphism that mutates only the encrypted data region — as this PoC does — leaves the code segment completely unchanged, so any signature anchored to stable code bytes still matches. Modern malware pairs byte mutation with additional techniques like metamorphism (restructuring the code itself), process hollowing, signed binary abuse, or living-off-the-land tactics. This PoC demonstrates the baseline that those techniques build on.

---

## Proof: Running It

Compiled with FASM 1.73.32 on Ubuntu 24.04 (WSL2, x86-64). Three consecutive runs:

```bash
$ ./selfrewrite
Current key: 305419896
Payload length validation: PASS
Encrypted payload (hex): 3013785E37017B403412
Payload checksum verification: PASS
Decrypted payload: HELLOWORLD
New key: 2508764718
Re-encrypted payload (hex): 66F3C4D961E1C7C762F2
Binary updated with new key and payload re-encrypted

$ ./selfrewrite
Current key: 2508764718
Payload length validation: PASS
Encrypted payload (hex): 66F3C4D961E1C7C762F2
Payload checksum verification: PASS
Decrypted payload: HELLOWORLD
New key: 2111318775
Re-encrypted payload (hex): BF6F9431B87D972FBB6E
Binary updated with new key and payload re-encrypted

$ ./selfrewrite
Current key: 2111318775
Payload length validation: PASS
Encrypted payload (hex): BF6F9431B87D972FBB6E
Payload checksum verification: PASS
Decrypted payload: HELLOWORLD
New key: 3642765678
Re-encrypted payload (hex): 26746C9521666F8B2275
Binary updated with new key and payload re-encrypted
```

Each run: key mutates, ciphertext changes, plaintext stays `HELLOWORLD`. A signature anchored to the payload ciphertext bytes would fail to match after the first run. The code segment — everything outside the three marker regions — is byte-for-byte identical across all runs.

### Hex dump: on-disk mutation

`xxd` of the binary before and after a single run, showing only the changed lines:

```text
13c13
< 000000c0: 653a 7856 3412 4d45 5441 4d45 5441 2f34  e:xV4.METAMETA/4
---
> 000000c0: 653a 7e32 5317 4d45 5441 4d45 5441 2f34  e:~2S.METAMETA/4
16c16
< 000000f0: 3a30 1378 5e37 017b 4034 1200 2f70 726f  :0.x^7.{@4../pro
---
> 000000f0: 3a36 771f 5b31 651c 4532 7600 2f70 726f  :6w.[1e.E2v./pro
```

Line `0x0c0` is the key field (immediately after `KEYBEGIN/9a7c4f2e:`). Line `0x0f0` is the encrypted payload (immediately after `PAYLOAD/5b2e1c9d:`). Those are the only two regions that change — everything else, including the code itself, is identical.

---

## Conclusion

Self-modifying code is not new. The concept predates modern AV by decades. But it remains relevant as a foundation: polymorphic malware families — which change their encrypted representation each generation — and metamorphic families — which restructure their code itself — both rely on the same core primitives this PoC exposes: locate your own data, mutate it, replace the file on disk.

What this PoC makes concrete:

- **Marker-based self-location** is simpler than ELF section parsing for small, single-file binaries. Robustness requires validating bounds after every marker find.
- **Rotating XOR can invalidate a naive ciphertext-anchored signature** and is insufficient to withstand any real cryptanalysis.
- **Unlink-then-rename** avoids partial-write corruption but is not atomic — there is a brief window where the original pathname does not exist. It creates a forensically interesting inode-vs-pathname divergence after completion.
- **Behavioral monitoring can detect this pattern** regardless of what the bytes look like, because the syscall sequence of a process that reads and replaces its own binary is distinctive.

Source: [github.com/arxhr007/self-modifying-binary-PoC](https://github.com/arxhr007/self-modifying-binary-PoC)
