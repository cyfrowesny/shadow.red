---
title: Burp Suite Proxy Setup
category: android
subcategory: sub-04
os: linux, windows
command: Burp Proxy Listeners
tools: Burp Suite
---


### Burp Configuration

1. Add proxy `:8080` in Burp Suite
2. Or use: `Proxy Listeners` → Add → Bind to address: port `8080`

### Android Configuration

1. Settings → Wi-Fi → Long press on network
2. Advanced Options → Proxy → Manual
3. Hostname: `<computer IP>` (e.g. 192.168.1.100)
4. Port: `8080`

### Certificate Installation

1. In Burp: `Proxy` → `Import/Export CA Certificate` → Export `cacert.der`
2. Rename: `cacert.der` → `cacert.cer`
3. Push to phone
4. Settings → Security → Install certificate → VPN & apps
5. Select file and install
6. Settings → Security → Trusted credentials → User → Verify PortSwigger
