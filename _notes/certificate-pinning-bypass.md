---
title: Certificate Pinning Bypass
category: android
subcategory: sub-04
os: linux, windows
command: apk-mitm AndroGoat.apk
tools: apk-mitm
---


### APK-MITM - automatic patching

Project: https://github.com/niklashigi/apk-mitm

```bash
apk-mitm AndroGoat.apk
```

### For APKS bundle

```bash
apk-mitm malibu.apks
unzip malibu-patches.apks
```

Then install all extracted APKs.

Note: APK-MITM does not always work. In some cases a debug version from the vendor is required.
