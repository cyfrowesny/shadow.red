---
title: Frida FLAG_SECURE Bypass
category: android
subcategory: sub-07
os: linux, windows
command: frida -U -f infosecadventures.allsafe -l secureflag.js
tools: frida
---


Bypass screenshot prevention (FLAG_SECURE).

### Frida script (secureflag.js)

```javascript
Java.perform(function() {
    var surface_view = Java.use('android.view.SurfaceView');
    var set_secure = surface_view.setSecure.overload('boolean');
    set_secure.implementation = function(flag){
        console.log("setSecure() flag called with: " + flag);
        set_secure.call(false);
    };

    var window = Java.use('android.view.Window');
    var set_flags = window.setFlags.overload('int', 'int');
    var layout_params = Java.use('android.view.WindowManager$LayoutParams');

    set_flags.implementation = function(flags, mask){
        console.log("FLAG_SECURE: " + layout_params.FLAG_SECURE.value);
        console.log("Before setFlags: " + flags);
        flags = (flags.value & ~layout_params.FLAG_SECURE.value);
        console.log("After setFlags: " + flags);
        set_flags.call(this, flags, mask);
    };
});
```

### Usage

```bash
frida -U -f infosecadventures.allsafe -l secureflag.js
```
