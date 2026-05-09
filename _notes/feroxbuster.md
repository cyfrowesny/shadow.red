---
title: Feroxbuster
category: recon
subcategory: web-content
os: linux
command: feroxbuster -u target
tools: feroxbuster
---


### Basic recursive scan

```bash
feroxbuster -u http://10.10.10.56 -f -n
```

### With file extensions

```bash
feroxbuster -u http://10.10.10.56/cgi-bin/ -x sh,cgi,pl
```
