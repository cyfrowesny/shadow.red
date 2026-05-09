---
title: Hardcoded Credentials Search
category: android
subcategory: sub-06
os: linux
command: grep -r -E "\b([0-9]{1,3}\.){3}[0-9]{1,3}\b" temp_analysis/
tools: grep
---


### Locations to check

- `strings.xml`
- `AndroidManifest.xml`
- Configuration files in `/res/`
- Decompiled Java classes
- `assets/` folder

### Searching in decompiled APK

```bash
grep -r -E -i "password|passwd|pwd|secret|api_key|apikey|token|auth|credential|private_key|client_id|client_secret|firebase|aws_access|encryption_key" temp_analysis/ --include="*.java" --include="*.xml" --include="*.json"
```

### Searching for URLs

```bash
grep -r -E "https?://[^\s\"'>]+" temp_analysis/ --include="*.java" --include="*.xml"
```

### Searching for IPs

```bash
grep -r -E "\b([0-9]{1,3}\.){3}[0-9]{1,3}\b" temp_analysis/
```
