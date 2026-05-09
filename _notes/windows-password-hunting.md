---
title: Windows Credential Hunting in Files
category: privesc
subcategory: windows-creds
os: windows
command: findstr /si password *.txt *.xml *.ini
tools: findstr, Get-ChildItem
---


### findstr basic sweep

```cmd
findstr /si password *.txt
findstr /si password *.xml
findstr /si password *.ini
findstr /spin "password" .
```

### Search config / cred / vnc

```cmd
dir /s pass == cred == vnc == .config
```

### Powerful PowerShell recursive sweep

```powershell
Get-ChildItem -Path C:\ -Recurse -Force -Include *.config,*.ini,*.xml,*.bak,*.txt,*.ps1,*.log,*.json,*.yml,*.yaml,*.env,*.cs,*.vb,*.vbs,*.key,*.pem,*.crt,*.rdp,*.kdbx -File -ErrorAction SilentlyContinue | Where-Object { $_.FullName -notmatch 'C:\\Windows' } | Select-String -Pattern "pwd=", "password=", "username=", "user=", "pass=", "ryan", "abigail", "melanie"
```

### KeePass DB

```powershell
Get-ChildItem -Path C:\ -Include *.kdbx -File -Recurse -ErrorAction SilentlyContinue
```

### App-specific search

```powershell
Get-ChildItem -Path C:\xampp -Include *.txt,*.ini -File -Recurse -ErrorAction SilentlyContinue
```

### User profile docs

```powershell
Get-ChildItem -Path C:\Users\dave\ -Include *.txt,*.pdf,*.xls,*.xlsx,*.doc,*.docx -File -Recurse -ErrorAction SilentlyContinue
```

### Wrap inside cmd

```cmd
powershell.exe -c "Get-ChildItem -Path C:\\ -Recurse -Force -Include *.config,*.ini,*.xml,*.bak,*.txt,*.ps1 -File -ErrorAction SilentlyContinue | Select-String -Pattern 'pwd=', 'password='"
```
