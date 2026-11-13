// Static build for GitHub Pages: `npm run build:static` → static-dist/
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  root: fileURLToPath(new URL("./static", import.meta.url)),
  base: "./",
  plugins: [react()],
  define: { "import.meta.env.VITE_STATIC": JSON.stringify("1") },
  css: { postcss: fileURLToPath(new URL(".", import.meta.url)) },
  build: { outDir: fileURLToPath(new URL("./static-dist", import.meta.url)), emptyOutDir: true },
});
