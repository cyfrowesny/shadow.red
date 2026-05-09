---
title: AppLocker Recon and Common Bypass Path
category: privesc
subcategory: windows-misc
os: windows
command: Get-Service AppIDSvc
tools: powershell
---


### Verify the service

```powershell
powershell -C Get-Service AppIDSvc
```

### Often-allowed write path

```
C:\Windows\System32\spool\drivers\color
```
