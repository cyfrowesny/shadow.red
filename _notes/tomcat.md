---
title: Tomcat Manager Login
category: initial-access
subcategory: web-attacks
os: linux
command: msfconsole use scanner/http/tomcat_mgr_login
tools: msfconsole
---


### Common configuration files

- `/etc/tomcat9/tomcat-users.xml`
- `/usr/share/tomcat8/conf/tomcat-users.xml`
- `/var/lib/tomcat-8.5/conf/tomcat-users.xml`

### Metasploit

```bash
use scanner/http/tomcat_mgr_login
```
