import { useEffect } from "react";
import { Router, useRouter } from "./router";
import { Shell } from "./Shell";
import { Home } from "./pages/Home";
import { BlogList } from "./pages/BlogList";
import { BlogPost } from "./pages/BlogPost";
import { NotFound } from "./pages/NotFound";
import { matchRoute } from "./routes";
import { applyHead, getHead } from "./seo";

function Routed() {
  const { path } = useRouter();
  const match = matchRoute(path);

  useEffect(() => {
    applyHead(getHead(path));
  }, [path]);

  let page;
  if (match.name === "home") page = <Home />;
  else if (match.name === "blog-list") page = <BlogList />;
  else if (match.name === "blog-post") page = <BlogPost slug={match.slug} />;
  else page = <NotFound />;

  return <Shell>{page}</Shell>;
}

export default function App({ location }: { location?: string }) {
  return (
    <Router location={location}>
      <Routed />
    </Router>
  );
}
