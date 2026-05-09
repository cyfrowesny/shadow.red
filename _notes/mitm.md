---
title: Man-in-the-Middle Attack (MITM) and Network Identification
category: wireless
subcategory: sub-02
os: linux
command: iptables -t nat -A PREROUTING -p tcp --destination-port 80 -j REDIRECT --to-port 8080
tools: ip_forward, sysctl, route, iptables, nmap, netdiscover 
---


## Man-in-the-Middle Attack (MITM)

A Man-in-the-Middle attack involves an attacker eavesdropping on communications between two connected targets. A MITM attack involves placing themselves between two points on a network to eavesdrop on a given connection in order to obtain information, passwords, other data, or simply sniff ("sniff") network traffic. This attack is most often performed on a LAN, but can also be performed on the web. In this type of attack, cybercriminals interfere with communication between a user and a server. One of the targets doesn't necessarily have to be a specific person; it could be a server or router, for example. To execute a MITM attack, you must be on the same network. This can occur between local computers, computers connecting to the network, or by eavesdropping on a communication process on the internet. Most often, however, the attacker attempts to break into a Wi-Fi network or connect to the network using a device or laptop connected to a cable to eavesdrop on traffic. We'll now perform the attack step by step. Read carefully; don't just follow the instructions thoughtlessly.

### IP Forwarding

IP Forwarding simply hijacks the process of receiving IP packets, deciding where to send them next, and then forwarding them. The forwarding process must be relatively simple or at least streamlined so that the router can forward large numbers of packets.

To perform the attack, start by running the ip_forwarding command:

```bash
echo 1 > /proc/sys/net/ipv4/ip_forward
```

This command sets the value 1 in the `/proc/sys/net/ipv4/ip_forward` file, which enables the operating system to forward IP packets, allowing it to function as a router. This is a temporary solution that won't survive a system reboot, as the changes to this file are memory-only.

```bash
sysctl -w net.ipv4.ip_forward=1
```

This command changes the value of the `net.ipv4.ip_forward` kernel parameter to 1 using the sysctl utility, which also enables IP packet forwarding. Unlike the previous command, this change is more standard and can be permanent.

### Traffic Redirection

```bash
iptables -t nat -A PREROUTING -p tcp --destination-port 80 -j REDIRECT --to-port 8080
```

This is a powerful tool for manipulating network traffic. This command adds a rule to the iptables NAT table that redirects all incoming TCP connections on port 80 to port 8080. This rule works at the router level, redirecting traffic before it reaches the destination service.

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