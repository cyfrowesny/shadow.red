---
title: Captive Portal Attack (fluxion)
category: wireless
subcategory: sub-04
os: linux
command: sudo ./fluxion.sh
tools: fluxion
---

## Captive Portal Attack (fluxion)

Fluxion is a tool that automates the Evil Twin attack using social engineering. Instead of brute-force password cracking, it creates a fake access point with a captive portal – a login page that asks the victim for their WiFi password. The password is verified in real time against a previously captured handshake.

### How does Fluxion work?

1. Scans networks and allows you to select a target
2. Intercepts WPA/WPA2 handshakes (Handshake Snooper)
3. Creates a fake AP with the same name as the original
4. Launches a DNS server that redirects all requests to the captive portal
5. Jams the original network, forcing clients to connect to the fake AP
6. Displays a login page imitating a router
7. Verifies the entered password with the handshake
8. Terminates the attack after receiving the correct password

### Installation and Launch

```bash
git clone https://github.com/FluxionNetwork/fluxion.git
cd fluxion
sudo ./fluxion.sh -i
sudo ./fluxion.sh
```

### Attack Modes

Fluxion will guide you through the entire process interactively. You can choose:

**Handshake Snooper Attack** – intercepts handshakes by deauthenticating clients. You choose the method (aireplay-ng, mdk4) and verifier (pyrit, aircrack-ng).

**Captive Portal Attack** – launches a fake AP. You can choose the appearance of the login page. Fluxion has templates imitating various routers.

### When to use Fluxion?

Fluxion is effective when:

- The password is too strong for a dictionary attack
- You want to test user awareness
- A brute-force attack would take too long

Password strength is irrelevant – the attack relies on human error, not cryptography.