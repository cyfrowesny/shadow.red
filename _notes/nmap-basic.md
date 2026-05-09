---
title: Nmap Basic Scans
category: recon
subcategory: nmap
os: linux
command: nmap -sT -sV -A target
tools: nmap
---


### Targeted scan

```bash
nmap -sT -sV -A -p22,80,1234,9009 10.10.147.218 > nmap
```

### Fast scan (top ports)

```bash
nmap -Pn -F 10.4.2.12
```

### UDP scan

```bash
nmap -Pn -sU 10.4.2.12
```

### Full automator wrapper

```bash
./nmapAutomator.sh -H 10.10.147.218 -t Full
```
