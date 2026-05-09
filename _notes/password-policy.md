---
title: Domain Password Policy
category: ad
subcategory: ad-enum
os: windows, linux
command: net accounts
tools: net, crackmapexec, netexec
---


### From a domain-joined Windows host

```cmd
net accounts
```

Look at:
- `Lockout threshold` - retries before lock
- `Lockout duration (minutes)`

### From Kali

```bash
crackmapexec smb 10.10.10.169 --pass-pol
netexec smb $target --pass-pol
```
