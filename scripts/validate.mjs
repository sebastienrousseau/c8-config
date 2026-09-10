// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

// Does the real c8 accept what this package exports?
//
// c8's --config flag reads the file as JSON; it has no module loader, so
// pointing it at index.cjs makes it choke on the licence header before it
// ever sees a setting. The configuration is a CommonJS module, so the check
// materialises the exported object — the same object require() hands a
// consumer — and gives c8 that.

import { execFileSync } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { join } from "node:path";

const config = createRequire(import.meta.url)("../index.cjs");
const file = join(mkdtempSync(join(tmpdir(), "c8-config-")), ".c8rc.json");
writeFileSync(file, JSON.stringify(config, null, 2));

execFileSync("c8", ["--config", file, "--check-coverage=false", "node", "-e", "0"], {
  stdio: "inherit",
  // On Windows the bin is a .cmd shim, which Node refuses to execFile
  // directly since the CVE-2024-27980 mitigation.
  shell: process.platform === "win32",
});

process.stdout.write(`c8 accepted the configuration (${Object.keys(config).length} keys)\n`);
