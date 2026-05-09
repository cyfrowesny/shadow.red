---
title: Wfuzz - Directory and File Discovery
category: recon
subcategory: web-content
os: linux
command: wfuzz -c -z file,wordlist --hc 404 url/FUZZ
tools: wfuzz
---


### Directory enumeration

```bash
wfuzz -c -z file,/usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt --hc 404,403 'http://10.10.147.218/FUZZ/'
```

### File enumeration

```bash
wfuzz -c -z file,/usr/share/seclists/Discovery/Web-Content/raft-medium-files.txt --hc 404,403 'http://10.10.147.218:1234/FUZZ'
```

### Authenticated fuzzing (cookie)

```bash
wfuzz -c -b "<SESSIONVARIABLE>=<SESSIONVALUE>" -z file,/opt/SecLists/Discovery/Web-Content/raft-medium-files.txt --hc 404 "$URL"
```

### Parameter discovery

```bash
wfuzz -c -z file,/opt/SecLists/Discovery/Web-Content/burp-parameter-names.txt "https://example.com/?FUZZ=data"
```
