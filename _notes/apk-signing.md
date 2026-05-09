---
title: Signing APK
category: android
subcategory: sub-03
os: linux, windows
command: apksigner sign --ks my-release-key.jks --in demo_malware.apk --out demo_malware2.apk
tools: apksigner, d2j-apk-sign, java
---


### Method 1: apksigner

```bash
apksigner sign --ks my-release-key.jks --in demo_malware.apk --out demo_malware2.apk
```

### Method 2: d2j-apk-sign

```bash
d2j-apk-sign AppName.apk
```

### Method 3: Java sign tool

```bash
java -jar sign-1.0.jar AppName.apk
```
