---
title: Metasploit Exploit Search
category: initial-access
subcategory: payloads
os: linux
command: search type:exploit name:keyword
tools: msfconsole, searchsploit
---


### Search inside msfconsole

```
search type:exploit name:Microsoft IIS
search cve:2015 name:ManageEngine
```

### Searchsploit cross-reference

```bash
searchsploit "Microsoft Windows SMB" | grep -e "Metasploit"
```

### Workspace and database scanning

```
service postgresql start
workspace -a MicroshitISS
setg RHOSTS 10.10.2.4
db_nmap -sS -sV -O 10.10.10.4
services
hosts
vulns
```
