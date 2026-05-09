---
title: Banner Grabbing
category: recon
subcategory: service-enum
os: linux
command: nmap -sV --script=banner target
tools: nmap, nc
---


### List banner-related Nmap scripts

```bash
ls -al /usr/share/nmap/scripts/ | grep banner
```

### Banner grab with Nmap

```bash
nmap -sV --script=banner 10.10.23.24
```

### Manual via netcat

```bash
nc 10.10.23.24 22
```
