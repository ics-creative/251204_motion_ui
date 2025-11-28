import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/common.css";
import "./assets/index.css";
import "./assets/rippleButton.css";
import "./assets/accordion.css";
import "./assets/list.css";
import "./assets/dropdown.css";
import "./assets/progressRate.css";
import "./assets/segmentButton.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
