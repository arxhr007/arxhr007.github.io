export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[`*_~]/g, "")
    .replace(/&[a-z]+;/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export type Heading = { depth: 2 | 3; text: string; id: string };

/** Pull h2/h3 headings from markdown, skipping fenced code blocks. */
export function extractHeadings(markdown: string): Heading[] {
  const out: Heading[] = [];
  let inFence = false;
  const seen = new Map<string, number>();

  for (const line of markdown.split("\n")) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const m = line.match(/^(#{2,3})\s+(.+?)\s*#*\s*$/);
    if (!m) continue;
    const depth = m[1].length as 2 | 3;
    const text = m[2].replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").trim();
    let id = slugify(text);
    const n = seen.get(id) ?? 0;
    seen.set(id, n + 1);
    if (n) id = `${id}-${n}`;
    out.push({ depth, text, id });
  }
  return out;
}
