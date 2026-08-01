/**
 * Modern c8 CommonJS Configuration
 */
module.exports = {
  "all": true,
  "branches": 100,
  "cache": false,
  "check-coverage": true,
  "clean": true,
  "exclude": [
    "coverage/*",
    "dist/*",
    "node_modules/*",
    "docs/*",
    "test/*",
    "__tests__/*"
  ],
  "extension": [".js", ".ts", ".mjs", ".cjs"],
  "functions": 100,
  "include": [
    "index.js",
    "index.mjs",
    "index.cjs",
    "index.ts",
    "src/**/*.ts",
    "src/**/*.js"
  ],
  "lines": 100,
  "reporter": ["text", "lcov", "html"],
  "reports-dir": "./coverage",
  "skip-full": false,
  "sourceMap": true,
  "statements": 100
};
