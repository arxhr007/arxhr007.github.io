const files = import.meta.glob("./blogs/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function bySlug(slug: string): string {
  const key = Object.keys(files).find((k) => k.endsWith(`/${slug}.md`));
  return key ? files[key] : "";
}

export type Blog = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
};

/** Ordered newest-first. Titles/descriptions curated (source files have no frontmatter). */
export const blogs: Blog[] = [
  {
    slug: "parivahan-scam",
    title: "Android Malware Analysis: A Sophisticated SMS Stealer",
    description:
      "Reverse engineering a fake Parivahan APK spread over WhatsApp that exfiltrates victims' SMS messages.",
    tags: ["Android", "Malware Analysis", "Reverse Engineering"],
  },
  {
    slug: "scam-app",
    title: "Turning the Tables on a Scammer's Banking Trojan",
    description:
      "Analyzing a fake bank APK, finding the developer's exposed database, and flipping the attack.",
    tags: ["Android", "Reverse Engineering", "OSINT"],
  },
  {
    slug: "rust-malware",
    title: "Hacking Printers: Intercepting Print Jobs with Rust Malware",
    description:
      "How Windows printing works, where raw print data lives, and a Rust PoC that captures .SPL spool files.",
    tags: ["Rust", "Windows", "Malware PoC"],
  },
  {
    slug: "sandbox-evasion",
    title: "Sandbox Evasion: How Malware Detects Analysis Environments",
    description:
      "A technical tour of the techniques malware uses to spot sandboxes and VMs, and the countermeasures analysts use.",
    tags: ["Malware", "Sandbox", "Anti-Analysis"],
  },
];

export function getBlog(slug: string): { meta: Blog; markdown: string } | null {
  const meta = blogs.find((b) => b.slug === slug);
  if (!meta) return null;
  return { meta, markdown: bySlug(slug) };
}
