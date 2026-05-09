---
title: windapsearch - LDAP Enumeration
category: ad
subcategory: ad-enum
os: linux
command: python3 windapsearch.py --dc-ip target -U --full
tools: windapsearch
---


### Anonymous user list

```bash
windapsearch -u "" --dc-ip $target -U | grep '@' | cut -d ' ' -f 2 | cut -d '@' -f 1 | uniq > users.txt
```

### Authenticated full enumeration

```bash
windapsearch -d test.local -u user -p pass -U --full
windapsearch -d test.local -u user -p pass -U --full | egrep -i "pwd|pass|token|cred"
```

### Extract sAMAccountName + description (creds in description)

```bash
python3 windapsearch.py --dc-ip 192.168.192.142 -U --full | grep sAMAccountName
python3 windapsearch.py --dc-ip 192.168.192.142 -U --full | grep -iE "sAMAccountName | description"
```

### Group enumeration

```bash
python3 windapsearch.py --dc-ip 192.168.192.142 -G | grep cn
```

### Computers and unconstrained delegation

```bash
python3 windapsearch.py -u user1 -p Password@123 -d thecyborg.lab -C
python3 windapsearch.py -u user1 -p Password@123 -d thecyborg.lab --unconstrained-computer
```

### SPN enumeration (Kerberoast targets)

```bash
python3 windapsearch.py --dc-ip 192.198.192.142 --user-spns
```

### Build a userlist for spraying

```bash
python3 windapsearch.py --dc-ip 192.168.192.142 -U --full | grep -iE "sAMAccountName" | tee Userlist.txt
```
