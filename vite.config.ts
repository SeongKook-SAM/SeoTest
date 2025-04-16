import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import prerender from "@prerenderer/rollup-plugin";

export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: ["/", "/a", "/example-id"],
      renderer: "@prerenderer/renderer-puppeteer",
      server: {
        port: 4173,
        host: "localhost",
      },
      rendererOptions: {
        maxConcurrentRoutes: 1,
        renderAfterTime: 500,
        // Puppeteer 옵션 수정 - 실행 경로를 지정하지 않음
        puppeteerOptions: {
          // executablePath 제거
          headless: true, // 또는 'new'
        },
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
