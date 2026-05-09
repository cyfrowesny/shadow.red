---
title: ADB (Android Debug Bridge)
category: android
subcategory: sub-01
os: linux, windows
command: adb devices
tools: adb devices, adb push, adb pull, adb install, adb uninstall, adb shell, adb shell pm
---


### Viewing connected devices

```bash
adb devices
```

### Downloading and uploading files

```bash
adb push myfile.txt /sdcard/
adb pull /sdcard/myfile.txt
```

### Installing and removing apps

```bash
adb install myapp.apk
adb uninstall my.package.name
```

### Shell access

```bash
adb shell
```

### Reinstalling a system app

```bash
adb shell pm install-existing com.google.android.gsf
adb shell pm install-existing com.google.android.gms
```
