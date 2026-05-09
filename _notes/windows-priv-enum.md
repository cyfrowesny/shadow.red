---
title: Windows Privilege Enumeration
category: privesc
subcategory: windows-enum
os: windows
command: whoami /priv
tools: cmd, powershell
---


### Current user / privileges

```cmd
whoami
echo %username%
whoami /priv
whoami /all
whoami /groups
```

### Local users and groups

```cmd
net users
net user <username>
net localgroup
net localgroup administrators
```

### System info

```cmd
systeminfo
hostname
```

### Patch level

```cmd
wmic qfe get Caption,Description,HotFixID,InstalledOn
```
