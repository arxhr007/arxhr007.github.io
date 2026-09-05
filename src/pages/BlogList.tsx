import { Tags } from "../components/Bits";
import { blogs } from "../blogs";

export function BlogList() {
  return (
    <main className="container">
      <section className="card">
        <h2>Blog</h2>
        <p className="about-text" style={{ marginBottom: 8 }}>
          Security research, malware analysis, and reverse engineering write-ups.
        </p>
        <div className="blog-list">
          {blogs.map((b) => (
            <a className="blog-card" href={`#/blog/${b.slug}`} key={b.slug}>
              <h3>{b.title}</h3>
              <p className="job-meta" style={{ marginBottom: 10 }}>
                {b.description}
              </p>
              <Tags items={b.tags} />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
