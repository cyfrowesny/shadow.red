---
title: Nikto - Web Server Scanner
category: recon
subcategory: web-content
os: linux
command: nikto -h target
tools: nikto
---


### Basic scan

```bash
nikto --host http://192.168.1.210 -C all
```

### With auth and output file

```bash
nikto -h http://10.10.147.218:1234/manager/html -id bob:bubbles -o niktoscan.txt
```

### LFI tuning

```bash
nikto -h http://target.com -Tuning 6
```
