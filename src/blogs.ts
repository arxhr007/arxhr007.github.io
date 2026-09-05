const files = import.meta.glob("./blogs/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function rawBySlug(slug: string): string {
  const key = Object.keys(files).find((k) => k.endsWith(`/${slug}.md`));
  return key ? files[key] : "";
}

function readingMinutes(markdown: string): number {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export type Blog = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  /** ISO date. TODO: confirm real publish dates with the author. */
  date: string;
  readingTime: number;
};

// Titles/descriptions curated (source files have no frontmatter).
const entries: Omit<Blog, "readingTime">[] = [
  {
    slug: "parivahan-scam",
    title: "Android Malware Analysis: A Sophisticated SMS Stealer",
    description:
      "Reverse engineering a fake Parivahan APK spread over WhatsApp that exfiltrates victims' SMS messages.",
    tags: ["Android", "Malware Analysis", "Reverse Engineering"],
    date: "2025-07-14",
  },
  {
    slug: "rust-malware",
    title: "Hacking Printers: Intercepting Print Jobs with Rust Malware",
    description:
      "How Windows printing works, where raw print data lives, and a Rust PoC that captures .SPL spool files.",
    tags: ["Rust", "Windows", "Malware PoC"],
    date: "2025-06-02",
  },
  {
    slug: "scam-app",
    title: "Turning the Tables on a Scammer's Banking Trojan",
    description:
      "Analyzing a fake bank APK, finding the developer's exposed database, and flipping the attack.",
    tags: ["Android", "Reverse Engineering", "OSINT"],
    date: "2025-04-20",
  },
  {
    slug: "sandbox-evasion",
    title: "Sandbox Evasion: How Malware Detects Analysis Environments",
    description:
      "A technical tour of the techniques malware uses to spot sandboxes and VMs, and the countermeasures analysts use.",
    tags: ["Malware", "Sandbox", "Anti-Analysis"],
    date: "2025-03-08",
  },
];

/** All posts, newest first. */
export const blogs: Blog[] = entries
  .map((e) => ({ ...e, readingTime: readingMinutes(rawBySlug(e.slug)) }))
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getBlog(slug: string): { meta: Blog; markdown: string } | null {
  const meta = blogs.find((b) => b.slug === slug);
  if (!meta) return null;
  return { meta, markdown: rawBySlug(slug) };
}

export function adjacentBlogs(slug: string): { prev?: Blog; next?: Blog } {
  const i = blogs.findIndex((b) => b.slug === slug);
  if (i === -1) return {};
  // blogs[] is newest-first: "next" = newer, "prev" = older.
  return { next: blogs[i - 1], prev: blogs[i + 1] };
}

export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
