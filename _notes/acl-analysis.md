---
title: ACL Analysis - GenericAll Rights
category: ad
subcategory: ad-enum
os: windows
command: Get-ObjectAcl -Identity user
tools: PowerView
---


### Inspect ACL for a target object

```powershell
Get-ObjectAcl -Identity stephanie
```

Fields of interest: `ObjectSID`, `ActiveDirectoryRights`, `SecurityIdentifier`.

### Resolve SIDs to names

```powershell
Convert-SidToName S-1-5-21-1987370270-658905905-1781884369-1104
Convert-SidToName S-1-5-21-1987370270-658905905-1781884369-553
```

### Find all principals with GenericAll over a group

```powershell
Get-ObjectAcl -Identity "Management Department" | ? {$_.ActiveDirectoryRights -eq "GenericAll"} | select SecurityIdentifier,ActiveDirectoryRights
```

### Bulk SID resolution

```powershell
"S-1-5-21-1987370270-658905905-1781884369-512","S-1-5-21-1987370270-658905905-1781884369-1104","S-1-5-32-548","S-1-5-18","S-1-5-21-1987370270-658905905-1781884369-519" | Convert-SidToName
```
