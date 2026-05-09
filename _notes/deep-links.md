---
title: Deep Links Exploitation
category: android
subcategory: sub-06
os: linux, windows
command: adb shell am start -a android.intent.action.VIEW "allsafe://infosecadventures/congrats"
tools: adb
---


### Basic deep link

```bash
adb shell am start -a android.intent.action.VIEW "allsafe://infosecadventures/congrats"
```

### Deep link with parameters

```bash
adb shell am start -a android.intent.action.VIEW "allsafe://infosecadventures/congrats?key=ebfb7ff0-b2f6-41c8-bef3-4fba17be410c"
```
