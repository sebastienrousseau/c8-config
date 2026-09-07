/**
 * Advanced usage example for @sebastienrousseau/c8-config
 */
const base = require("../index.cjs");
const custom = { ...base, lines: 95, branches: 95 };
console.log("Relaxed threshold lines:", custom.lines);
