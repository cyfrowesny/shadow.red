---
title: AD Domain Recon (net commands)
category: ad
subcategory: ad-enum
os: windows
command: net users /domain
tools: net, systeminfo, powershell
---


### Quick "where am I"

```cmd
whoami
hostname
systeminfo
```

### Local users vs domain users

```cmd
net users
net users /domain
```

### Domain groups

```cmd
net groups /domain
net group "Domain Admins" /domain
net group "ClientAdmins" /domain
```

### Local groups

```cmd
net localgroup
net localgroup administrators
```

### Identify the AD server (PowerShell)

```powershell
[System.DirectoryServices.ActiveDirectory.Domain]::GetCurrentDomain()
```
