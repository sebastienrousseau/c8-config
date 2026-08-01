<!-- SPDX-License-Identifier: ISC -->

<p align="center">
  <img src="./c8-config.svg" alt="c8-config logo" width="128" />
</p>

<h1 align="center">@sebastienrousseau/c8-config</h1>

<p align="center">
  Enterprise-grade c8 V8 code coverage rules enforcing strict 100% test coverage standards.
</p>

<p align="center">
  <a href="https://github.com/sebastienrousseau/c8-config/actions"><img src="https://img.shields.io/github/actions/workflow/status/sebastienrousseau/c8-config/ci.yml?branch=main&style=for-the-badge&logo=github" alt="Build Status" /></a>
  <a href="https://www.npmjs.com/package/@sebastienrousseau/c8-config"><img src="https://img.shields.io/npm/v/@sebastienrousseau%2Fc8-config?style=for-the-badge&color=fc8d62&logo=npm" alt="npm package" /></a>
  <a href="https://scorecard.dev/viewer/?uri=github.com/sebastienrousseau/c8-config"><img src="https://img.shields.io/ossf-scorecard/github.com/sebastienrousseau/c8-config?style=for-the-badge&label=OpenSSF%20Scorecard&logo=openssf" alt="OpenSSF Scorecard" /></a>
  <a href="https://github.com/sebastienrousseau/c8-config/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-ISC-blue?style=for-the-badge" alt="License" /></a>
</p>

---

## Contents

**Getting Started**
- [Installation](#installation) — Package manager commands
- [Quick Start](#quick-start) — Configure in under a minute

**Features & Rule Showcase**
- [Code Coverage Thresholds](#code-coverage-thresholds) — Code comparison
- [Module Compatibility](#module-compatibility) — Dual CJS/ESM & TypeScript declarations

**Governance & Quality**
- [Development & Testing](#development--testing) — Local validation
- [Security & Compliance](#security--compliance) — SLSA attestation & vulnerability policy
- [Author & License](#author--license) — Open source license

---

## Installation

Install using your preferred package manager:

```bash
# npm
npm install --save-dev @sebastienrousseau/c8-config

# pnpm
pnpm add -D @sebastienrousseau/c8-config

# yarn
yarn add -D @sebastienrousseau/c8-config

# bun
bun add -d @sebastienrousseau/c8-config
```

---

## Quick Start

### In `package.json`

```json
{
  "c8": "@sebastienrousseau/c8-config"
}
```

### In CommonJS Configuration

```js
module.exports = require("@sebastienrousseau/c8-config");
```

### In ES Module Configuration

```js
import config from "@sebastienrousseau/c8-config";
export default config;
```

---

## Code Coverage Thresholds

Enforces 100% line, function, branch, and statement coverage across all JavaScript and TypeScript source files.

### Before (Unstandardized)

```javascript
// Loose coverage settings allow undetected bugs in branches
{
  "lines": 70,
  "functions": 80
}
```

### After (@sebastienrousseau/c8-config Enforced)

```javascript
// @sebastienrousseau/c8-config guarantees 100% strict coverage
import c8Config from "@sebastienrousseau/c8-config";
export default {
  ...c8Config,
  "check-coverage": true
};
```

---

## Module Compatibility

This package exports dual module entrypoints via `package.json` `exports`:

```json
"exports": {
  ".": {
    "types": "./index.d.ts",
    "import": "./index.mjs",
    "require": "./index.cjs"
  }
}
```

Full TypeScript definitions (`index.d.ts`) are included for rich IDE autocomplete and inline JSDoc tooltips.

---

## Development & Testing

```bash
# Clone repository
git clone https://github.com/sebastienrousseau/c8-config.git
cd c8-config

# Run validation tests
npm test
```

---

## Security & Compliance

- **SLSA Level 3 Provenance**: Builds are cryptographically signed with keyless provenance via GitHub Actions.
- **Automated Security Audit**: Monitored continuously with CodeQL and Dependabot.
- **Commit Signatures**: All commits are SSH/GPG signed.
- See [SECURITY.md](SECURITY.md) for vulnerability reporting procedures.

---

## Author & License

Developed and maintained by **[Sebastien Rousseau](https://github.com/sebastienrousseau)**.

Released under the [ISC License](LICENSE).
