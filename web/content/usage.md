---
title: "Usage — @sebastienrousseau/c8-config"
description: "How to use and configure @sebastienrousseau/c8-config."
layout: "doc"
---

# Usage

`@sebastienrousseau/c8-config` can be consumed across all standard module formats.

## CommonJS

```javascript
module.exports = require("@sebastienrousseau/c8-config");
```

## ES Modules

```javascript
import config from "@sebastienrousseau/c8-config";
export default config;
```

## In `package.json`

```json
{
  "c8": "@sebastienrousseau/c8-config"
}
```
