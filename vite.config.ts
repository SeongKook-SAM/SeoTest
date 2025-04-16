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
        puppeteerOptions: {
          headless: true,
          // 추가: Netlify에서 샌드박스 모드 해제
          args: ["--no-sandbox", "--disable-setuid-sandbox"],
          // 필요에 따라 실행 경로 명시 (Netlify 빌드 환경에 맞게 수정)
          executablePath: process.env.CHROME_BIN || "/usr/bin/chromium-browser",
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
