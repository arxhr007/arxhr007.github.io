// Builds the lxask documentation site into dist/lxask (served at /lxask).
//
// A self-contained, GitBook-style site, independent of the portfolio's React app: the
// markdown in lxask-docs/content (copied from the lxask repository by
// sync-lxask-docs.mjs) becomes one flat .html file per page, plus a landing page, a
// client-side search index, the theme (lxask-docs/theme) and pre-rendered diagrams.
// GitHub Pages serves /lxask/install from lxask/install.html, as it does /blog/foo.
// Runs after the prerender step: `npm run build` ends with it.

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { Marked } from "marked";
import hljs from "highlight.js/lib/common";

const SITE = "https://arxhr007.github.io";
const BASE = "/lxask";
const REPO = "https://github.com/arxhr007/lxask";

const root = path.resolve("lxask-docs");
const content = path.join(root, "content");
const dist = path.resolve("dist");
const out = path.join(dist, "lxask");

if (!fs.existsSync(path.join(content, "meta.json"))) {
  console.error("lxask-docs/content is missing: run `node scripts/sync-lxask-docs.mjs PATH_TO_LXASK`");
  process.exit(1);
}
if (!fs.existsSync(dist)) {
  console.error("dist is missing: run `npm run build` (this step runs at its end)");
  process.exit(1);
}
const meta = JSON.parse(fs.readFileSync(path.join(content, "meta.json"), "utf8"));

/* ---------------------------------------------------------------- pages */

const NAV = [
  {
    group: "Getting started",
    pages: [
      ["install", "docs/install.md", "Requirements, checksums, offline install, upgrading from linu, uninstalling."],
      ["usage", "docs/usage.md", "Reading an answer, restrictions, asking back, Ctrl+G, the server, feedback, every option."],
      ["examples", "docs/examples.md", "Real answers by topic, and the mistakes from the same run."],
    ],
  },
  {
    group: "Reference",
    pages: [
      ["configuration", "docs/configuration.md", "Files, environment variables, settings, package managers."],
      ["how-it-works", "docs/how-it-works.md", "Split, retrieve, answer, check, explain, warn."],
      ["architecture", "docs/architecture.md", "Diagrams of the request flow, the components, the server and the build."],
      ["accuracy", "docs/accuracy.md", "Every measurement, where it goes wrong, platforms, speed."],
    ],
  },
  {
    group: "Project",
    pages: [
      ["development", "docs/development.md", "Building from source, training data, how it is measured."],
      ["results", "docs/results.md", "Every version and training round, including what was not shipped."],
      ["contributing", "CONTRIBUTING.md", "Report a wrong answer or a bug, or change the code."],
      ["security", "SECURITY.md", "What lxask does and does not do, and how to report a problem."],
    ],
  },
];
const pageBySrc = new Map();
for (const g of NAV) for (const [slug, src, blurb] of g.pages) pageBySrc.set(src, { slug, src, blurb, group: g.group });

// Page titles (the first `# ` line), known before any page is rendered so a link written as
// [usage.md](usage.md) can read "Usage" on the site.
const titleBySrc = new Map();
for (const src of pageBySrc.keys()) {
  const first = fs.readFileSync(path.join(content, src), "utf8").split("\n").find((line) => line.startsWith("# "));
  titleBySrc.set(src, first ? first.slice(2).trim() : src);
}

/* ------------------------------------------------------------- helpers */

const escapeHtml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const hash = (s, n = 8) => crypto.createHash("sha1").update(s).digest("hex").slice(0, n);
const stripTags = (html) => html.replace(/<[^>]*>/g, "");

