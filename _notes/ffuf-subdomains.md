---
title: Subdomain Enumeration with ffuf
category: recon
subcategory: subdomains
os: linux
command: ffuf -u http://target/ -H "Host FUZZ.target"
tools: ffuf
---


### Subdomain enumeration with size filter

```bash
ffuf -u 'http://harder.local/' -c -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-20000.txt -H 'Host: FUZZ.harder.local' -t 100 -fs 1985
```

### HTTPS variant

```bash
ffuf -c -u 'https://xor.com' -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-110000.txt -H 'Host: FUZZ.xor.com' -fs 0 | tee ./subdomain_discovery
```

### Fast variant

```bash
ffuf -u 'http://vulnnet.thm/' -c -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-20000.txt -t 100 -H 'Host: FUZZ.vulnnet.thm'
```
