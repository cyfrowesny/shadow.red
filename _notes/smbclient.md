---
title: SMBClient
category: recon
subcategory: service-enum
os: linux
command: smbclient -L //target -U user
tools: smbclient
---


### List shares

```bash
smbclient -L \\\\10.10.2.12\\ -U admin
smbclient -L 10.10.23.24 -U admin
```

### Anonymous listing

```bash
smbclient -L \\\\10.10.219.38\
```

### Connect to share

```bash
smbclient \\\\10.10.2.12\\public -U admin
smbclient //10.10.10.3/tmp
smbclient -U milesdyson \\\\10.10.238.31\\milesdyson
smbclient -U'qiu'%'password' \\\\10.10.238.31\\qiucatlgl
smbclient //10.10.23.24/shawn -U admin
```

### Listing as authenticated user

```bash
smbclient -L \\\\vulnnet.local\\ -U enterprise-security
```