// GitHub's heading ids, so links written for the repository's own rendering still land.
function slugify(html) {
  return stripTags(html)
    .replace(/&[#\w]+;/g, "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s_-]/gu, "")
    .trim()
    .replace(/\s/g, "-");
}

function plain(html) {
  const spaced = html
    .replace(/<button[\s\S]*?<\/button>/g, " ")
    .replace(/<figure class="diagram">[\s\S]*?<\/figure>/g, " ")
    .replace(/<\/(p|li|h[1-6]|tr|td|th|div|pre|blockquote|ul|ol|table)>/g, " ");
  return stripTags(spaced)
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

const LANG_ALIAS = { toml: "ini", sh: "bash", shell: "bash", zsh: "bash" };

function codeBlock(text, lang = "") {
  const language = LANG_ALIAS[lang] ?? lang;
  const label = lang && !["text", "console"].includes(lang) ? lang : lang === "console" ? "console" : "";
  const body = language && hljs.getLanguage(language) ? hljs.highlight(text, { language, ignoreIllegals: true }).value : escapeHtml(text);
  return (
    `<div class="code"><div class="code-bar"><span class="code-lang">${escapeHtml(label)}</span>` +
    `<button class="copy" type="button" aria-label="Copy code">Copy</button></div>` +
    `<pre><code class="hljs${language ? ` language-${language}` : ""}">${body}</code></pre></div>`
  );
}

// Where a link in a markdown file points once published: another page of this site, or a
// file in the repository.
function resolveHref(href, fromSrc) {
  if (/^(https?:|mailto:|tel:)/i.test(href)) return { url: href, external: true };
  if (href.startsWith("#")) return { url: href, external: false };
  const [target, hash = ""] = href.split(/(?=#)/);
  const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(fromSrc), target));
  const page = pageBySrc.get(resolved);
  if (page) return { url: `${BASE}/${page.slug}${hash}`, external: false };
  if (resolved === "README.md") return { url: `${BASE}/${hash}`, external: false };
  return { url: `${REPO}/blob/main/${resolved}${hash}`, external: true };
}

function resolveImage(href, fromSrc) {
  if (/^https?:/i.test(href)) return href;
  const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(fromSrc), href));
  const m = /^(?:docs\/)?assets\/(.+)$/.exec(resolved);
  return m ? `${BASE}/assets/${m[1]}` : `${REPO}/raw/main/${resolved}`;
}

function diagramFigure(source, alt) {
  // sync-lxask-docs.mjs names a diagram after its source as written, with the final newline
  const key = hash(source.replace(/\n?$/, "\n"), 12);
  const light = path.join(root, "diagrams", `${key}.light.svg`);
  const dark = path.join(root, "diagrams", `${key}.dark.svg`);
  if (!fs.existsSync(light) || !fs.existsSync(dark)) {
    console.warn(`diagram ${key} has no rendered SVGs (run sync-lxask-docs.mjs with MMDC set): shown as code`);
    return null;
  }
  const box = /viewBox="[-\d.]+ [-\d.]+ ([\d.]+) ([\d.]+)"/.exec(fs.readFileSync(light, "utf8"));
  const size = box ? ` width="${Math.round(+box[1])}" height="${Math.round(+box[2])}"` : "";
  const img = (theme) =>
    `<a class="${theme}" href="${BASE}/diagrams/${key}.${theme}.svg" target="_blank" rel="noopener" title="Open the diagram at full size">` +
    `<img src="${BASE}/diagrams/${key}.${theme}.svg"${size} alt="${escapeHtml(alt)}" loading="lazy"></a>`;
  return `<figure class="diagram">${img("light")}${img("dark")}<figcaption>Click to open at full size</figcaption></figure>\n`;
}

function renderMarkdown(md, src) {
  const seen = new Map();
  const toc = [];
  let lastHeading = "Diagram";
  const marked = new Marked({ gfm: true });
  marked.use({
    renderer: {
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens);
        let id = slugify(text);
        const n = seen.get(id) ?? 0;
        seen.set(id, n + 1);
        if (n) id = `${id}-${n}`;
        const label = plain(text);
        if (depth > 1) lastHeading = label;
        if (depth === 2 || depth === 3) toc.push({ id, text: label, depth });
        const anchor = depth > 1 ? `<a class="anchor" href="#${id}" aria-label="Link to this section">#</a>` : "";
        return `<h${depth} id="${id}">${anchor}${text}</h${depth}>\n`;
      },
      codespan({ text }) {
        return `<code${text.length <= 30 ? ' class="nw"' : ""}>${escapeHtml(text)}</code>`;
      },
      code({ text, lang }) {
        const language = (lang ?? "").split(/\s+/)[0];
        if (language === "mermaid") return diagramFigure(text, `Diagram: ${lastHeading}`) ?? codeBlock(text, "text");
        return codeBlock(text.replace(/\n$/, ""), language);
      },
      link({ href, title, tokens }) {
        let text = this.parser.parseInline(tokens);
        const { url, external } = resolveHref(href, src);
        // a link whose text is a file name of another page reads as that page's title
        const target = path.posix.normalize(path.posix.join(path.posix.dirname(src), href.split("#")[0]));
        if (/^[\w-]+\.md$/.test(plain(text)) && titleBySrc.has(target)) text = escapeHtml(titleBySrc.get(target));
        const t = title ? ` title="${escapeHtml(title)}"` : "";
        return `<a href="${escapeHtml(url)}"${t}${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${text}</a>`;
      },
      image({ href, title, text }) {
        const t = title ? ` title="${escapeHtml(title)}"` : "";
        return `<img src="${escapeHtml(resolveImage(href, src))}" alt="${escapeHtml(text)}"${t} loading="lazy">`;
      },
    },
  });
  const html = marked
    .parse(md, { async: false })
    .replace(/<table>/g, '<div class="table-wrap"><table>')
    .replace(/<\/table>/g, "</table></div>");
  return { html, toc };
}

