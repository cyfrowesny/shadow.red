---
title: JWT Token Analysis
category: android
subcategory: sub-09
os: linux, windows
command: https://www.jwt.io/
tools: base64, jwt.io
---


### JWT format

`<Header>.<Payload>.<Signature>`

### Example token

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsaWNlIiwicm9sZSI6InVzZXIiLCJleHAiOjE3NDYwMDUzNTF9.cB5wufw0AStbAM_H8UrIfzLfDyKZqUTUkg_EVuu_ZY
```

### Decode Header

```bash
echo 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' | base64 --decode
```

Output: `{"alg":"HS256","typ":"JWT"}`

### Decode Payload

```bash
echo 'eyJ1c2VybmFtZSI6ImFsaWNlIiwicm9sZSI6InVzZXIiLCJleHAiOjE3NDYwMDUzNTF9' | base64 --decode
```

Output: `{"username":"alice","role":"user","exp":1746005351}`

### Online decoder

https://www.jwt.io/

### JWT Components

- `alg`: Algorithm (e.g. HS256)
- `typ`: Type (JWT)
- `username`: User identifier
- `role`: User role/permissions
- `exp`: Expiration timestamp (Unix)
