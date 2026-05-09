---
title: CrackMapExec / NetExec - RID Brute
category: ad
subcategory: ad-enum
os: linux
command: crackmapexec smb target -u user -p pass --rid-brute
tools: crackmapexec, netexec
---


### Authenticated RID brute

```bash
crackmapexec smb 10.10.253.194 -u 'twilliams' -p 'roastpotatoes' --rid-brute | tee crackmapexec-rid-brute
netexec smb 10.10.253.194 -u 'twilliams' -p 'roastpotatoes' --rid-brute | tee crackmapexec-rid-brute
```

### Sometimes works as guest

```bash
crackmapexec smb 10.10.253.194 -u 'guest' -p '' --rid-brute | tee crackmapexec-rid-brute
netexec smb $target -u 'guest' -p '' --rid-brute | grep -i 'sidtypeuser' | awk '{print$6}' | cut -d '\' -f2 | tee userlist2.txt
```

### Pull users via NTLM hash

```bash
netexec smb $target -u leicester.lawton -H 25cac0569934a5f6e01e9e440e0dce5b --users | awk '{print$5}' | fgrep -v '[*]' | tee users2
```