// The page cut at its headings, for the search index.
function sectionsOf(html, pageTitle, url) {
  const marks = [...html.matchAll(/<h([1-4]) id="([^"]+)">([\s\S]*?)<\/h\1>/g)];
  return marks.map((m, i) => {
    const end = i + 1 < marks.length ? marks[i + 1].index : html.length;
    const heading = plain(m[3].replace(/<a class="anchor"[\s\S]*?<\/a>/, ""));
    return {
      p: pageTitle,
      t: heading,
      u: m[1] === "1" ? url : `${url}#${m[2]}`,
      x: plain(html.slice(m.index + m[0].length, end)).slice(0, 1500),
    };
  });
}

/* ----------------------------------------------------------- assemble */

const pages = [];
for (const g of NAV) {
  for (const [slug, src, blurb] of g.pages) {
    const md = fs.readFileSync(path.join(content, src), "utf8");
    const { html, toc } = renderMarkdown(md, src);
    const title = plain(/^<h1[^>]*>([\s\S]*?)<\/h1>/m.exec(html)?.[1] ?? slug);
    pages.push({ slug, src, group: g.group, blurb, title, html, toc, url: `${BASE}/${slug}` });
  }
}

const OVERVIEW = { title: "Overview", url: `${BASE}/` };
const order = [OVERVIEW, ...pages];

const assetsHash = hash(fs.readFileSync("lxask-docs/theme/docs.css", "utf8") + fs.readFileSync("lxask-docs/theme/docs.js", "utf8"));

const ICONS = {
  menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
  search: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" style="fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
  github:
    '<svg class="gh" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>',
  sun: '<svg class="sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
  moon: '<svg class="moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/></svg>',
};

const HEADER = `<header class="header">
  <button class="icon-btn menu-btn" type="button" aria-label="Show the page list" aria-expanded="false">${ICONS.menu}</button>
  <a class="brand" href="${BASE}/"><img src="${BASE}/assets/logo.svg" alt="" width="30" height="30"><span>lxask</span></a>
  ${meta.version ? `<span class="pill">v${escapeHtml(meta.version)}</span>` : ""}
  <span class="header-spacer"></span>
  <button class="search-btn" type="button" aria-label="Search the docs">${ICONS.search}<span class="label">Search docs</span><kbd>Ctrl K</kbd></button>
  <a class="icon-btn" href="${REPO}" target="_blank" rel="noopener" aria-label="lxask on GitHub">${ICONS.github}</a>
  <button class="icon-btn theme-btn" type="button" aria-label="Switch between light and dark">${ICONS.sun}${ICONS.moon}</button>
</header>`;

