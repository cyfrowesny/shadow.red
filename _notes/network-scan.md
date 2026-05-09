---
title: Network Identification
category: wireless
subcategory: sub-01
os: linux
command: sudo netdiscover
tools: route, iptables, nmap, netdiscover 
---

### Routing Table Check

```bash
route -n
```

This command displays the system's routing table without hostname resolution, showing how data is routed to different networks. It displays information such as network addresses, subnet masks, default gateways, and network interfaces. This is useful for understanding how the system routes network traffic. The `-n` option speeds up the display by avoiding hostname resolution.

### Network Identification

```bash
ifconfig
```

It's important to know the address of the network you're on. To do this, enter the ifconfig command, then check the network mask and assigned IP address under the name of the network interface you're using to connect to the network you're attacking. Based on this, create a command to scan the network.

### Network Scanning

```bash
nmap -sP 192.168.179.1/24
nmap -sn 192.168.179.1/24
sudo netdiscover
```

We scan the network we're on to find hosts by sending ICMP Echo Request (ping) packets and attempting to connect to TCP ports. (first command) Each of these commands works differently. The command you choose is optional; I added it there on purpose.