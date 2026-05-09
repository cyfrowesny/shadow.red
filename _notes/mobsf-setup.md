---
title: MobSF (Mobile Security Framework) - Docker Setup
category: android
subcategory: sub-11
os: linux
command: sudo docker run -it -p 8000:8000 opensecurity/mobile-security-framework-mobsf
tools: docker, mobsf
---


### Enable Docker

```bash
sudo systemctl enable docker --now
```

### Pull MobSF image

```bash
sudo docker pull opensecurity/mobile-security-framework-mobsf
```

### Run MobSF

```bash
sudo docker run -it -p 8000:8000 opensecurity/mobile-security-framework-mobsf
```

### Default credentials

- Username: `mobsf`
- Password: `mobsf`

### Access

http://localhost:8000

### Online version

https://mobsf.live/
