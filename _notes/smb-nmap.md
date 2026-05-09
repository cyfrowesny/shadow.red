---
title: SMB Enumeration with Nmap
category: recon
subcategory: service-enum
os: linux
command: nmap -sV -p 445 --script "smb*" target
tools: nmap
---


### Run all SMB scripts

```bash
sudo nmap -sV -p 445 --script "smb*" 10.10.10.4
sudo nmap -sV -p 445 --script "smb*" --script-timeout 30s 10.10.10.4
```

### Specific scripts

```bash
nmap -p445 --script smb-security-mode 10.10.3.21
nmap -p445 --script smb-enum-users.nse 10.10.3.21
```

### Vulnerability scanning

```bash
nmap --script=smb-enum* --script-args=unsafe=1 -T5 $ip
nmap --script=vuln* --script-args=unsafe=1 -T5 $ip
```
