import { useState } from "react";
import { profile } from "../data";

export function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="top-nav">
      <a className="brand" href="#/" onClick={close}>
        {profile.name}
      </a>
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
        <a className="nav-btn" href="#/blog" onClick={close}>
          Blog
        </a>
        <a className="nav-btn" href={profile.links.resume} target="_blank" rel="noreferrer">
          Download Resume
        </a>
      </div>
    </nav>
  );
}
