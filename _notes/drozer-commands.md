---
title: Drozer Basic Commands
category: android
subcategory: sub-11
os: linux, windows
command: drozer run
tools: drozer
---


### Package list

```bash
run app.package.list -f insecureshop
```

### Package info

```bash
run app.package.info -a com.android.nawapki
run app.package.info -a com.insecureshop
```

### Attack surface

```bash
run app.package.attacksurface com.android.nawapki
run app.package.attacksurface com.insecureshop
```

### Activity info

```bash
run app.activity.info -a com.insecureshop
```

### Start activity

```bash
run app.activity.start --component com.insecureshop com.insecureshop.WebViewActivity
```
