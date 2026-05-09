---
title: Frida Server Setup
category: android
subcategory: sub-07
os: linux
command: adb push frida-server-17.2.16-android-arm64 /data/local/tmp/frida-server
tools: frida-server, adb, wget, unxz
---


### Download Frida Server

```bash
wget https://github.com/frida/frida/releases/download/17.2.16/frida-server-17.2.16-android-arm64.xz
```

### Extract

```bash
unxz frida-server-17.2.16-android-arm64.xz
```

### Push to device

```bash
adb push frida-server-17.2.16-android-arm64 /data/local/tmp/frida-server
```

### Run

```bash
adb shell
su
cd /data/local/tmp
chmod 755 frida-server
./frida-server &
exit
exit
```
