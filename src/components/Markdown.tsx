import { useEffect, useMemo, useRef } from "react";
import { Marked, type Tokens } from "marked";
import { slugify } from "../slug";

/**
 * Blog markdown is authored in this repo (no user input), so marked output is
 * rendered directly. A custom renderer adds heading ids and opens external
 * links in a new tab; highlight.js is loaded on demand after mount.
 */
function buildParser() {
  const marked = new Marked({ gfm: true, breaks: false });
  const seen = new Map<string, number>();

  marked.use({
    hooks: {
      preprocess(md) {
        seen.clear();
        return md;
      },
    },
    renderer: {
      heading({ tokens, depth }: Tokens.Heading) {
        const text = this.parser.parseInline(tokens);
        let id = slugify(text.replace(/<[^>]+>/g, ""));
        const n = seen.get(id) ?? 0;
        seen.set(id, n + 1);
        if (n) id = `${id}-${n}`;
        return `<h${depth} id="${id}">${text}</h${depth}>\n`;
      },
      link({ href, title, tokens }: Tokens.Link) {
        const text = this.parser.parseInline(tokens);
        const external = /^https?:\/\//i.test(href);
        const t = title ? ` title="${title.replace(/"/g, "&quot;")}"` : "";
        const rel = external ? ' target="_blank" rel="noreferrer"' : "";
        return `<a href="${href}"${t}${rel}>${text}</a>`;
      },
    },
  });

  return marked;
}

export function Markdown({ source }: { source: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const html = useMemo(() => buildParser().parse(source, { async: false }) as string, [source]);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    let cancelled = false;

    import("highlight.js/lib/common")
      .then(({ default: hljs }) => {
        if (cancelled) return;
        root.querySelectorAll<HTMLElement>("pre code").forEach((el) => hljs.highlightElement(el));
      })
      .catch(() => {});

    root.querySelectorAll("pre").forEach((pre) => {
      if (pre.querySelector(".copy-btn")) return;
      const btn = document.createElement("button");
      btn.className = "copy-btn";
      btn.type = "button";
      btn.textContent = "Copy";
      btn.addEventListener("click", () => {
        const code = pre.querySelector("code")?.innerText ?? pre.innerText;
        navigator.clipboard.writeText(code).then(() => {
          btn.textContent = "Copied";
          setTimeout(() => (btn.textContent = "Copy"), 1500);
        });
      });
      pre.appendChild(btn);
    });

    return () => {
      cancelled = true;
    };
  }, [html]);

  return <div className="prose" ref={ref} dangerouslySetInnerHTML={{ __html: html }} />;
}
