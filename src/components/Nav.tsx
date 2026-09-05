import { useState } from "react";
import { profile } from "../data";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="top-nav">
      <div className="brand">{profile.name}</div>
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
        <a className="nav-btn" href={profile.links.resume} target="_blank" rel="noreferrer">
          Download Resume
        </a>
        <a className="nav-btn" href={profile.links.blog} target="_blank" rel="noreferrer">
          Blogs
        </a>
      </div>
    </nav>
  );
}
