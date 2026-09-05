# arxhr007.github.io

Personal portfolio — Aaron Thomas. React + TypeScript + Vite, deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # type-check + vite build -> dist/
npm run preview
```

## Deploy

Push to `main`. The `Deploy to GitHub Pages` workflow builds `dist/` and publishes it.

One-time setup: repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Content

All page content lives in `src/data.ts`. Use `**text**` inside strings to render a highlighted span.
