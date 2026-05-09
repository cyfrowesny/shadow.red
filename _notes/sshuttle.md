---
title: sshuttle - VPN over SSH
category: tunnels
subcategory: ssh
os: linux
command: sshuttle -r user@pivot subnet
tools: sshuttle
---


Configures local routing to push traffic through an SSH tunnel transparently. Requires root locally and Python 3 on the SSH server.

### Standard usage

```bash
sshuttle -r sean@10.11.1.251 10.1.1.0/24
```

### Multi-subnet via custom SSH port

```bash
sshuttle -r sysadmin@192.168.45.78:3322 10.8.20.0/24 10.10.30.0/24
```

### Use any tool transparently

No proxychains needed:

```bash
smbclient -L //10.10.30.118/ -U fin_admin --password=Passw0rd!567
nmap -p 22,80,445,3389 10.50.72.30 --open -sV -Pn -sT
```
