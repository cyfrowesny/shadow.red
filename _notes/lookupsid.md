---
title: SID/RID Bruteforce - impacket-lookupsid
category: ad
subcategory: ad-enum
os: linux
command: impacket-lookupsid anonymous@target
tools: impacket-lookupsid
---


### Anonymous brute via RPC

```bash
impacket-lookupsid anonymous@10.10.212.32 | tee usernames
impacket-lookupsid "":""@10.10.200.245 | tee usernames
```

### As guest

```bash
impacket-lookupsid 'guest'@10.10.129.91
```
