---
title: SPN Enumeration
category: ad
subcategory: ad-enum
os: windows, linux
command: Get-NetUser -SPN
tools: setspn, PowerView
---


### Native Windows

```cmd
setspn -L iis_service
```

### PowerView

```powershell
Get-NetUser -SPN | select samaccountname,serviceprincipalname
Get-DomainUser -SPN | name, serviceprincipalname
```

### Remote (Linux)

```bash
sudo python3 windapsearch.py --dc-ip 192.168.192.142 --user-spns
```
