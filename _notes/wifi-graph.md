---
title: Wireless Network Graph
category: wireless
subcategory: sub-05
os: linux
command: airodump-ng -w dump wlan0mon
tools: airodump-ng, airgraph-ng, ristretto
---

## Network Graph

If you want to see the networks around you graphically, there's a tool for that:

```bash
sudo airgraph-ng
```

airgraph-ng generates graphs from data collected by airodump-ng. A quick way to visualize the relationships between access points and clients.

### Data Collection

.csv file from airodump-ng:

```bash
airodump-ng -w dump wlan0mon
```

### CAPR Graph

Shows which devices are connected to which access points:

```bash
airgraph-ng -i dump-01.csv -o capr.png -g CAPR
ristretto capr.png
```

### CPG Graph

Shows which networks devices are searching for (probe requests):

```bash
airgraph-ng -i dump-01.csv -o cpg.png -g CPG
ristretto cpg.png
```

Useful for identifying networks that clients have connected to before – potential targets for the Evil Twin attack discussed earlier.