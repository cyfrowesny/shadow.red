---
title: Windows Network Enumeration
category: privesc
subcategory: windows-enum
os: windows
command: ipconfig /all
tools: ipconfig, route, arp, netstat, netsh
---


### Interfaces and routing

```cmd
ipconfig /all
route print
arp -a
```

### Connections

```cmd
netstat -ano
netstat -anoy
```

### Firewall

```cmd
netsh firewall show state
netsh firewall show config
netsh advfirewall show allprofiles
netsh advfirewall firewall dump
netsh advfirewall firewall show rule name=all
```

### Process info for a port

```powershell
get-process -Id 4916
```
