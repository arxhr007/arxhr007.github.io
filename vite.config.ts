import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// User site (arxhr007.github.io) is served from the domain root, so base "/".
export default defineConfig({
  base: "/",
  plugins: [react()],
});
