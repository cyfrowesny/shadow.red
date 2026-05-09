---
title: Logcat
category: android
subcategory: sub-05
os: linux, windows
command: adb logcat
tools: adb, logcat
---


### Basic logging

```bash
adb shell
logcat
```

### With root privileges

```bash
adb shell
su
logcat
```

### Log levels

- `D` - debug
- `I` - information
- `W` - warning
- `E` - error

### Save to file

```bash
logcat > /sdcard/Documents/logs.txt
```

### Filtering

```bash
cat logs.txt | grep -v -i wifi | grep -v -i window
```

### Logcat for a specific process

```bash
adb shell ps | grep bank
adb logcat | grep 12543
```
