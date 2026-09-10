// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * 100% Feature Showcase for @sebastienrousseau/c8-config
 */
const config = require("../index.cjs");
const assert = require("assert");

console.log("=== 100% Feature Showcase: @sebastienrousseau/c8-config ===");
assert.strictEqual(config.all, true);
assert.strictEqual(config.branches, 100);
assert.strictEqual(config.functions, 100);
assert.strictEqual(config.lines, 100);
assert.strictEqual(config.statements, 100);
assert.deepStrictEqual(config.reporter, ["text", "lcov", "html"]);
assert.strictEqual(config["check-coverage"], true);

console.log("  ✓ All files flag: true");
console.log(
  "  ✓ Strict 100% coverage gates (branches, functions, lines, statements)",
);
console.log("  ✓ Reporters: text, lcov, html");
console.log("✅ 100% of c8-config thresholds and options validated.");
