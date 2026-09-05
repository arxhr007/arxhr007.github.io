import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const dist = path.resolve("dist");
const SITE_URL = "https://arxhr007.github.io";

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const serverEntry = pathToFileURL(path.join(dist, "server/entry-server.js")).href;
const { render, allRoutePaths } = await import(serverEntry);

const headBlock =
  /<!-- SEO:[\s\S]*?<meta name="description"[^>]*\/>/;

function pageHtml(url) {
  const { appHtml, headTags } = render(url);
  return template
    .replace(headBlock, headTags)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
}

// 404 fallback (GitHub Pages serves this for any unmatched path).
fs.writeFileSync(path.join(dist, "404.html"), pageHtml("/__not-found__"));

const paths = allRoutePaths();
for (const url of paths) {
  // Flat .html files: GitHub Pages serves /blog/foo -> /blog/foo.html with no redirect.
  const rel = url === "/" ? "index.html" : `${url.replace(/^\//, "")}.html`;
  const full = path.join(dist, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, pageHtml(url));
  console.log("prerendered", url, "->", rel);
}

// sitemap.xml + robots.txt
const urls = paths
  .map((p) => `  <url><loc>${SITE_URL}${p === "/" ? "/" : p}</loc></url>`)
  .join("\n");
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
fs.writeFileSync(
  path.join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
);

// Drop the server bundle so it isn't published.
fs.rmSync(path.join(dist, "server"), { recursive: true, force: true });

console.log(`\ndone: ${paths.length} pages + 404 + sitemap + robots`);
