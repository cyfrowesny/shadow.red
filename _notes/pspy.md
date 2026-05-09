---
title: pspy - Process Snooping
category: privesc
subcategory: linux-tools
os: linux
command: ./pspy64
tools: pspy
---


### Run

```bash
./pspy64
```

### Manual watch alternatives

```bash
watch -n 1 "ps -aux | grep pass"
watch "ps aux | grep '/bin/bash' | grep 'root'"
watch -n 1 "ps aux | grep '/bin/bash' | grep 'root'" > log.txt
```

### Loopback traffic sniffing for plaintext credentials

```bash
sudo tcpdump -i lo -A | grep "pass"
```

### Reference

https://github.com/DominicBreuker/pspy
