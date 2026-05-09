---
title: rinetd - Simple Daemon Port Forwarder
category: tunnels
subcategory: linux-tunnel
os: linux
command: sudo systemctl start rinetd
tools: rinetd
---


### Configuration

```bash
sudo nano /etc/rinetd.conf
```

Add a forwarding rule:

```
0.0.0.0 80 10.50.72.30 80
```

### Start the service

```bash
sudo systemctl start rinetd
ss -tlnp
```

All traffic on port 80 is now forwarded to `10.50.72.30:80` - no SSH or extra tooling required.
