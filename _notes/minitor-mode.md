---
title: Setup monitor mode
category: wireless
subcategory: sub-01
os: linux
command: sudo airmon-ng start wlan0
tools: airmon-ng, ifconfig, iwconfig
---


## Monitor mode
When we want to hack networks, we will often set our network interface to listening mode.

### Option #1:

```bash
ifconfig wlan1 down
iwconfig wlan1 mode monitor
ifconfig wlan1 up
```

### Option #2
We can also do this using airtools. It creates (1) and stops (2) monitoring. Note that this command creates a new virtual interface wlan0mon and should be handled as such.

```bash
# Create monitor mode interface named wlan0mon
sudo airmon-ng start wlan0

# Stop monitor mode
sudo airmon-ng stop wlan0mon
```

### Monitor mode on a specific channel
The following command creates monitor mode on a specific channel, while the second and third commands show the channel.

```bash
sudo airmon-ng start wlan0 2
sudo iw dev wlan0mon info
sudo iwconfig wlan0mon
```