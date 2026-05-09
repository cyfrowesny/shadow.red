---
title: Frida Root Detection Bypass
category: android
subcategory: sub-07
os: linux, windows
command: frida -U 4463 -l root_bypass.js
tools: frida
---


### Frida script (root_bypass.js)

```javascript
Java.perform(function(){
    var RootCls = Java.use("com.scottyab.rootbeer.RootBeer");
    RootCls.isRooted.implementation = function(){
        console.log("[*] Root detection bypassed!");
        return false;
    }
});
```

### Usage

```bash
adb shell ps | grep allsafe
frida -U 4463 -l root_bypass.js
```
