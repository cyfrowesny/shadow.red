---
title: SSH Local Port Forwarding (-L)
category: tunnels
subcategory: ssh
os: linux, windows
command: ssh -N -L localport:dest:destport user@pivot
tools: ssh
---


Listen on the SSH client; packets travel through the tunnel to the SSH server and out to the destination.

### Multi-hop example

```bash
ssh -N -L 0.0.0.0:5544:10.10.30.118:3389 sysadmin@10.8.20.130
```

Flags:

- `-N` - no shell, just tunnel
- `-L` - local listener
- listen on port 5544 (rather than 3389) since unprivileged users cannot bind below 1024.

### Use the forwarded port

```bash
xfreerdp /v:192.168.45.78:5544 /u:fin_admin /p:Passw0rd!567
```

### Single-port localhost forward

```bash
ssh -N -L 81:127.0.0.1:80 sean@10.11.1.251
```
