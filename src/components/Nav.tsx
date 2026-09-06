import { useState } from "react";
import { profile } from "../data";
import { Link, useRouter } from "../router";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const [open, setOpen] = useState(false);
  const { path } = useRouter();
  const close = () => setOpen(false);
  const onBlog = path.startsWith("/blog");

  return (
    <nav className="top-nav">
      <div className="nav-left">
        <Link className="brand" to="/" onClick={close}>
          {profile.name}
        </Link>
        <ThemeToggle />
      </div>

      <button
        className={`hamburger${open ? " active" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-actions${open ? " active" : ""}`}>
        <Link
          className="nav-btn"
          to="/blog"
          onClick={close}
          aria-current={onBlog ? "page" : undefined}
        >
          Blog
        </Link>
        <a className="nav-btn" href={profile.links.resume} target="_blank" rel="noreferrer">
          Download Resume
        </a>
      </div>
    </nav>
  );
}
