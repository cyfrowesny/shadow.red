---
title: WMAP - Metasploit Web Scanner
category: initial-access
subcategory: web-attacks
os: linux
command: wmap_run -t
tools: msfconsole, wmap
---


### Setup and run

```
service postgresql start
workspace -a web_scan
setg RHOSTS 10.10.2.23
load wmap
wmap_sites -a 10.10.2.23
wmap_targets -t http://10.10.2.23
wmap_sites -l
wmap_targets -l
wmap_run -t
```
