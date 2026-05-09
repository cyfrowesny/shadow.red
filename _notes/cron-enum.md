---
title: Cron Job Enumeration
category: privesc
subcategory: linux-privesc
os: linux
command: cat /etc/crontab
tools: cat, ls, crontab
---


### Inspect cron files

```bash
cat /etc/crontab
crontab -l
sudo crontab -l
ls -al /etc/cron*
cat /etc/cron*
cat /var/spool/cron/*
```

### Cron logs

```bash
grep "CRON" /var/log/syslog
grep "CRON" /var/log/cron.log
cat /var/log/cron
```
