---
title: SMBMap
category: recon
subcategory: service-enum
os: linux
command: smbmap -H target -u user -p pass
tools: smbmap
---


### Authenticated share listing

```bash
smbmap -H 10.10.23.24 -u admin -p password1
```

### Anonymous

```bash
smbmap -u 'anonymous' -H 10.11.1.231 -p ""
```
