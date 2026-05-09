---
title: Socat - Port Forwarding
category: tunnels
subcategory: port-forwarding
os: linux
command: socat TCP-LISTEN:port,fork TCP:dest:port
tools: socat
---


### Forward a port from a compromised pivot

On the pivot host:

```bash
socat TCP-LISTEN:2345,fork TCP:10.8.30.112:5432
```

From Kali, connect to the pivot's listener:

```bash
psql -h 192.168.40.78 -p 2345 -U postgres
```

Packets land on port 2345 of the pivot, socat forwards them to 5432 of the internal host.
