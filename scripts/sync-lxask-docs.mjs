// Copies lxask's documentation into lxask-docs/, ready for build-lxask-docs.mjs.
//
//   node scripts/sync-lxask-docs.mjs ../lxask-public
//
// It replaces lxask-docs/content (docs/*.md, CONTRIBUTING.md, SECURITY.md, docs/assets/*,
// meta.json with the version and source commit) and pre-renders each ```mermaid diagram
// to two SVGs, light and dark, in lxask-docs/diagrams, so the site build needs no browser.
// Rendering needs @mermaid-js/mermaid-cli: set MMDC to its `mmdc` executable. A diagram
// already rendered (named after a hash of its source) is kept; ones no page uses any
// more are removed.

import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const source = process.argv[2];
if (!source || !fs.existsSync(path.join(source, "docs"))) {
  console.error("usage: node scripts/sync-lxask-docs.mjs PATH_TO_LXASK_CHECKOUT");
  process.exit(2);
}

const content = path.resolve("lxask-docs/content");
const diagramDir = path.resolve("lxask-docs/diagrams");
const pages = [
  "CONTRIBUTING.md",
  "SECURITY.md",
  ...fs
    .readdirSync(path.join(source, "docs"))
    .filter((name) => name.endsWith(".md") && name !== "README.md")
    .map((name) => `docs/${name}`),
];

fs.rmSync(content, { recursive: true, force: true });
fs.mkdirSync(path.join(content, "docs"), { recursive: true });
fs.mkdirSync(path.join(content, "assets"), { recursive: true });
fs.mkdirSync(diagramDir, { recursive: true });

const sources = new Map(); // hash -> mermaid source
for (const page of pages) {
  const text = fs.readFileSync(path.join(source, page), "utf8").replace(/\r\n/g, "\n");
  fs.writeFileSync(path.join(content, page), text);
  for (const [, code] of text.matchAll(/```mermaid\n([\s\S]*?)```/g)) sources.set(hash(code), code);
  console.log("page    ", page);
}
for (const name of fs.readdirSync(path.join(source, "docs", "assets"))) {
  fs.copyFileSync(path.join(source, "docs", "assets", name), path.join(content, "assets", name));
  console.log("asset   ", name);
}

const version = /^version\s*=\s*"([^"]+)"/m.exec(fs.readFileSync(path.join(source, "pyproject.toml"), "utf8"))?.[1] ?? "";
let commit = "";
try {
  commit = execFileSync("git", ["-C", source, "rev-parse", "--short", "HEAD"], { encoding: "utf8" }).trim();
} catch {
  /* not a git checkout */
}
fs.writeFileSync(path.join(content, "meta.json"), JSON.stringify({ version, commit }, null, 2) + "\n");
console.log(`meta     lxask ${version} (${commit || "no git"})`);

const mmdc = process.env.MMDC;
const wanted = new Set();
for (const [key, code] of sources) {
  for (const theme of ["light", "dark"]) {
    const name = `${key}.${theme}.svg`;
    wanted.add(name);
    const file = path.join(diagramDir, name);
    if (fs.existsSync(file)) continue;
    if (!mmdc) {
      console.warn(`diagram ${name} is not rendered: set MMDC to the mermaid-cli executable`);
      continue;
    }
    const input = path.join(diagramDir, `${key}.mmd`);
    fs.writeFileSync(input, code);
    execFileSync(mmdc, ["--quiet", "--input", input, "--output", file, "--theme", theme === "dark" ? "dark" : "default", "--backgroundColor", "transparent"], {
      stdio: "inherit",
      shell: process.platform === "win32",
    });
    fs.rmSync(input);
    console.log("diagram ", name);
  }
}
for (const name of fs.readdirSync(diagramDir)) {
  if (!wanted.has(name)) {
    fs.rmSync(path.join(diagramDir, name));
    console.log("removed ", name);
  }
}

function hash(code) {
  return crypto.createHash("sha1").update(code).digest("hex").slice(0, 12);
}
