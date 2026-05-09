---
title: Remote Screenshot
category: android
subcategory: sub-11
os: linux, windows
command: adb shell screencap -p /data/local/tmp/test1.png
tools: adb
---


### Take screenshot

```bash
adb shell screencap -p /data/local/tmp/test1.png
```

### Pull to computer

```bash
adb pull /data/local/tmp/test1.png
```
