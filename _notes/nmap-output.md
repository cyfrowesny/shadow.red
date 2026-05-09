---
title: Nmap Output to File
category: recon
subcategory: nmap
os: linux
command: nmap -oN test.txt target
tools: nmap
---


### Save to normal text

```bash
nmap -Pn -F -sV -O -sC -oN test.txt 10.4.2.12
```

### Save to XML

```bash
nmap -Pn -F -sV -O -sC -oX test.xml 10.4.2.12
```
