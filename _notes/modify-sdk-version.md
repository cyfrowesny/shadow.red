---
title: Modify SDK Version in APK
category: android
subcategory: sub-10
os: linux
command: d2j-apk-sign new_malware.apk
tools: apktool, d2j-apk-sign, adb
---


### 1. Decompile

```bash
apktool d malware.apk
```

### 2. Edit AndroidManifest.xml

```bash
mousepad malware/AndroidManifest.xml
```

Add the following inside the manifest:

```xml
<uses-sdk
    android:minSdkVersion="23"
    android:targetSdkVersion="23"
    android:compileSdkVersion="23" />
```

### 3. Recompile

```bash
apktool b malware -o new_malware.apk
```

### 4. Sign

```bash
d2j-apk-sign new_malware.apk
```

### 5. Push to device

```bash
adb push new_malware-signed.apk /sdcard/
```
