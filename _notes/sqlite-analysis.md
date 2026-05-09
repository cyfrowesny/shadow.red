---
title: SQLite Database Analysis
category: android
subcategory: sub-08
os: linux
command: sqlite3 database.db
tools: adb, sqlite3
---


### Access database

```bash
adb shell
cd /data/data/com.package.name/databases/
sqlite3 database.db
```

### SQLite commands

```bash
.tables
.schema table_name
SELECT * FROM users;
.quit
```
