---
title: rpcclient - RPC Enumeration
category: recon
subcategory: service-enum
os: linux
command: rpcclient -U "" -N target
tools: rpcclient, impacket-rpcdump
---


### Anonymous (null) login

```bash
rpcclient -U "" -N $target
```

### Authenticated login

```bash
rpcclient -U "twilliams" 10.10.24.203
```

### RPC dump via null session

```bash
impacket-rpcdump vulnnet.local/"":""@10.10.36.200
```

### Common commands inside the shell

```
help
enumdomusers
querydispinfo
```
