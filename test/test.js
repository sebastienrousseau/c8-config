const assert = require("assert");
const cjsConfig = require("../index.cjs");

async function runTests() {
  console.log("Testing @sebastienrousseau/c8-config...");

  assert(cjsConfig && typeof cjsConfig === "object", "CJS config must be an object");
  assert.strictEqual(cjsConfig.lines, 100);
  assert.strictEqual(cjsConfig["check-coverage"], true);

  const esmModule = await import("../index.mjs");
  const esmConfig = esmModule.default;
  assert(esmConfig && typeof esmConfig === "object", "ESM config must be an object");
  assert.strictEqual(esmConfig.lines, 100);

  console.log("✅ c8-config validation tests passed!");
}

runTests().catch((err) => {
  console.error("❌ Test failed:", err);
  process.exit(1);
});
