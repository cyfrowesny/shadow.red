---
title: ldapsearch - Authenticated Dump
category: ad
subcategory: ad-enum
os: linux
command: ldapsearch -x -H ldap://target -D 'user' -w 'pass' -b 'DC=domain,DC=local'
tools: ldapsearch
---


### Authenticated dump

```bash
ldapsearch -x -H ldap://10.10.126.240 -D 'lparker@fusion.corp' -w '!!abbylvzsvs2k6!' -b 'DC=fusion,DC=corp' | tee ldapdump
```

### LAPS password search

```bash
ldapsearch -x -H 'ldap://192.168.142.122' -D 'hutch\fmcsorley' -w 'CrabSharkJellyfish192' -b 'dc=hutch,dc=offsec' "(ms-MCS-AdmPwd=*)" ms-MCS-AdmPwd
```
