---
title: Multiple APK Installation
category: android
subcategory: sub-01
os: linux, windows
command: adb install-multiple *.apk
tools: adb, apk-mitm, zip, unzip
---


### Installing multiple APKs at once

```bash
adb shell pm list packages | grep malibu
pm path com.xampingmalibubeach
adb install-multiple *.apk
```

### Alternative for APKS bundle

```bash
zip malibu.zip base.apk split_config.ar.apk split_config.en.apk
mv malibu.zip malibu.apks
apk-mitm malibu.apks
unzip malibu-patches.apks
```

Then install all extracted APKs.
