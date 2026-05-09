---
title: Domain Share Hunting
category: ad
subcategory: ad-enum
os: windows, linux
command: Find-DomainShare -CheckShareAccess
tools: PowerView, netexec
---


### PowerView

```powershell
Find-DomainShare
Find-DomainShare -CheckShareAccess
```

### NetExec spider

```bash
netexec smb $target -u svc-admin -p 'management2005' -M spider_plus -o DOWNLOAD_FLAG=True
```

### Anonymous share listing

```bash
netexec smb $target -u 'guest' -p '' --shares
```

### Spider NETLOGON for credentials

```bash
netexec smb $target -u 'a-whitehat' -p 'bNdKVkjv3RR9ht' --spider NETLOGON --regex .
```
