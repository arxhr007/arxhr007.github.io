# arxhr007.github.io

Personal portfolio + blog — Aaron Thomas. React + TypeScript + Vite, prerendered to
static HTML, deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # client build -> SSR build -> prerender to dist/
npm run preview
```

`npm run build` runs three steps:

1. `build:client` — the browser bundle (`vite build`).
2. `build:server` — an SSR bundle of `src/entry-server.tsx`.
3. `prerender` — `scripts/prerender.mjs` renders every route to a flat `.html` file
   (`dist/index.html`, `dist/blog.html`, `dist/blog/<slug>.html`), bakes per-page
   `<title>` / Open Graph / JSON-LD into each, and writes `404.html`, `sitemap.xml`,
   `robots.txt`. The client then hydrates.

## Checks

```bash
npm run lint
npm run typecheck
node scripts/check-hydration.mjs 4180   # needs `npm run preview -- --port 4180` running
```

## Deploy

Push to `main`. The workflow runs lint + typecheck + build and publishes `dist/`.
One-time: repo **Settings → Pages → Source: GitHub Actions**.

## Content

- **Résumé content** — `src/data.ts`. `**text**` in a string renders a highlighted span.
- **Blog posts** — drop `src/blogs/<slug>.md`, then add an entry (title, description,
  tags, date) to `blogs` in `src/blogs.ts`. Posts are bundled at build time.
- **OG image** — `public/og-image.png`. Regenerate: `npm i -D sharp && node scripts/gen-og.mjs`.
- **lxask docs (`/lxask`)** — a separate GitBook-style site, not part of the React app.
  `npm run build` ends with `scripts/build-lxask-docs.mjs`, which turns the markdown in
  `lxask-docs/content` into `dist/lxask/*.html` (landing page, one page per doc, search
  index; theme in `lxask-docs/theme`). That content is copied from the lxask repository:
  `node scripts/sync-lxask-docs.mjs PATH_TO_LXASK` (set `MMDC` to a mermaid-cli `mmdc`
  to render new diagrams to `lxask-docs/diagrams`), then commit the result.

## Routing

Custom history router (`src/router.tsx`); routes declared in `src/routes.ts`. No router
dependency. `public` GitHub Pages serves `/blog/foo` from `blog/foo.html` with no redirect;
`404.html` is the SPA fallback for anything unmatched.
