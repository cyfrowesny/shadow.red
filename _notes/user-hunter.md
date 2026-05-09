---
title: PowerView - Session and User Hunting
category: ad
subcategory: ad-enum
os: windows
command: Invoke-UserHunter
tools: PowerView, PsLoggedon
---


### Logged-on user enumeration

```powershell
Get-NetLoggedon | select UserName
Get-NetLoggedon -ComputerName DC01
Get-NetSession
Get-NetSession -ComputerName files04
```

### Find where a target user is logged in

```powershell
Invoke-UserHunter
Invoke-UserHunter -CheckAccess
Invoke-UserHunter -GroupName "Domain Admins"
```

### Sysinternals PsLoggedon

```cmd
.\PsLoggedon.exe \\files04
```

### Hunt workflow

1. Get Domain Admin members
2. Get list of computers
3. Run `Get-NetLoggedon`/`Get-NetSession` against each
4. Find any computer with a Domain Admin session
5. Confirm you're a local admin on that computer
