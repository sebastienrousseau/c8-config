# `@sebastienrousseau/c8-config` Examples Catalog

This directory provides runnable, standalone examples covering **100% of the functionalities and features** provided by `@sebastienrousseau/c8-config`.

---

## Example Suite Overview

| File                           | Type      | Feature Coverage                       | Command                     |
| :----------------------------- | :-------- | :------------------------------------- | :-------------------------- |
| [`basic.js`](./basic.js)       | CommonJS  | Standard default configuration import  | `node examples/basic.js`    |
| [`advanced.js`](./advanced.js) | CommonJS  | Custom extension and rule overrides    | `node examples/advanced.js` |
| [`esm.mjs`](./esm.mjs)         | ES Module | Native ESM consumption via `import`    | `node examples/esm.mjs`     |
| [`features.js`](./features.js) | CommonJS  | **100% feature showcase & assertions** | `node examples/features.js` |

---

## 100% Feature Coverage Checklist

- [x] **All Files Inspection**: Enforces coverage across untouched source files (`all: true`)
- [x] **Branch Threshold**: Demands 100% branch test coverage (`branches: 100`)
- [x] **Function Threshold**: Demands 100% function test coverage (`functions: 100`)
- [x] **Line Threshold**: Demands 100% line test coverage (`lines: 100`)
- [x] **Statement Threshold**: Demands 100% statement test coverage (`statements: 100`)
- [x] **Multi-Format Reporting**: Emits text, lcov, and html reports simultaneously
- [x] **Dual Packaging**: Full interoperability across CommonJS (`.cjs`, `.js`) and ECMAScript Modules (`.mjs`).

---

## Running All Examples

You can run and validate the entire example suite with:

```bash
npm run examples
```
