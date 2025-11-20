import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/page";
import About from "./about/page";
import ScrollToHashElement from "../lib/ScrollToHashElement";
import Services from "./services/page";
import NotFound from "./not-found/page";

import "./css/style.css";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
