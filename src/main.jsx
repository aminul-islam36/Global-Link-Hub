import { StrictMode } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routers/Routers.jsx";
import AuthProvider from "./Contexts/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";

// Initialize AOS
Aos.init({
  duration: 800,
  easing: "ease-in-out",
  once: false,
  mirror: true,
  offset: 100,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer />
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>
);
