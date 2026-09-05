import { useMemo, useState } from "react";
import { Link } from "../router";
import { useRevealAll } from "../useReveal";
import { blogs, formatDate } from "../blogs";

export function BlogList() {
  const [tag, setTag] = useState<string | null>(null);
  useRevealAll([tag]);

  const allTags = useMemo(
    () => [...new Set(blogs.flatMap((b) => b.tags))].sort(),
    [],
  );
  const shown = tag ? blogs.filter((b) => b.tags.includes(tag)) : blogs;

  return (
    <main className="container">
      <section className="card">
        <h2>Blog</h2>
        <p className="about-text" style={{ marginBottom: 18 }}>
          Security research, malware analysis, and reverse engineering write-ups.
        </p>

        <div className="tag-filter">
          <button
            className={`tag${tag === null ? " tag-on" : ""}`}
            type="button"
            onClick={() => setTag(null)}
          >
            All
          </button>
          {allTags.map((t) => (
            <button
              key={t}
              className={`tag${tag === t ? " tag-on" : ""}`}
              type="button"
              onClick={() => setTag(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="blog-list">
          {shown.map((b) => (
            <Link className="blog-card reveal" to={`/blog/${b.slug}`} key={b.slug}>
              <h3>{b.title}</h3>
              <p className="post-meta">
                {formatDate(b.date)} &middot; {b.readingTime} min read
              </p>
              <p className="job-meta" style={{ marginBottom: 10 }}>
                {b.description}
              </p>
              <div className="tag-list">
                {b.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
