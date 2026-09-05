/* eslint-disable react-refresh/only-export-components -- router module intentionally exports hooks + components */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";

type RouterValue = { path: string; navigate: (to: string) => void };

const RouterContext = createContext<RouterValue>({
  path: "/",
  navigate: () => {},
});

export function useRouter() {
  return useContext(RouterContext);
}

/**
 * Minimal history router. On the server `location` is passed in; on the client
 * it reads `window.location` and listens for `popstate`.
 */
export function Router({
  location,
  children,
}: {
  location?: string;
  children: ReactNode;
}) {
  const [path, setPath] = useState(
    () => location ?? (typeof window === "undefined" ? "/" : window.location.pathname),
  );

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = useCallback((to: string) => {
    if (typeof window === "undefined") return;
    if (to === window.location.pathname + window.location.search) return;
    window.history.pushState(null, "", to);
    setPath(to.split(/[?#]/)[0]);
    window.scrollTo(0, 0);
  }, []);

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function Link({
  to,
  children,
  className,
  onClick,
  "aria-current": ariaCurrent,
}: {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  "aria-current"?: "page";
}) {
  const { navigate } = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.defaultPrevented) return;
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onClick?.();
    navigate(to);
  };

  return (
    <a href={to} className={className} onClick={handleClick} aria-current={ariaCurrent}>
      {children}
    </a>
  );
}
