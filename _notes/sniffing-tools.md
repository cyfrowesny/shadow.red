---
title: Traffic Display Tools
category: wireless
subcategory: sub-02
os: linux
command: driftnet -i eth0
tools: dsniff, driftnet, urlsnarf, webspy, mailsnarf
---


### Tools for Displaying Traffic

To execute the following commands to display network traffic, you must have arpspoof running.

```bash
dsniff -i eth0
driftnet -i eth0
urlsnarf -i eth0
webspy -i eth0
mailsnarf -i eth0
```

- **filesnarf** - captures files
- **driftnet** - captures images
- **urlsnarf** - captures browser traffic
- **webspy** - captures browser traffic content
- **mailsnarf** - captures email content