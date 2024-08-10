import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppRoutes } from "./routes.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { SWRConfig } from "swr";

const router = createBrowserRouter(AppRoutes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Suspense fallback={<div>Loadin</div>}> */}
    <SWRConfig
      value={{
        shouldRetryOnError: false,
        // revalidateOnMount: true,
      }}
    >
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </SWRConfig>
    {/* </Suspense> */}
  </React.StrictMode>
);
