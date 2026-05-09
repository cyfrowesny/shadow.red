---
title: BloodHound Community Edition
category: ad
subcategory: ad-enum
os: linux
command: docker-compose up -d
tools: docker, bloodhound, sharphound
---


### Install Docker (Kali / Debian)

```bash
sudo apt remove docker docker.io containerd runc
sudo apt update
sudo apt install -y ca-certificates curl gnupg lsb-release
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian bookworm stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER
newgrp docker
```

### BloodHound CE bring-up

```bash
curl -L https://ghst.ly/getbhce -o docker-compose.yml
sudo docker compose pull && sudo docker compose up -d
sudo docker compose logs bloodhound | grep -i passw
```

Open http://127.0.0.1:8080 - login `admin` and the password printed in the logs.

### Stop / start

```bash
sudo docker compose stop
sudo docker compose up -d
```

### Cypher reference

https://support.bloodhoundenterprise.io/hc/en-us/articles/16721164740251-Searching-with-Cypher
