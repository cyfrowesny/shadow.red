---
title: Shell Stabilization (Python pty)
category: initial-access
subcategory: shells
os: linux
command: python3 -c 'import pty;pty.spawn("/bin/bash")'
tools: python3, stty, export
---


### Spawn pty

```bash
python3 -c 'import pty;pty.spawn("/bin/bash")'
```

If only Python 2 is available:

```bash
python -c 'import pty;pty.spawn("/bin/bash")'
```

### Background, raw mode, foreground

Press `Ctrl+Z`, then on the local Kali shell:

```bash
stty raw -echo; fg
```

### Set rows/cols and TERM

```bash
stty rows 51 cols 237
export TERM=xterm-256color
```

Check current size first with `stty -a`.

### Pretty PS1 prompt

```bash
export PS1='\[\e[31m\]\u\[\e[96m\]@\[\e[35m\]\H\[\e[0m\]:\[\e[93m\]\w\[\e[0m\]\$ '
```

### Quick "available tools" probe

```bash
echo "Useful tools:"; missing=""; for i in kubectl hostname perl python python3 dpkg bash sh vim ls nmap curl wget ping apt apk openssl nc netcat sed nano base64 tar; do command -v "$i" >/dev/null 2>&1 && echo "$i" || missing="$missing $i"; done; if [ -n "$missing" ]; then echo "Missing tools:$missing"; fi
```
