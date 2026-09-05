import { Markdown } from "../components/Markdown";
import { Tags } from "../components/Bits";
import { getBlog } from "../blogs";

export function BlogPost({ slug }: { slug: string }) {
  const post = getBlog(slug);

  if (!post) {
    return (
      <main className="container">
        <section className="card">
          <h2>Not found</h2>
          <p>
            No blog post named <code>{slug}</code>.{" "}
            <a href="#/blog">Back to all posts</a>.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="container">
      <article className="card">
        <a href="#/blog" className="back-link">
          &larr; All posts
        </a>
        <h1 style={{ marginTop: 12 }}>{post.meta.title}</h1>
        <p className="job-meta" style={{ margin: "6px 0 14px" }}>
          {post.meta.description}
        </p>
        <div style={{ marginBottom: 24 }}>
          <Tags items={post.meta.tags} />
        </div>
        <Markdown source={post.markdown} />
      </article>
    </main>
  );
}
