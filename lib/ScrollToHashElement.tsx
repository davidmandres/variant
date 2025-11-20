"use client";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Delay to allow route to change first
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, [location]);

  return null;
}
