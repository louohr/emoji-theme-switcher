import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./ThemeContext.tsx";
import { Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Router router={router} />
    </ThemeProvider>
  </StrictMode>
);
