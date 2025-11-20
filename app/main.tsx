import "./sass/main.scss";
import "./css/icon-font.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
