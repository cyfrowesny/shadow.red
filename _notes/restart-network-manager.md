---
title: Changing the MAC address
category: wireless
subcategory: sub-01
os: linux
command: macchanger -a wlan1
tools: ifconfig, macchanger
---



## Steps

The following commands allow you to change the MAC address of a network interface to any random address other than the original. This is useful when you want to hide your connection to a device on a network under attack.

### 1. Shutdown wlan1 interface:

```bash
ifconfig wlan1 down
```

### 2. Set random vendor MAC of the same kind:

```bash
macchanger -a wlan1
```

###  3. Turn on wlan1 interface:

```bash
ifconfig wlan1 up
```
