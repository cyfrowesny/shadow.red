---
title: Double Pivoting (chained SOCKS)
category: tunnels
subcategory: ssh
os: linux
command: proxychains ssh -N -D 1081 user@hop2
tools: ssh, proxychains
---


Stack two SOCKS proxies to reach networks behind the first pivot.

### First pivot to IT subnet

```bash
ssh -N -D 127.0.0.1:1080 alex@10.20.1.180
```

`/etc/proxychains4.conf`:

```
[ProxyList]
socks5 127.0.0.1 1080
```

### Second pivot to Admin subnet through the first tunnel

```bash
proxychains ssh -N -D 1081 lucas@10.5.5.1 -p 222
```

### Switch proxychains to the new SOCKS

`/etc/proxychains4.conf`:

```
[ProxyList]
socks5 127.0.0.1 1081
```

### Scan deepest subnet

```bash
proxychains -q nmap -sT -Pn 10.7.7.22 --top-ports=100 -v
```

Traffic path: Kali → tunnel 1 (1080) → IT pivot → tunnel 2 (1081) → Admin pivot → server subnet.
