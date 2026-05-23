import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import AppLayout from "./layout.tsx";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/users",
    element: <div>users page</div>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
