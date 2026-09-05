// Dev-only smoke test: hydrate each route in jsdom against a running preview
// server; fail on hydration/runtime console errors or an empty root.
// Usage: npm run preview -- --port 4180 &  then  node scripts/check-hydration.mjs 4180
import pkg from "jsdom";
const { JSDOM, VirtualConsole } = pkg;

const port = process.argv[2] || "4180";
const base = `http://localhost:${port}`;
const routes = ["/", "/blog", "/blog/rust-malware", "/blog/scam-app", "/blog/sandbox-evasion"];
let failed = false;

for (const route of routes) {
  const errors = [];
  const vc = new VirtualConsole();
  vc.on("jsdomError", (e) => errors.push(String(e.detail || e)));

  const dom = await JSDOM.fromURL(base + route, {
    runScripts: "dangerously",
    resources: "usable",
    virtualConsole: vc,
    pretendToBeVisual: true,
  });
  dom.window.console.error = (...a) => errors.push(a.map(String).join(" "));
  dom.window.console.warn = (...a) => errors.push(a.map(String).join(" "));

  await new Promise((r) => setTimeout(r, 3500));

  const bad = errors.filter((e) =>
    /hydrat|did not match|Minified React error|Text content does not match|is not a function/i.test(
      e,
    ),
  );
  const rootHtml = dom.window.document.getElementById("root")?.innerHTML.length || 0;
  if (bad.length || rootHtml < 500) {
    failed = true;
    console.log(`\nFAIL ${route}  (root html ${rootHtml} chars)`);
    bad.slice(0, 6).forEach((e) => console.log("  " + e.slice(0, 260)));
  } else {
    console.log(`ok   ${route}  (root html ${rootHtml} chars)`);
  }
  dom.window.close();
}

process.exit(failed ? 1 : 0);
