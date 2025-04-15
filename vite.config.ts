import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import prerender from "@prerenderer/rollup-plugin";

// 환경 변수로 프리렌더링 스킵 여부 확인
const skipPrerender = process.env.SKIP_PRERENDER === "true";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 프리렌더링 스킵 여부에 따라 조건부 적용
    ...(!skipPrerender
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
