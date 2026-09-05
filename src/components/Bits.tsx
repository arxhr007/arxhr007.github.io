import { Rich } from "./Rich";

export function Tags({ items }: { items: string[] }) {
  return (
    <div className="tag-list">
      {items.map((t) => (
        <span className="tag" key={t}>
          {t}
        </span>
      ))}
    </div>
  );
}

export function Points({ items }: { items: string[] }) {
  return (
    <ul className="list">
      {items.map((p, i) => (
        <li key={i}>
          <Rich>{p}</Rich>
        </li>
      ))}
    </ul>
  );
}
