---
title: Enum4linux / enum4linux-ng
category: recon
subcategory: service-enum
os: linux
command: enum4linux -a target
tools: enum4linux, enum4linux-ng
---


### Full anonymous enumeration

```bash
enum4linux -a 10.10.23.24
```

### Authenticated

```bash
enum4linux -a -u admin -p password1 10.10.23.24
```

### enum4linux-ng (newer)

```bash
enum4linux-ng 10.10.253.194 | tee enum4linuxng.log
enum4linux 10.10.253.194 | tee enum4linux.log
```
