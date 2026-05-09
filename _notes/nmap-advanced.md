---
title: Nmap Advanced Scans
category: recon
subcategory: nmap
os: linux
command: nmap -Pn -F -sV -O -sC target
tools: nmap
---


### Service version + OS detection

```bash
nmap -Pn -F -sV -O 10.4.2.12
```

### With default scripts

```bash
nmap -Pn -F -sV -O -sC 10.4.2.12
nmap -Pn -F -sV -O --osscan-guess -sC 10.4.2.12
```

### Faster (more aggressive)

```bash
nmap -Pn -F -sV -O -sC -T5 10.4.2.12
```

### Maximum intensity full-port

```bash
nmap -T4 -sS -sV --version-intensity 8 -O --osscan-guess -p- 10.4.2.12
```
