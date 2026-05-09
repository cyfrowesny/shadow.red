---
title: SSH Dynamic Port Forwarding (-D / SOCKS)
category: tunnels
subcategory: ssh
os: linux, windows
command: ssh -N -D port user@pivot
tools: ssh, proxychains
---


Creates a SOCKS proxy on the SSH client. Any host the SSH server can reach becomes reachable through that proxy.

### Standard

```bash
ssh -N -D 1080 sean@10.11.1.251
```

### Backgrounded with verbosity

```bash
ssh -D 1080 -fN sean@10.11.1.251 -vv
```

### Custom SSH port

```bash
ssh -D 1080 -fN -f john@10.11.1.252 -p 22000
```

### With compression (sometimes faster)

```bash
ssh -C -N -D 1080 sean@10.11.1.251
```

### Open SOCKS for the whole network interface

```bash
ssh -N -D 0.0.0.0:7777 sysadmin@10.8.20.130
```

### proxychains config (`/etc/proxychains4.conf`)

```
[ProxyList]
socks5 192.168.45.78 7777
```

### Use it

```bash
proxychains smbclient -L //10.10.30.118/ -U fin_admin --password=Passw0rd!567
```
