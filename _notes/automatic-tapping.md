---
title: Automatic Tapping (input tap)
category: android
subcategory: sub-11
os: linux, windows
command: adb shell input tap 760 745
tools: adb
---

### Single tap

```bash
adb shell
input tap 760 745
```

### Continuous tapping script

```bash
while true
do
  input tap 760 745
  input tap 760 745
  input tap 760 745
  input tap 760 745
  input tap 760 745
done;
```
