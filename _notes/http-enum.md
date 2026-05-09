---
title: HTTP Enumeration
category: recon
subcategory: service-enum
os: linux
command: nmap -sV --script=http-enum target
tools: nmap, msfconsole, curl
---


### Metasploit modules

```bash
search type:auxiliary name:http
use auxiliary/scanner/http/http_version
use auxiliary/scanner/http/http_header
use auxiliary/scanner/http/robots_txt
use auxiliary/scanner/http/dir_scanner
use auxiliary/scanner/http/files_dir
use auxiliary/scanner/http/http_login
use auxiliary/scanner/http/http_put
```

### Nmap

```bash
nmap -sV --script=http-enum 10.10.23.24
nmap -sV -p 80 --script=http-enum 10.10.4.12
```

### Direct request

```bash
curl http://10.10.2.14/secure/
```

### robots.txt and sitemaps

```bash
curl google.com/robots.txt
```

Important files to check: `robots.txt`, `sitemap.xml`, `sitemaps.xml`.
