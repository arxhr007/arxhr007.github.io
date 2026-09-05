import { Nav } from "./components/Nav";
import { useHashRoute } from "./useHashRoute";
import { Home } from "./pages/Home";
import { BlogList } from "./pages/BlogList";
import { BlogPost } from "./pages/BlogPost";
import { profile } from "./data";

export default function App() {
  const path = useHashRoute();
  const blogMatch = path.match(/^\/blog\/(.+)$/);

  let page;
  if (blogMatch) page = <BlogPost slug={blogMatch[1]} />;
  else if (path === "/blog") page = <BlogList />;
  else page = <Home />;

  return (
    <>
      <Nav />
      {page}
      <footer className="footer">
        <p>
          {profile.name} &mdash; <span>2026</span>
        </p>
        <p>
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>{" "}
          &bull;{" "}
          <a href={profile.links.website} target="_blank" rel="noreferrer">
            Website
          </a>{" "}
          &bull; <a href={`mailto:${profile.email}`}>Email</a>
        </p>
      </footer>
    </>
  );
}
