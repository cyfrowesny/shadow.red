---
title: Meterpreter portfwd
category: tunnels
subcategory: meterpreter
os: linux
command: portfwd add -l localport -p remoteport -r remotehost
tools: meterpreter
---


### Forward a remote port to localhost

```
portfwd add -l 1234 -p 80 -r 10.2.27.187
```

### Now scan it locally

```bash
db_nmap -sS -sV -p 1234 localhost
nmap -sV -p 1234 localhost
```
