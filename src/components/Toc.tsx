import { useEffect, useMemo, useState } from "react";
import { extractHeadings } from "../slug";

export function Toc({ markdown }: { markdown: string }) {
  const headings = useMemo(() => extractHeadings(markdown), [markdown]);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!headings.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "0px 0px -70% 0px" },
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 3) return null;

  return (
    <nav className={`toc${open ? " toc-open" : ""}`} aria-label="Table of contents">
      <button
        className="toc-toggle"
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        On this page
      </button>
      <ul>
        {headings.map((h) => (
          <li key={h.id} className={h.depth === 3 ? "toc-sub" : ""}>
            <a
              href={`#${h.id}`}
              className={active === h.id ? "toc-active" : ""}
              onClick={() => setOpen(false)}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
