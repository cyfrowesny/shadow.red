---
title: Attacking WiFi with wifite
category: wireless
subcategory: sub-03
os: linux
command: sudo wifite
tools: wifite
---


## wifite

wifite is a tool that automates the entire process of cracking wireless networks. Instead of manually running airmon-ng, airodump-ng, aireplay-ng, and aircrack-ng, you simply launch wifite and select the target. It handles the rest.

### Basic Usage

wifite will automatically switch your card to monitor mode, begin scanning, and display a list of available networks. When you see the target, press Ctrl+C, select the network number, and watch the tool perform the attack.

```bash
sudo wifite
```

### Filtering Options

```bash
# WPA2 Networks Only
sudo wifite --wpa

# WPS Networks Only
sudo wifite --wps

# WEP Networks Only
sudo wifite --wep

# Specific Channel
sudo wifite -c 6

# Minimum Signal (in dB)
sudo wifite --pow 50

# Custom Dictionary for Cracking
sudo wifite --dict /path/to/wordlist.txt

# Show only networks with clients
sudo wifite --clients-only

# Passive Mode (no deauth)
sudo wifite --nodeauths

# More Information While Running
sudo wifite -v
```

### What Does Wifite Attack?

Depending on the network type, wifite automatically attacks:

- **WEP** – collects the IV and cracks the key (fragmentation, chop-chop, ARP replay)
- **WPA/WPA2** – captures the handshake or PMKID, then cracks it using a dictionary method
- **WPS** – performs a Pixie Dust or brute-force PIN attack

Wifite is the perfect tool for quickly testing a network automatically.