---
title: Generate Signing Key
category: android
subcategory: sub-03
os: linux, windows
command: keytool -genkeypair
tools: keytool
---


### Generating a signing key

```bash
keytool -genkeypair -v \
  -keystore my-release-key.jks \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000 \
  -alias my-key-alias
```
