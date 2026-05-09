---
title: theHarvester - Email and Subdomain Harvesting
category: recon
subcategory: osint
os: linux
command: theHarvester -d google.com -b all
tools: theHarvester
---


### All sources

```bash
theHarvester -d google.com -b all
```

### Selected engines

```bash
theHarvester -d INE -b duckduckgo,baidu,bing
theHarvester -d offsec.com -b duckduckgo,baidu,bing
```

### With result limit

```bash
theharvester -d microsoft.com -b google -l 5
```
