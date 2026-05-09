---
title: John the Ripper - Hash Cracking
category: initial-access
subcategory: hash-cracking
os: linux
command: john --wordlist=rockyou.txt hashes.txt
tools: john
---


### Hash type identifiers (Linux shadow)

- `$1` = MD5
- `$2` = Blowfish
- `$5` = SHA-256
- `$6` = SHA-512

### Windows NT hashes

```bash
john --format=NT hashes.txt
john --format=NT hashes.txt --wordlist=/usr/share/wordlists/rockyou.txt
```

### Linux shadow

```bash
john --format=sha512crypt hashes.txt --wordlist=/usr/share/wordlists/rockyou.txt
```

### Kerberos formats

```bash
john --list=formats | grep krb
john hashes.txt --format=krb5tgs --wordlists=/usr/share/wordlists/rockyou.txt
```

### View cracked

```bash
cat ~/.john/john.pot
```

### SSH key cracking

```bash
ssh2john id_rsa > crackme.txt
john crackme.txt --wordlist=/usr/share/wordlists/rockyou.txt
```

### GPG key cracking

```bash
gpg2john klucz.asc > hash.txt
john hash.txt --wordlists=/usr/share/wordlists/rockyou.txt
```
