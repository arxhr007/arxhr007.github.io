import { Link } from "../router";

export function NotFound() {
  return (
    <main className="container">
      <section className="card">
        <h2>Page not found</h2>
        <p>
          That page doesn't exist. <Link to="/">Go home</Link> or{" "}
          <Link to="/blog">read the blog</Link>.
        </p>
      </section>
    </main>
  );
}
