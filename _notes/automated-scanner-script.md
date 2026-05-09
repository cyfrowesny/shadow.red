---
title: Automated Security Scanner Script
category: android
subcategory: sub-11
os: linux
command: bash script
tools: apktool, grep
---


### Bash script for automated APK scanning

```bash
#!/bin/bash
APK=$1
TEMP_DIR="temp_analysis"

# Decompilation
apktool d $APK -o $TEMP_DIR -f

# Suspicious keyword list
KEYWORDS="password|passwd|pwd|secret|api_key|apikey|token|auth|credential|private_key|client_id|client_secret|firebase|aws_access|encryption_key"

# Search sensitive data
echo "=== Searching for sensitive data ==="
grep -r -E -i "$KEYWORDS" $TEMP_DIR --include="*.java" --include="*.xml" --include="*.json"

# Search URLs
echo "=== Searching for URLs ==="
grep -r -E "https?://[^\s\"'>]+" $TEMP_DIR --include="*.java" --include="*.xml"

# Search IPs
echo "=== Searching for IPs ==="
grep -r -E "\b([0-9]{1,3}\.){3}[0-9]{1,3}\b" $TEMP_DIR

# Cleanup
rm -rf $TEMP_DIR
```