const SEARCH = `<div class="search-overlay" role="dialog" aria-modal="true" aria-label="Search the docs">
  <div class="search-box">
    <div class="search-input-row">${ICONS.search}<input class="search-input" type="text" role="searchbox" placeholder="Search the docs" autocomplete="off" spellcheck="false" aria-label="Search the docs"></div>
    <div class="search-results"></div>
    <div class="search-foot"><span><kbd>↑</kbd> <kbd>↓</kbd> to move</span><span><kbd>Enter</kbd> to open</span><span><kbd>Esc</kbd> to close</span></div>
  </div>
</div>`;

function head({ title, description, url }) {
  const image = `${SITE}${BASE}/assets/social-preview.png`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<link rel="canonical" href="${SITE}${url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="lxask">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:url" content="${SITE}${url}">
<meta property="og:image" content="${image}">
<meta name="twitter:card" content="summary_large_image">
<meta name="lxask-index" content="${BASE}/search-index.json?v=${assetsHash}">
<link rel="icon" href="${BASE}/assets/logo.svg" type="image/svg+xml">
<script>(function(){try{var t=localStorage.getItem("lxask-theme");if(t==="dark"||t==="light")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()</script>
<link rel="preload" href="${BASE}/assets/inter.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${BASE}/assets/docs.css?v=${assetsHash}">
</head>`;
}

const SCRIPT = `<script src="${BASE}/assets/docs.js?v=${assetsHash}" defer></script>`;

function sidebar(current) {
  const link = (href, label, isCurrent) => `<a href="${href}"${isCurrent ? ' aria-current="page"' : ""}>${escapeHtml(label)}</a>`;
  return NAV.map((g, i) => {
    const items = g.pages.map(([slug]) => {
      const p = pages.find((x) => x.slug === slug);
      return link(p.url, p.title, p.slug === current);
    });
    if (i === 0) items.unshift(link(`${BASE}/`, "Overview", false));
    return `<div class="group"><div class="group-title">${escapeHtml(g.group)}</div>${items.join("")}</div>`;
  }).join("\n");
}

function docPage(p, i) {
  const prev = order[order.indexOf(p) - 1];
  const next = order[order.indexOf(p) + 1];
  const pager = `<nav class="pager" aria-label="Previous and next page">
${prev ? `<a class="prev" href="${prev.url}"><small>Previous</small><span class="title">${escapeHtml(prev.title)}</span></a>` : ""}
${next ? `<a class="next" href="${next.url}"><small>Next</small><span class="title">${escapeHtml(next.title)}</span></a>` : ""}
</nav>`;
  const toc = p.toc.length > 1 ? p.toc.map((t) => `<a class="depth-${t.depth}" href="#${t.id}">${escapeHtml(t.text)}</a>`).join("") : "";
  const description = plain(/<p>([\s\S]*?)<\/p>/.exec(p.html)?.[1] ?? p.blurb).slice(0, 180);
  return `${head({ title: `${p.title} · lxask docs`, description: description || p.blurb, url: p.url })}
<body>
<a class="skip" href="#content">Skip to the page</a>
${HEADER}
<div class="scrim"></div>
<div class="shell">
  <nav class="sidebar" aria-label="Documentation">
${sidebar(p.slug)}
  </nav>
  <main class="main" id="content">
    <article class="article">
      <div class="crumbs">${escapeHtml(p.group)}</div>
      <div class="prose">
${p.html}
      </div>
${pager}
      <div class="doc-foot">
        <a href="${REPO}/edit/main/${p.src}" target="_blank" rel="noopener">Edit this page on GitHub</a>
        <span>lxask${meta.version ? ` ${escapeHtml(meta.version)}` : ""} · MIT licence · made by <a href="${SITE}/">Aaron Thomas</a></span>
      </div>
    </article>
  </main>
  <aside class="toc" aria-label="On this page">${toc ? `<div class="toc-title">On this page</div>${toc}` : ""}</aside>
</div>
${SEARCH}
${SCRIPT}
</body>
</html>
`;
}

/* ------------------------------------------------------------- landing */

// Kept in step with docs/accuracy.md by hand.
const STATS = [
  ["96-99%", "right program on everyday questions it was never trained on (150)"],
  ["87%", "of hand-written file and text tasks work as run in a sandbox (46)"],
  ["75%", "of a harder generated set work as run (200)"],
  ["~2 s", "per answer once loaded; about 7 s from cold"],
];
const FEATURES = [
  ["🔒", "Private and offline", "Everything runs locally on your CPU. Nothing you ask leaves your machine, and after installing it needs no network."],
  ["⚡", "Small and fast", "About 1 GB, no GPU. About 2 seconds an answer once loaded, and the installer offers to keep it loaded for you."],
  ["✅", "Checks its own work", "Every command is checked against the man pages and tldr, and whatever it cannot confirm is marked unverified."],
  ["⌨️", "Right on your prompt", "Type what you want, press Ctrl+G, and the line becomes the command, ready to edit. Nothing runs until you press Enter."],
  ["🧭", "Keeps your restrictions", "“Without lsof”, “don't use sudo”: it answers with something else. A vague request gets a question back, not a guess."],
  ["🛡️", "Never runs a command for you", "It suggests; you decide. Anything that deletes, overwrites or formats carries a warning."],
];

function landing() {
  const install = "curl -fsSLO https://github.com/arxhr007/lxask/releases/latest/download/install.sh && sh install.sh";
  const docCards = pages
    .map((p) => `<a class="card" href="${p.url}"><h3>${escapeHtml(p.title)}</h3><p>${escapeHtml(p.blurb)}</p></a>`)
    .join("\n");
  const description = "lxask is a Linux command assistant that runs on your own machine: ask in plain words, get the command, checked against the documentation. No API key, no cloud, and it never runs a command for you.";
  return `${head({ title: "lxask: offline Linux command assistant", description, url: `${BASE}/` })}
<body>
<a class="skip" href="#content">Skip to the page</a>
${HEADER}
<main class="landing" id="content">
  <section class="hero">
    <img class="hero-logo" src="${BASE}/assets/logo.svg" alt="" width="104" height="104">
    <h1>lxask</h1>
    <p class="tag">Forgot the command? Just ask.</p>
    <p class="lead">A Linux command assistant that runs on your own machine: no API key, no cloud, no account. Ask in plain words, get the command, with every part explained from the documentation.</p>
    <div class="cta">
      <a class="btn primary" href="${BASE}/install">Get started</a>
      <a class="btn" href="${BASE}/usage">Read the docs</a>
      <a class="btn" href="${REPO}" target="_blank" rel="noopener">GitHub</a>
    </div>
    <div class="install-box"><span class="prompt">$</span><code>${escapeHtml(install)}</code><button class="copy" type="button" data-copy="${escapeHtml(install)}">Copy</button></div>
  </section>
  <div class="demo"><div class="demo-frame"><img src="${BASE}/assets/demo.gif" alt="lxask answering a request with a restriction, asking back on a vague one, and filling the prompt with Ctrl+G" width="975" height="428"></div></div>

  <section class="section">
    <h2>What it does for you</h2>
    <p class="sub">A small model, the tldr pages and the man pages, checked against each other, on your laptop.</p>
    <div class="grid">
${FEATURES.map(([icon, title, text]) => `      <div class="card"><div class="ico">${icon}</div><h3>${title}</h3><p>${text}</p></div>`).join("\n")}
    </div>
  </section>

  <section class="section">
    <h2>How good is it</h2>
    <p class="sub">Measured on questions it was never trained on. When it misses, it is usually by a detail: a flag, a field number.</p>
    <div class="stats">
${STATS.map(([n, text]) => `      <div class="stat"><b>${n}</b><span>${text}</span></div>`).join("\n")}
    </div>
    <p class="more"><a href="${BASE}/accuracy">Every measurement, and where it goes wrong →</a> &nbsp;·&nbsp; <a href="${BASE}/examples#where-it-slipped-same-run">The mistakes from a real run →</a></p>
  </section>

  <section class="section">
    <h2>Quick start</h2>
    <p class="sub">Linux on x86_64 or ARM64 with glibc 2.28 or newer.</p>
    <div class="steps">
${codeBlock("curl -fsSLO https://github.com/arxhr007/lxask/releases/latest/download/install.sh\nsh install.sh        # about 1.1 GB, once; no root needed", "bash")}
${codeBlock('lxask "which process uses port 3000, without lsof or netstat"\n# $ ss -ltnp \'sport = :3000\'', "bash")}
${codeBlock('eval "$(lxask --shell-init bash)"     # in ~/.bashrc: then type a request and press Ctrl+G', "bash")}
    </div>
  </section>

  <section class="section">
    <h2>Documentation</h2>
    <p class="sub">Everything from installing to how the model was made.</p>
    <div class="grid">
${docCards}
    </div>
  </section>

  <footer class="landing-foot">
    <span>lxask${meta.version ? ` ${escapeHtml(meta.version)}` : ""} · MIT licence</span>
    <span>Made by <a href="${SITE}/">Aaron Thomas</a> · <a href="${REPO}" target="_blank" rel="noopener">GitHub</a></span>
  </footer>
</main>
${SEARCH}
${SCRIPT}
</body>
</html>
`;
}

/* --------------------------------------------------------------- write */

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(path.join(out, "assets"), { recursive: true });

for (const p of pages) fs.writeFileSync(path.join(out, `${p.slug}.html`), docPage(p));
fs.writeFileSync(path.join(out, "index.html"), landing());

for (const name of fs.readdirSync(path.join(content, "assets"))) fs.copyFileSync(path.join(content, "assets", name), path.join(out, "assets", name));
fs.copyFileSync("lxask-docs/theme/docs.css", path.join(out, "assets", "docs.css"));
fs.copyFileSync("lxask-docs/theme/docs.js", path.join(out, "assets", "docs.js"));
const font = path.resolve("node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2");
if (fs.existsSync(font)) fs.copyFileSync(font, path.join(out, "assets", "inter.woff2"));
else console.warn("Inter font not found in node_modules: the docs fall back to the system font");
fs.cpSync(path.join(root, "diagrams"), path.join(out, "diagrams"), { recursive: true });

const index = [
  { p: "lxask", t: "Overview", u: `${BASE}/`, x: `${FEATURES.map(([, t, x]) => `${t}. ${x}`).join(" ")} Forgot the command? Just ask.` },
  ...pages.flatMap((p) => sectionsOf(p.html, p.title, p.url)),
];
fs.writeFileSync(path.join(out, "search-index.json"), JSON.stringify(index));

// the portfolio's sitemap gets the docs pages too
const sitemap = path.join(dist, "sitemap.xml");
if (fs.existsSync(sitemap)) {
  const urls = [OVERVIEW.url, ...pages.map((p) => p.url)].map((u) => `  <url><loc>${SITE}${u}</loc></url>`).join("\n");
  const xml = fs.readFileSync(sitemap, "utf8").replace(/\s*<url><loc>[^<]*\/lxask[^<]*<\/loc><\/url>/g, "");
  fs.writeFileSync(sitemap, xml.replace("</urlset>", `${urls}\n</urlset>`));
}

console.log(`lxask docs: ${pages.length} pages + landing, ${index.length} search entries -> dist/lxask`);
