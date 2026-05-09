---
title: ARP Spoofing
category: wireless
subcategory: sub-02
os: linux
command: arpspoof -i wlan0 -t [target ip] [router ip] -r
tools: arpspoof
---



### ARP Spoofing

ARP Spoofing is a network attack that allows an attacker to intercept data transmitted within a local network. This attack involves sending crafted ARP packets containing the attacker's MAC address across the LAN. As a result, data packets sent by other computers on the network reach the attacker instead of the intended recipient, allowing them to eavesdrop on communications. Perform an attack that spoofs a router or other device on the local network. Below commands starts poisoning our network traffic between the target and the router. We run these two commands simultaneously in separate windows.

```bash
arpspoof -i [Interface Name] -t [Victim's IP] [Router's IP]
arpspoof -i wlan0 -t 192.168.179.147 192.168.179.2
```
Arpspoof can also be set to bidirectional with the `-r` flag. In this case, only one command is run.

```bash
arpspoof -i wlan0 -t [target ip] [router ip] -r
```

**What's happening?**

- The attacker sends fake ARP packets to the victim: "Hey, I'm the router."
- Simultaneously, to the router: "Hey, I'm the victim."
- The victim and router think they're sending data to each other, but in reality, it's going to the attacker.
- The attacker sees all traffic between the victim and the router (passwords, login credentials, websites).


### SSL Strip

```bash
sslstrip -l 8080
```

This command runs the sslstrip utility, which listens on port 8080 to intercept and manipulate HTTP connections, changing them from HTTPS to HTTP. This utility acts as an intermediary between the client and the server, removing SSL/TLS encryption from connections, allowing it to intercept user data.