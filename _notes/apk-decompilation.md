---
title: APK Decompilation
category: android
subcategory: sub-02
os: linux, windows
command: apktool d target_app.apk -o output_apktool
tools: jadx, jadx-gui, apktool, d2j-dex2jar, jd-gui
---


### JADX - Java Decompiler

```bash
jadx-gui "$(pwd)/zappka.apk"
jadx -d output_jdx target_app.apk
```

### APKTool - Resource decompilation

```bash
apktool d target_app.apk -o output_apktool
apktool d NazwaAplikacji.apk
```

### Dex2jar conversion

```bash
d2j-dex2jar -f NazwaAplikacji.apk
```

Then open the resulting `.jar` file in jd-gui.
