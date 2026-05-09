---
title: NetBIOS Enumeration
category: recon
subcategory: service-enum
os: linux
command: nbtscan target
tools: nbtscan, nmblookup, nmap
---


### NetBIOS scan

```bash
nbtscan 10.10.22.54
nbtscan 10.10.2.0/24
```

### NMB lookup

```bash
nmblookup -A 10.4.30.139
```

### Nmap NetBIOS

```bash
nmap -sU -p 137 10.4.30.139
nmap -sU -sV -T4 --script nbstat.nse -p137 -Pn -n 10.4.30.139
```
