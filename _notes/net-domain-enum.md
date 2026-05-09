---
title: Built-in net Commands - Domain Enumeration
category: ad
subcategory: ad-enum
os: windows
command: net group "Domain Admins" /domain
tools: net
---


### Local context

```cmd
whoami
hostname
net users
net localgroup
net localgroup administrators
```

### Domain context

```cmd
net users /domain
net groups /domain
net group "Domain Admins" /domain
net group "ClientAdmins" /domain
```

### Discover the AD environment from PowerShell

```powershell
[System.DirectoryServices.ActiveDirectory.Domain]::GetCurrentDomain()
```

### Verify domain membership

```cmd
systeminfo
```

### Add or remove a user from a group (when you have rights)

```cmd
net group "Management Department" stephanie /add /domain
net group "Management Department" stephanie /del /domain
```

### Password policy

```cmd
net accounts
```
