import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import UnderConstructionPage from "./pages/UnderConstructionPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UnderConstructionPage />
  </StrictMode>
);
