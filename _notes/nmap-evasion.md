---
title: Nmap Firewall & IDS Evasion
category: recon
subcategory: nmap
os: linux
command: nmap -Pn -sA -p443,3389 target
tools: nmap
---


### ACK scan (firewall detection)

`unfiltered` = no firewall, `filtered` = firewall active.

```bash
nmap -Pn -sA -p443,3389 10.4.27.83
```

### Packet fragmentation

```bash
nmap -Pn -sS -sV -F -f -p80,445,3389 10.4.27.83
```

### MTU manipulation

```bash
nmap -Pn -sS -sV -F -f --mtu 32 -p80,445,3389 10.4.27.83
nmap -Pn -sS -sV -F -f --mtu 8 -p80,445,3389 10.4.27.83
```

### Data length and decoys

```bash
nmap -Pn -sS -sV -F -f --data-length 200 -D -p80,445,3389 10.4.27.83
```
