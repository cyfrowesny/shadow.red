---
title: Linux System Enumeration Basics
category: privesc
subcategory: linux-enum
os: linux
command: uname -a
tools: cat, uname, id, whoami
---


### System info

```bash
hostname
cat /etc/issue
cat /etc/*release
uname -a
uname -r
lscpu
```

### User context

```bash
id
whoami
groups bob
groups root
cat /etc/passwd
cat /etc/passwd | grep -v /nologin
```

### System resources

```bash
free -h
df -h
df -ht ext4
lsblk | grep sd
```

### Active and historical users

```bash
last
lastlog
w
who
cat /etc/group
```
