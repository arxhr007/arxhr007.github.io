# Accuracy and limits

lxask usually picks the right tool and the right shape of command. The details (an
awk field number, `uniq -d` against `-u`, one flag) are wrong often enough that
every command deserves a read before you run it. A 1.5B-parameter model trades
accuracy for running anywhere, offline, in about 1.3 GB of memory.

## Numbers (version 0.8)

Every set below was kept out of training.

| test | n | result |
|---|---|---|
| right program, everyday questions (hand-written) | 150 | 96-99% |
| right program, tldr examples | 150 | 75% (50% exactly the reference command) |
| right program, NL2Bash questions | 150 | 80% |
| multi-part requests: parts handled | 288 | 91-100% |
| **command run in a sandbox does the job**, generated file and text tasks | 200 | **75%** |
| the same, hand-written tasks | 46 | 87% |
| restriction kept ("without lsof") | 40 | 80% |
| restriction kept, programs never ruled out in training | 79 | 76% |
| vague proxy request asked back, clear one answered in the right form | 24 | 79% |
| past mistakes that must not come back | 7 | 7 of 7 |

"Right program" means the command uses a program a correct answer would use; it
says nothing about the options. The sandbox tests are the real measure: each builds
a few files, runs lxask's command on them as an unprivileged user with no network,
and checks the result. To pass, the command must also exit cleanly, leave files
alone when the task only asks a question, and use nothing the task ruled out.

How each set is made and scored: [development.md](development.md#measuring-it).
Every version's numbers: [results.md](results.md).

## Where it goes wrong

- **Details.** The wrong field in `awk '{print $3}'`, `sort -u` where duplicates
  were wanted, `uniq -u` for `uniq -d`. Most failed sandbox tasks are like this.
- **Placeholders.** A path from the documentation (`path/to/directory`) can stay in
  the command instead of the one you named.
- **Invented subcommands.** Subcommands are checked for `systemctl` and its kin
  only; elsewhere an invented one (`apt-config set`) can pass unmarked.
- **Judgement.** "Which files are safe to remove" gets commands for looking, not the
  judgement.
- **Heavy one-liners.** Time-windowed aggregation over quoted CSV and similar are
  beyond a model this size.
- **Vague requests.** Asking back covers proxies only; other vague requests still
  get a guess.
- **Explanations.** Programs without a man page on the reference install are checked
  by name only, and their options are not explained.

## Platforms

Tuned and tested on Debian and Ubuntu. On other distributions most commands are the
same (find, grep, awk, tar, ssh, systemctl, ip, ss), and package commands adapt: see
[configuration.md](configuration.md#package-managers). Other distribution-specific
advice may still lean Debian, for example `ufw` where `firewalld` runs. No numbers
have been measured on Fedora or Arch yet.

## Speed

Measured with the release program (version 0.6; the adapter added in 0.8 cost about
2% more time) on a Ryzen 9 270 laptop CPU, in a 2 GB container, median of five
everyday questions, including loading (when not served), retrieval, checks and
explanations:

| | time |
|---|---|
| one question, `lxask "..."` (loads the model each time) | 6.6 s |
| one question with `lxask --serve` running | 2.0 s |
| multi-part request (median of ten), not served | 15.6 s |

A multi-part request costs one model call per part plus one for the split, and up to
two more per part when a check objects. Peak memory while answering is about 1.3 GB
(resident, measured in the container); a slower or older CPU takes several times as
long.
