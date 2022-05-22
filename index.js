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
  "extension": [".js"],
  "functions": 100,
  "include": [
    "index.js",
    "src/**/*.js"
  ],
  "lines": 100,
  "reporter": [
    "cobertura",
    "html",
    "html-spa",
    "lcov",
    "text",
    "text-summary"
  ],
  "reports-dir": "./coverage",
  "skip-full": false,
  "sourceMap": true,
  "statements": 100
};
