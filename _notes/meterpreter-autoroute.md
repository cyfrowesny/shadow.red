---
title: Meterpreter Autoroute
category: tunnels
subcategory: meterpreter
os: linux
command: run autoroute -s subnet
tools: meterpreter
---


### Add a route through the current session

```
run autoroute -s 192.113.124.2
run autoroute -s 10.2.27.0/24
run autoroute -s 10.4.26.0/20
```

### Show routes

```
run autoroute -p
```

### Background and scan via the pivot

```
background
use auxiliary/scanner/portscan/tcp
use auxiliary/scanner/discovery/udp_sweep
```
