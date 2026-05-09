---
title: FTP Enumeration
category: recon
subcategory: service-enum
os: linux
command: hydra -L users -P pass target ftp
tools: nmap, hydra, ncftp, msfconsole
---


### Nmap scripts

```bash
ls -al /usr/share/nmap/scripts/ | grep ftp-*
```

### Metasploit modules

```bash
search type:auxiliary name:ftp
use auxiliary/scanner/ftp/ftp_version
use auxiliary/scanner/ftp/ftp_login
```

### Hydra bruteforce

```bash
hydra -L /usr/share/metasploit-framework/data/wordlists/common_users.txt -P /usr/share/metasploit-framework/data/wordlists/unix_passwords.txt 10.10.23.24 -t 4 ftp
```

### FTP Passive Mode fix

On anonymous login use `ls -lsa` to see hidden files. If passive mode hangs:

```bash
ncftp -u anonymous -p anonymous 10.10.110.100
set passive off
ls
```
