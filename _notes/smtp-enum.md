---
title: SMTP Enumeration
category: recon
subcategory: service-enum
os: linux
command: nc -nvvv target 25
tools: nc, msfconsole
---


### Connect and verify users

```bash
nc -nvvv 192.168.1.242 25
```

Inside the SMTP session:

```
VRFY John
VRFY Eva
```

### Metasploit

```bash
search type:auxiliary name:smtp
use auxiliary/scanner/smtp/smtp_version
use auxiliary/scanner/smtp/smtp_enum
```
