---
title: Fierce - DNS Subdomain Discovery
category: recon
subcategory: dns-whois
os: linux
command: fierce --domain google.com
tools: fierce
---


### Basic usage

```bash
fierce --domain google.com
```

### With multiple threads

```bash
fierce --domain google.com --threads 2
```

### Targeting a specific MX server

```bash
fierce -dns mx.hackersploit.org
```
