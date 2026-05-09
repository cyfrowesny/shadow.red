---
title: Androguard
category: android
subcategory: sub-02
os: linux
command: androguard analyze appka.apk
tools: androguard, gephi
---


### APK analysis

```bash
androguard analyze appka.apk
```

Use `a.<TAB>` for autocomplete inside the interactive shell.

### Generating call graph

```bash
androguard cg appka.apk
```

The generated graph can be analyzed in Gephi.
