---
title: Capture network traffic
category: wireless
subcategory: sub-02
os: linux
command: sudo tcpdump -i eth0 -w packets.pcap
tools: tcpdump
---


## Capture network traffic
This tool captures network traffic and saves it to a .pcap or newer .pcapng file. It can then be read using Wireshark, which I won't discuss here.


### Displaying Interfaces

```bash
tcpdump -D
```

### Basic Capture

```bash
sudo tcpdump -i eth0 -w packets.pcap
```

### Capturing a Specific IP Address

```bash
sudo tcpdump -i eth0 host 192.168.1.1 -w packets.pcap
```

### Capturing a Specific Port

Can be combined with the previous and other options:

```bash
sudo tcpdump -i eth0 port 80 -w packets.pcap
```

### Capturing a Specific Number of Packets

Captures only 100 packets, then automatically terminates:

```bash
sudo tcpdump -i eth0 -c 100 -w packets.pcap
```

### Writing and displaying simultaneously

Writes to a file and displays on the screen:

```bash
sudo tcpdump -i eth0 --print -w packets.pcap
```