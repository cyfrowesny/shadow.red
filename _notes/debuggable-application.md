---
title: Debuggable Application
category: android
subcategory: sub-06
os: linux, windows
command: jdb -connect com.sun.jdi.SocketAttach:hostname=localhost,port=55555
tools: adb, jdb
---


### What to check in AndroidManifest.xml

```xml
android:debuggable="true"
```

### 1. Find PID of debuggable app

```bash
adb jdwp
```

### 2. Port forwarding

```bash
adb forward tcp:55555 jdwp:<PID>
```

### 3. Connect debugger

```bash
jdb -connect com.sun.jdi.SocketAttach:hostname=localhost,port=55555
```
