---
title: Attacking WPA2 with airtools
category: wireless
subcategory: sub-03
os: linux
command: airodump-ng --bssid aa:bb:cc:dd:ee:ff -c 4 -w capture wlan1
tools: airodump-ng, aireplay-ng
---


## Attacking WPA2 with airtools

Unlike WEP, the WPA2 protocol doesn't have any cryptographic weaknesses that would allow for direct key cracking. Instead, we capture the handshake when the client connects to the network and then attempt to guess the password using dictionary or brute-force methods.

### Capturing the Handshake

We start listening on the target network and wait for the WPA handshake message in the upper right corner.

```bash
airodump-ng --bssid aa:bb:cc:dd:ee:ff -c 4 -w capture wlan1
```

The handshake will be captured when one of the clients connects to the network. We can wait for it... or speed it up a bit.

### Deauthentication

We send deauthentication packets to connected clients. After disconnecting, their devices will automatically attempt to reconnect – then we capture the handshake.

```bash
# Deauth for the first client:
aireplay-ng -0 5 -a aa:bb:cc:dd:ee:ff -c 11:22:33:44:55:66 wlan1

# Deauth for the second client:
aireplay-ng -0 5 -a aa:bb:cc:dd:ee:ff -c 77:88:99:AA:BB:CC wlan1
```

The `-0 5` parameter means sending 5 deauth packets. You can target multiple clients simultaneously in separate terminals.

**Remember!** After capturing the handshake, a dictionary attack remains; you can find this on shadow.red. Success depends on the quality of the dictionary and the strength of the password. A strong, random WPA2 password is practically unbreakable using this method.