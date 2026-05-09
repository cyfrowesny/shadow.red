---
title: Windows Processes and Services
category: privesc
subcategory: windows-enum
os: windows
command: tasklist /SVC
tools: tasklist, sc, wmic, schtasks
---


### Processes

```cmd
tasklist /SVC
```

### Running services

```cmd
net start
sc query
sc qc <service>
wmic service list brief | findstr "Running"
wmic service get name,displayname,pathname,startmode | findstr /i "auto"
```

### Service start path filter (autostart, non-Windows path)

```cmd
wmic service get name,displayname,pathname,startmode |findstr /i "auto" |findstr /i /v "C:\windows\\" |findstr /i /v ""
```

### Scheduled tasks

```cmd
schtasks
schtasks /query /fo LIST /v
schtasks /query /tn "TASK_NAME" /V /FO LIST
```

```powershell
Get-ScheduledTask | where {$_.TaskPath -notlike '\Microsoft*'} | Format-Table TaskName,TaskPath,State
```

### Drivers

```cmd
driverquery
```

### Quick reboot trigger (re-fires startup tasks)

```cmd
shutdown /r /t 0
```
