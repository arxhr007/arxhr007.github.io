import { profile } from "./data";
import { blogs } from "./blogs";
import { matchRoute } from "./routes";

export const SITE_URL = "https://arxhr007.github.io";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export type Head = {
  title: string;
  description: string;
  canonical: string;
  type: "website" | "article";
  image: string;
  jsonLd: object;
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  url: SITE_URL,
  sameAs: [profile.links.github, profile.links.linkedin, profile.links.website],
};

export function getHead(pathname: string): Head {
  const match = matchRoute(pathname);
  const base = {
    type: "website" as const,
    image: OG_IMAGE,
  };

  if (match.name === "blog-post") {
    const post = blogs.find((b) => b.slug === match.slug)!;
    return {
      ...base,
      type: "article",
      title: `${post.title} — ${profile.name}`,
      description: post.description,
      canonical: `${SITE_URL}/blog/${post.slug}`,
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        keywords: post.tags.join(", "),
        author: { "@type": "Person", name: profile.name, url: SITE_URL },
        mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
      },
    };
  }

  if (match.name === "blog-list") {
    return {
      ...base,
      title: `Blog — ${profile.name}`,
      description:
        "Security research, malware analysis, and reverse engineering write-ups by Aaron Thomas.",
      canonical: `${SITE_URL}/blog`,
      jsonLd: personLd,
    };
  }

  return {
    ...base,
    title: `${profile.name} — ${profile.title}`,
    description:
      "Backend Engineer and Full-Stack Developer. Production backends, REST APIs, PostgreSQL and Firebase data models, and AWS deployments.",
    canonical: `${SITE_URL}/`,
    jsonLd: personLd,
  };
}

/** Server: build the <head> tag string spliced into the prerendered HTML. */
export function renderHeadTags(h: Head): string {
  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  return [
    `<title>${esc(h.title)}</title>`,
    `<meta name="description" content="${esc(h.description)}" />`,
    `<link rel="canonical" href="${esc(h.canonical)}" />`,
    `<meta property="og:type" content="${h.type}" />`,
    `<meta property="og:title" content="${esc(h.title)}" />`,
    `<meta property="og:description" content="${esc(h.description)}" />`,
    `<meta property="og:url" content="${esc(h.canonical)}" />`,
    `<meta property="og:image" content="${esc(h.image)}" />`,
    `<meta property="og:site_name" content="${esc(profile.name)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(h.title)}" />`,
    `<meta name="twitter:description" content="${esc(h.description)}" />`,
    `<meta name="twitter:image" content="${esc(h.image)}" />`,
    `<script type="application/ld+json">${JSON.stringify(h.jsonLd)}</script>`,
  ].join("\n    ");
}

/** Client: apply head data imperatively on route change. */
export function applyHead(h: Head): void {
  document.title = h.title;

  const set = (selector: string, attrs: Record<string, string>) => {
    let el = document.head.querySelector<HTMLElement>(selector);
    if (!el) {
      el = document.createElement(Object.keys(attrs)[0] === "rel" ? "link" : "meta");
      document.head.appendChild(el);
    }
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  };

  set('meta[name="description"]', { name: "description", content: h.description });
  set('link[rel="canonical"]', { rel: "canonical", href: h.canonical });
  set('meta[property="og:type"]', { property: "og:type", content: h.type });
  set('meta[property="og:title"]', { property: "og:title", content: h.title });
  set('meta[property="og:description"]', { property: "og:description", content: h.description });
  set('meta[property="og:url"]', { property: "og:url", content: h.canonical });
  set('meta[property="og:image"]', { property: "og:image", content: h.image });
  set('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
  set('meta[name="twitter:title"]', { name: "twitter:title", content: h.title });
  set('meta[name="twitter:description"]', { name: "twitter:description", content: h.description });
  set('meta[name="twitter:image"]', { name: "twitter:image", content: h.image });

  let ld = document.head.querySelector('script[type="application/ld+json"]');
  if (!ld) {
    ld = document.createElement("script");
    ld.setAttribute("type", "application/ld+json");
    document.head.appendChild(ld);
  }
  ld.textContent = JSON.stringify(h.jsonLd);
}
