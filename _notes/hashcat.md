---
title: Hashcat - GPU Hash Cracking
category: initial-access
subcategory: hash-cracking
os: linux
command: hashcat -a 0 -m mode hashes.txt wordlist
tools: hashcat
---


### Windows NTLM (mode 1000)

```bash
hashcat -a 3 -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt
```

### Linux SHA-512 (mode 1800)

```bash
hashcat -a 3 -m 1800 hashes.txt /usr/share/wordlists/rockyou.txt
```

### Kerberos TGS (Kerberoasting, mode 13100)

```bash
hashcat -m 13100 -o cracked.txt -a 0 hashaes.txt /usr/share/wordlists/rockyou.txt
sudo hashcat -m 13100 hashes.kerberoast /usr/share/wordlists/rockyou.txt -r /usr/share/hashcat/rules/best64.rule --force
```

### Kerberos AS-REP (AS-REP Roasting, mode 18200)

```bash
sudo hashcat -m 18200 hashes.asreproast /usr/share/wordlists/rockyou.txt -r /usr/share/hashcat/rules/best64.rule --force
```

### List Kerberos modes

```bash
hashcat --help | grep -i "Kerberos"
```
