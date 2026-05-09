---
title: WPScan - WordPress Scanner
category: recon
subcategory: web-content
os: linux
command: wpscan --url target
tools: wpscan
---


### Enumerate plugins, themes, users

```bash
wpscan --url http://lemonsqueezy/wordpress/ -e ap,t,tt,u
```

### Aggressive plugin detection

```bash
wpscan --url http://192.168.50.244 --enumerate p --plugins-detection aggressive -o websrv1/
```
