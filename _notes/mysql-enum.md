---
title: MySQL Enumeration
category: recon
subcategory: service-enum
os: linux
command: mysql -u root -p -h target
tools: mysql, msfconsole
---


### Metasploit modules

```bash
search type:auxiliary name:mysql
use auxiliary/scanner/mysql/mysql_version
use auxiliary/scanner/mysql/mysql_login
use auxiliary/admin/mysql/mysql_enum
use auxiliary/admin/mysql/mysql_sql
use auxiliary/scanner/mysql/mysql_schemadump
```

### Direct connection

```bash
mysql -u root -p -h 10.0.25.212
mysql -uroot -ptoor -h 192.168.22.142
mysql -uroot -proot -h 192.168.22.142
```

### Basic interactive usage

```sql
show databases;
use database_name;
show tables;
exit
```
