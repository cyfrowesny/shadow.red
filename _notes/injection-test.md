---
title: Injection test
category: wireless
subcategory: sub-01
os: linux
command: sudo aireplay-ng -9 -e ninja-wifi -a 14:15:BS:14:BS:15 wlan0mon
tools: airmon-ng, aireplay-ng
---


## Monitor mode
Basic injection test to check whether the network card supports packet injection in monitor mode.

### Option #1:

```bash
sudo airmon-ng start wlan0 3
sudo aireplay-ng -9 wlan0mon
```

### Option #2
Option two, you must provide the network name

```bash
sudo aireplay-ng -9 -e ninja-wifi -a 14:15:BS:14:BS:15 wlan0mon
```

Parameter -D disables ip detection, i.e. it does not wait for a beacon frame:

```bash
sudo aireplay-ng -9 -e ninja-wifi -a 14:15:BS:14:BS:15 -D wlan0mon
```

**If the card supports injection (passing the test),** you can use advanced WiFi security testing tools.

**If not,** you can NOT actively send packets. This means:

- No fake AP creation
- No deauthentication attacks
- No ability to accelerate handshake capture
- No replay attacks