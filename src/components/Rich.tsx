import { Fragment, type ReactNode } from "react";

/**
 * Renders a string with `**text**` segments as <span class="hl"> highlights.
 * Keeps section content readable as plain strings in data.ts.
 */
export function Rich({ children }: { children: string }): ReactNode {
  const parts = children.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\*\*([^*]+)\*\*$/);
        return m ? (
          <span className="hl" key={i}>
            {m[1]}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        );
      })}
    </>
  );
}
