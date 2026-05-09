---
title: LDAP Enumeration
category: recon
subcategory: service-enum
os: linux
command: ldapsearch -x -H ldap://target -s base
tools: ldapsearch, windapsearch, kerbrute
---


### Anonymous base query

```bash
ldapsearch -x -H "ldap://10.10.11.76" -s base "(objectclass=*)"
```

### Authenticated dump

```bash
ldapsearch -v -x -b "DC=hutch,DC=offsec" -H "ldap://192.168.142.122" "(objectclass=*)"
```

### windapsearch

```bash
sudo python3 windapsearch.py --dc-ip 10.10.11.76:3268 -U --full
```

### Nmap LDAP scripts

```bash
sudo nmap -n -sV -Pn --script ldap-search.nse 192.168.116.158 | tee nmap-ldap-search
```

### kerbrute user enum (Kerberos-based)

```bash
kerbrute userenum /usr/share/wordlists/seclists/Usernames/Names/names.txt -d voleur.htb --dc voleur.htb
```
