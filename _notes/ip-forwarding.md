---
title: IP Forwarding
category: wireless
subcategory: sub-02
os: linux
command: echo 1 > /proc/sys/net/ipv4/ip_forward
tools: echo, ip_forward
---



### IP Forwarding

To perform a sniffing attack, start by running the ip_forwarding command. This command sets the value 1 in the `/proc/sys/net/ipv4/ip_forward` file, which enables the operating system to forward IP packets, allowing it to act as a router. This is a temporary solution that will not survive a system restart, as changes to this file are only memory-based.

### Turn ON

```bash
echo 1 > /proc/sys/net/ipv4/ip_forward
```

### Turn OFF

```bash
echo 0 > /proc/sys/net/ipv4/ip_forward
```
