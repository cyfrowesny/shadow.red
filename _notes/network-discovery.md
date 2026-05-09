---
title: Network Host Discovery
category: recon
subcategory: network-discovery
os: linux
command: nmap -sn 192.168.2.0/24
tools: nmap, netdiscover, fping, ping
---


### Host discovery (nmap ping sweep)

```bash
sudo nmap -sn 192.168.2.0/24
```

### Netdiscover (ARP)

```bash
sudo netdiscover -i eth0 -r 192.168.2.0/24
```

### Ping sweep

```bash
ping 10.4.2.0
ping -b -c 1 10.4.2.0
fping -a -g 10.4.2.0/24 2>/dev/null
```
