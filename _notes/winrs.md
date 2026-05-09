---
title: WinRS - Remote Shell over WinRM
category: ad
subcategory: ad-lateral
os: windows
command: winrs -r:host -u:user -p:pass cmd
tools: winrs
---


### Execute command remotely

```cmd
winrs -r:* -u:ziom -p:superhaslo "cmd /c ipconfig & whoami /all"
```

`*` may be replaced with an IP or hostname.
