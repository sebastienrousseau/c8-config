# Migration Guide for `@sebastienrousseau/c8-config`

How to migrate from ad-hoc or legacy tooling configurations to `@sebastienrousseau/c8-config`.

## Upgrading from Previous Versions

1. Update package version:
   ```bash
   npm install --save-dev @sebastienrousseau/c8-config@latest
   ```
2. Verify module resolution with `npm test`.

## Migrating from Bespoke Configurations

Remove fragmented configuration files from the project root and reference `@sebastienrousseau/c8-config` in your `package.json` or config entrypoint.
