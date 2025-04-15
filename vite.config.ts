import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import prerender from "@prerenderer/rollup-plugin";

// 환경 변수를 확인하여 Vercel 환경인지 확인
const isVercel = process.env.VERCEL === "1";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Vercel 환경이 아닐 때만 프리렌더링 실행
    ...(!isVercel
      ? [
          prerender({
            routes: ["/", "/a", "/:id"],
            renderer: "@prerenderer/renderer-puppeteer",
            server: {
              port: 5174,
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
        ]
      : []),
  ],
});
