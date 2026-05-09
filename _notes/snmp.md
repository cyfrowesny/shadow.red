---
title: SNMP Enumeration
category: recon
subcategory: service-enum
os: linux
command: snmpwalk -v 1 -c public target
tools: nmap, snmpwalk
---


### Port discovery

```bash
nmap -sU -p 161 10.10.20.24
```

### Nmap scripts

```bash
ls -al /usr/share/nmap/scripts/ | grep -e "snmp"
ls -at /usr/share/nmap/nselib/data/ | grep "snmp"
```

### SNMP brute force

```bash
nmap -sU -p 161 --script=snmp-brute 10.10.20.24
```

### snmpwalk

```bash
snmpwalk -v 1 -c public 10.10.20.24
```

### All snmp scripts

```bash
nmap -sU -p 161 --script snmp-* 10.10.20.24
```
