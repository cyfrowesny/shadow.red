---
title: Sublist3r - Subdomain Enumeration
category: recon
subcategory: subdomains
os: linux
command: sublist3r -d hackersploit.org
tools: sublist3r
---


### Basic search

```bash
sublist3r -d hackersploit.org
```

### Selected search engines

```bash
sublist3r -d hackersploit.org -e google,yahoo
```

### With bruteforce and threads

```bash
sublist3r -d google.com -b -t 10
```
