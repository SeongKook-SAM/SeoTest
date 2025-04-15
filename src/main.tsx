import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Acomponents from "./pages/Acomponents.tsx";
import Bcomponents from "./pages/Bcomponents.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "a", element: <Acomponents /> },
  { path: "/:id", element: <Bcomponents /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
