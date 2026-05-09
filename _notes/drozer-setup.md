---
title: Drozer Basic Setup
category: android
subcategory: sub-11
os: linux, windows
command: drozer console connect
tools: drozer, adb
---


Download: https://github.com/ReversecLabs/drozer-agent/releases

### Port forwarding

```bash
adb forward tcp:31415 tcp:31415
```

### Connect to Drozer

```bash
drozer console connect
```

Or remote:

```bash
drozer console connect --server <phone_ip_address>
```
