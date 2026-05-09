---
title: APK Recompilation
category: android
subcategory: sub-03
os: linux, windows
command: apktool d AppName.apk
tools: apktool, zipalign
---


### 1. Decompilation

```bash
apktool d AppName.apk
```

### 2. Edit files

Edit `AndroidManifest.xml` and other resources as needed.

### 3. Recompilation

```bash
apktool b newAppName
```

### 4. Zipalign (BEFORE signing!)

```bash
zipalign -v 4 newAppName.apk final-name.apk
```
