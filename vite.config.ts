import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import prerender from "@prerenderer/rollup-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: ["/", "/a", "/:id"],
      renderer: "@prerenderer/renderer-puppeteer",
      server: {
        port: 4173,
        host: "localhost",
      },
      rendererOptions: {
        maxConcurrentRoutes: 1,
        renderAfterTime: 500,
      },
      postProcess(renderedRoute) {
        renderedRoute.html = renderedRoute.html
          .replace(/http:/i, "https:")
          .replace(
            /(https:\/\/)?(localhost|127\.0\.0\.1):\d*/i,
            "http://localhost:4173/"
          );
      },
    }),
  ],
});
