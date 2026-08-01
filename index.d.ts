export interface C8Config {
  all?: boolean;
  branches?: number;
  cache?: boolean;
  "check-coverage"?: boolean;
  clean?: boolean;
  exclude?: string[];
  extension?: string[];
  functions?: number;
  include?: string[];
  lines?: number;
  reporter?: string[];
  "reports-dir"?: string;
  "skip-full"?: boolean;
  sourceMap?: boolean;
  statements?: number;
}

declare const config: C8Config;
export default config;
