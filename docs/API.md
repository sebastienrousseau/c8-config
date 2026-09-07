# `@sebastienrousseau/c8-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/c8-config`.

---

## Description
Shareable c8 / V8 code coverage configuration enforcing strict 100% thresholds.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/c8-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. All Files Inspection
- **Description**: Enforces coverage across untouched source files (`all: true`)
- **Scope**: Production & Development
- **Status**: Stable & Active

### 2. Branch Threshold
- **Description**: Demands 100% branch test coverage (`branches: 100`)
- **Scope**: Production & Development
- **Status**: Stable & Active

### 3. Function Threshold
- **Description**: Demands 100% function test coverage (`functions: 100`)
- **Scope**: Production & Development
- **Status**: Stable & Active

### 4. Line Threshold
- **Description**: Demands 100% line test coverage (`lines: 100`)
- **Scope**: Production & Development
- **Status**: Stable & Active

### 5. Statement Threshold
- **Description**: Demands 100% statement test coverage (`statements: 100`)
- **Scope**: Production & Development
- **Status**: Stable & Active

### 6. Multi-Format Reporting
- **Description**: Emits text, lcov, and html reports simultaneously
- **Scope**: Production & Development
- **Status**: Stable & Active

