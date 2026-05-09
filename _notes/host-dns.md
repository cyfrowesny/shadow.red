---
title: DNS Lookup with host
category: recon
subcategory: dns-whois
os: linux
command: host google.com
tools: host
---


### Resolve domain to IP

```bash
host google.com
```

### Name servers

```bash
host -t ns google.com
```

### Zone transfer (AXFR)

```bash
host -t axfr -l google.com ns1.google.com
```
