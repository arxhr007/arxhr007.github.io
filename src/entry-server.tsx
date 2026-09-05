import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { getHead, renderHeadTags } from "./seo";

export function render(url: string): { appHtml: string; headTags: string } {
  const appHtml = renderToString(
    <StrictMode>
      <App location={url} />
    </StrictMode>,
  );
  return { appHtml, headTags: renderHeadTags(getHead(url)) };
}

export { allRoutePaths } from "./routes";
