---
title: Login Page Attack Checklist
category: initial-access
subcategory: web-attacks
os: linux, windows
command: manual checklist
tools: manual
---


### Things to try on a login page

- Default credentials (per CMS / appliance)
- Authentication bypass tricks
- SQL Injection
- Bruteforce / Hydra / Wfuzz with custom payload list
- Username enumeration via error messages
- Code injection
- Templating engine - try SSTI
- NoSQL Injection
- CSRF
- Cross Origin Attacks
- Session Riding / Click Jacking
- SQL filter bypass tricks

### After successful login

- Look up the version on Exploit-DB
- File upload features
- User privilege changes
- Direct code execution from a new post/page
- Code execution via plugins / modules / extensions / templates
- Custom plugin / extension / addon with backdoor
- Downgrade attacks
- Editing pre-existing extensions to plant code
- Sensitive DB info / credentials
- Diagnostic tools that perform system-level exec (command injection)
- Scheduling system-level jobs
- Backup download and offline analysis

### CMS default-paths reference

https://github.com/pwnwiki/webappdefaultsdb/blob/master/README.md
