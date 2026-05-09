---
title: Gobuster - Directory and File Bruteforce
category: recon
subcategory: web-content
os: linux
command: gobuster dir -u target -w wordlist
tools: gobuster
---


### Common scan

```bash
gobuster dir -u 192.168.50.20 -w /usr/share/wordlists/dirb/common.txt -t 5
```

### Fast scan

```bash
gobuster dir -e -u http://192.168.0.1 -w /usr/share/wordlists/dirb/big.txt -t 20
gobuster dir -e -u http://192.168.0.1 -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -t 20
```

### With file extensions

```bash
gobuster dir -e -u http://192.168.0.1 -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -x php,txt,html,cgi,sh,bak,aspx -t 20
```

### HTTPS (skip cert check)

Use `--insecuressl` flag.

### Subdomain DNS bruteforce

```bash
gobuster dns -d someDomain.com -w /opt/SecLists/Discovery/DNS/subdomains-top1million-110000.txt -t 30
```
