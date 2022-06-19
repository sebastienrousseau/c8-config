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
    "docs/*"
  ],
  "extension": [".js",".ts"],
  "functions": 100,
  "include": [
    "index.js",
    "index.ts",
    "src/**/*.ts",
    "src/**/*.js"
  ],
  "lines": 100,
  "reporter": ["text", "lcov"],
  "reports-dir": "./coverage",
  "skip-full": false,
  "sourceMap": true,
  "statements": 100
};
