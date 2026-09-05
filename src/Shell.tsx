import type { ReactNode } from "react";
import { Nav } from "./components/Nav";
import { Link } from "./router";
import { profile } from "./data";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      {children}
      <footer className="footer">
        <p>
          {profile.name} &mdash; <span>2026</span>
        </p>
        <p>
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>{" "}
          &bull;{" "}
          <Link to="/blog">Blog</Link> &bull;{" "}
          <a href={`mailto:${profile.email}`}>Email</a>
        </p>
      </footer>
    </>
  );
}
