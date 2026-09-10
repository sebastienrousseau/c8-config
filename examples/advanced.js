// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * Advanced usage example for @sebastienrousseau/c8-config
 */
const base = require("../index.cjs");
const custom = { ...base, lines: 95, branches: 95 };
console.log("Relaxed threshold lines:", custom.lines);
