---
title: Writable Files and Directories
category: privesc
subcategory: linux-privesc
os: linux
command: find / -writable -type d 2>/dev/null
tools: find
---


### Writable directories

```bash
find / -writable -type d 2>/dev/null
```

### Within depth limit (when full scan stalls)

```bash
find / -type f -maxdepth 5 -writable 2>/dev/null
```

### Group-owned writable items

```bash
groups
find / -group www 2>/dev/null
find / -writable -type d -group gods 2>/dev/null
find / -writable -type f -group gods 2>/dev/null
```

### User-owned writable items

```bash
id
find / -writable -type d -user hades 2>/dev/null
find / -writable -type f -user hades 2>/dev/null
```

### Per-user file ownership audit

```bash
find / -user miguel 2>/dev/null
```
