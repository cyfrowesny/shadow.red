---
title: dig - DNS Information Groper
category: recon
subcategory: dns-whois
os: linux
command: dig -t any google.com
tools: dig
---


### MX records

```bash
dig -t mx google.com
```

### All records

```bash
dig -t any google.com
```

### Reverse zone transfer (subdomain discovery)

```bash
dig ironcorp.me @10.10.69.0 axfr
```

### Specific record types against custom DNS server

```bash
dig fire.windcorp.thm @10.10.233.82 -t NS
dig windcorp.thm @10.10.233.82 -t MX
dig fire.windcorp.thm @10.10.233.82 -t TXT
dig any fire.windcorp.thm @10.10.233.82
```
