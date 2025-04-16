import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import prerender from "@prerenderer/rollup-plugin";
import puppeteer from "puppeteer"; // Puppeteer를 임포트합니다.

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
          // Netlify 빌드 환경에 맞게 샌드박스 옵션 추가
          args: ["--no-sandbox", "--disable-setuid-sandbox"],
          // Puppeteer가 설치한 Chromium 바이너리의 경로를 동적으로 가져옵니다.
          executablePath: puppeteer.executablePath(),
        },
      },
      postProcess(renderedRoute) {
        renderedRoute.html = renderedRoute.html
          .replace(/http:/i, "https:")
          .replace(
            /(https:\/\/)?(localhost|127\.0\.0\.1):\d*/i,
            "https://test-seo-sam.netlify.app/"
          );
      },
    }),
  ],
});
