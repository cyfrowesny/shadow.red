---
title: Frida Basic Commands
category: android
subcategory: sub-07
os: linux, windows
command: frida -U -f com.target.app -l analysis_script.js
tools: frida, frida-ps
---


### List processes and apps

```bash
frida-ps -Uai
```

### Attach to app with script

```bash
frida -U -f com.target.app -l analysis_script.js
```

### Attach to process

```bash
frida -U <PID> -l script.js
```

### Codeshare scripts

```bash
frida -U --codeshare fadeevab/intercept-android-apk-crypto-operations -f infosecadventures.allsafe
```
