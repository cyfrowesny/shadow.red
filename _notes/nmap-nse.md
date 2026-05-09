---
title: Nmap NSE Scripts
category: recon
subcategory: nmap
os: linux
command: nmap --script=mongodb-info target
tools: nmap
---


### Listing scripts

```bash
ls -al /usr/share/nmap/scripts/ | grep -e "http"
ls -al /usr/share/nmap/scripts/ | grep -e "mongodb"
```

### Script help

```bash
sudo nmap --script-help=mongodb-databases
```

### Running scripts

```bash
sudo nmap -sS -sV --script=mongodb-info -p- 192.168.50.124
sudo nmap -sS -sV --script "ftp*" -p- 192.168.50.124
```

### TLS/SSL scanning

```bash
nmap --script ssl-enum-ciphers -p 443 10.10.10.7
```
