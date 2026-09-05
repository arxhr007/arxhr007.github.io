// One-off: regenerate public/og-image.png.
// Needs sharp (not a project dep): `npm i -D sharp && node scripts/gen-og.mjs`
import sharp from "sharp";
import path from "node:path";

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0f1513"/>
  <rect x="0" y="0" width="12" height="630" fill="#0f766e"/>
  <text x="90" y="250" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="84" font-weight="700" fill="#f1f5f4">Aaron Thomas</text>
  <text x="90" y="330" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="40" font-weight="400" fill="#4fd1c5">Full-Stack Developer &#183; AI/RAG Systems Engineer</text>
  <text x="90" y="410" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="30" font-weight="400" fill="#8fa8a2">Security research &#183; malware analysis &#183; open-source tools</text>
  <text x="90" y="560" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="28" font-weight="400" fill="#8fa8a2">arxhr007.github.io</text>
</svg>`;

const out = path.resolve("public/og-image.png");
await sharp(Buffer.from(svg)).png().toFile(out);
console.log("wrote", out);
