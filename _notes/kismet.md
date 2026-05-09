---
title: Kismet tool for monitoring wireless networks
category: wireless
subcategory: sub-05
os: linux
command: sudo kismet -c wlan0 --no-ncurses
tools: kismet, sqlite3, kismetdb_dump_devices, kismetdb_to_pcap
---

## Kismet

Kismet is a powerful tool for monitoring wireless networks.

### Basic Launch

```bash
# Basic Launch
sudo kismet -c wlan0 --no-ncurses

# Limit to selected channels
sudo kismet -c wlan0:channels"4,5,6" --no-ncurses

# Run in the background as a daemon
sudo kismet --daemonize
```

### Access via Browser

Once launched, open your browser. In the menu (upper left corner), select Data Sources → wlan0 → Enable Source to begin collecting data.

```bash
firefox localhost:2501
```

### Disabling Kismet

```bash
ps -aux | grep kismet
sudo kill -9 <PID>
```

### Configuration

Configuration before the first run is important.

It's a good idea to put the main settings in `/etc/kismet/kismet_site.conf`.

```
log_prefix=/var/log/kismet/
log_types=kismet,pcapng
httpd_bind_address=127.0.0.1
```

Create a directory for the logs:

```bash
sudo mkdir /var/log/kismet
```

You can also change the log path in `/etc/kismet/kismet_logging.conf`. By default, logs are saved in the directory from which you run kismet.

### Running without logging

```bash
sudo kismet --no-logging
sudo kismet -n
```

### Configuration files

Displays all configuration files:

```bash
ls -al /etc/kismet
```

### Remote monitoring via SSH

Kismet also allows you to collect data from a remote WiFi adapter via an SSH tunnel.

```bash
# On the local machine:
sudo kismet --daemonize
ssh user@10.11.0.150 -L 8000:localhost:3501

# On the remote machine:
sudo kismet_cap_linux_wifi --connect 127.0.0.1:8000 --source=wlan0
```

### Working with an SQLite Database

Kismet saves data in SQLite format. Sample queries:

```bash
sudo sqlite3 /var/log/kismet/Kismet-*.kismet
.tables
.headers on
select type, devmac from devices;
.quit
```

### Exporting to other formats

```bash
# To JSON:
kismetdb_dump_devices --in file.kismet --out sample.json --verbose

# To PCAP:
kismetdb_to_pcap --in file.kismet --out sample.pcapng --verbose
```

### Playing back captured data

```bash
sudo kismet -c kismet.pcap:realtime=true
```