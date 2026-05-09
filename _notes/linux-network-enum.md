---
title: Linux Network Enumeration
category: privesc
subcategory: linux-enum
os: linux
command: ss -anp
tools: ip, netstat, ss, arp
---


### Interfaces and routing

```bash
ifconfig
ip a s
arp -a
arp
routel
route
```

### Connections

```bash
netstat
ss -anp
ss -lntu
ss -ltu
```

### Hostname and DNS files

```bash
cat /etc/networks
cat /etc/hostname
cat /etc/hosts
cat /etc/resolv.conf
```
