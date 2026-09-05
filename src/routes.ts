import { blogs } from "./blogs";

export type RouteMatch =
  | { name: "home" }
  | { name: "blog-list" }
  | { name: "blog-post"; slug: string }
  | { name: "not-found" };

export function matchRoute(pathname: string): RouteMatch {
  const path = pathname.replace(/\.html$/, "").replace(/\/+$/, "") || "/";
  if (path === "/") return { name: "home" };
  if (path === "/blog") return { name: "blog-list" };
  const m = path.match(/^\/blog\/([^/]+)$/);
  if (m) {
    return blogs.some((b) => b.slug === m[1])
      ? { name: "blog-post", slug: m[1] }
      : { name: "not-found" };
  }
  return { name: "not-found" };
}

/** Every path the prerenderer should emit as static HTML. */
export function allRoutePaths(): string[] {
  return ["/", "/blog", ...blogs.map((b) => `/blog/${b.slug}`)];
}
