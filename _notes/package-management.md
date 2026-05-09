---
title: Package Management
category: android
subcategory: sub-01
os: linux, windows
command: adb shell pm list packages
tools: adb shell pm
---


### Listing installed packages

```bash
adb shell pm list packages
adb shell pm list packages | grep packagename
adb shell pm list packages -f
adb shell pm list packages -f "allsafe"
```

### Path to APK

```bash
adb shell pm path com.package.name
adb shell pm path pl.nask.mobywatel
pm path com.xampingmalibubeach
```

### Pulling APK from device

```bash
adb pull /data/app/com.package.name(...)/base.apk
adb pull /data/app/~~oZ0lNhDdkIp2NaWMhGczgw==/infosecadventures.allsafe-tByxQb49HI7GiOb62XhPQ==/base.apk /root/Desktop/
```
