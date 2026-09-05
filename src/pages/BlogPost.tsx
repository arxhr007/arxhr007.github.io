import { Markdown } from "../components/Markdown";
import { Toc } from "../components/Toc";
import { Link } from "../router";
import { adjacentBlogs, formatDate, getBlog } from "../blogs";

export function BlogPost({ slug }: { slug: string }) {
  const post = getBlog(slug);

  if (!post) {
    return (
      <main className="container">
        <section className="card">
          <h2>Not found</h2>
          <p>
            No blog post named <code>{slug}</code>. <Link to="/blog">Back to all posts</Link>.
          </p>
        </section>
      </main>
    );
  }

  const { prev, next } = adjacentBlogs(slug);

  return (
    <main className="container">
      <article className="card post">
        <Link to="/blog" className="back-link">
          &larr; All posts
        </Link>

        <header className="post-header">
          <h1>{post.meta.title}</h1>
          <p className="post-meta">
            {formatDate(post.meta.date)} &middot; {post.meta.readingTime} min read
          </p>
          <div className="tag-list">
            {post.meta.tags.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </header>

        <div className="post-body">
          <Toc markdown={post.markdown} />
          <Markdown source={post.markdown} />
        </div>

        <nav className="post-nav">
          {prev ? (
            <Link to={`/blog/${prev.slug}`} className="post-nav-link">
              <span>&larr; Older</span>
              <strong>{prev.title}</strong>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link to={`/blog/${next.slug}`} className="post-nav-link post-nav-next">
              <span>Newer &rarr;</span>
              <strong>{next.title}</strong>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </article>
    </main>
  );
}
