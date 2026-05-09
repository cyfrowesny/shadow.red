---
title: Netsh Port Proxy (Windows)
category: tunnels
subcategory: windows-tunnel
os: windows
command: netsh interface portproxy add v4tov4
tools: netsh
---


Native Windows port forwarding without extra tooling.

### Add a forwarding rule

```cmd
netsh interface portproxy add v4tov4 listenport=3322 listenaddress=192.168.45.78 connectport=22 connectaddress=10.8.20.130
```

### Allow inbound traffic in the firewall

```cmd
netsh advfirewall firewall add rule name="port_forward_ssh_3322" protocol=TCP dir=in localip=192.168.45.78 localport=3322 action=allow
```

### Cleanup

```cmd
netsh advfirewall firewall delete rule name="port_forward_ssh_3322"
netsh interface portproxy del v4tov4 listenport=3322 listenaddress=192.168.45.78
```
