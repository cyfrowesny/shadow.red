---
title: HostRecon.ps1
category: ad
subcategory: ad-enum
os: windows
command: . .\HostRecon.ps1; Invoke-HostRecon
tools: HostRecon.ps1
---


HostRecon collects:

- Hostname / IP / current user / domain
- Local users and admins
- Netstat / DNS cache / shares
- Scheduled tasks
- Process listing
- AntiVirus / Firewall info
- LAPS, domain password policy, Domain Admins, Domain Controllers
- Sysinternals Sysmon presence
- Common security products
- Web proxy info
