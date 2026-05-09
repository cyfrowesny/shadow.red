---
title: Linux Process Enumeration
category: privesc
subcategory: linux-enum
os: linux
command: ps aux
tools: ps, top, pgrep
---


### Listing

```bash
ps
ps aux
ps aux | grep root
ps aux | grep msfconsole
pgrep vsftpd
top
top -c -u root
```
