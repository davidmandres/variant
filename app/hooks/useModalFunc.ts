import { useEffect } from "react";

export default function useModalFunc(
  contentRef: React.RefObject<HTMLElement | null>,
  hashToCheck: string,
  hashToGoTo: string
) {
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const popupIsOpen = window.location.hash === hashToCheck;
      if (!popupIsOpen) return;

      if (contentRef.current && !contentRef.current.contains(e.target as Node))
        window.location.hash = hashToGoTo;
    }

    function handleEscapeKey(e: KeyboardEvent) {
      if (e.key === "Escape" && window.location.hash === hashToCheck)
        window.location.hash = hashToGoTo;
    }

    function lockBodyScroll() {
      if (window.location.hash === hashToCheck)
        document.body.style.overflow = "hidden";
      else document.body.style.overflow = "";
    }

    // Initial lock on mount
    lockBodyScroll();

    // Listen for hash changes (CSS-targeted modal open/close)
    const observer = () => lockBodyScroll();
    window.addEventListener("hashchange", observer);

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      window.removeEventListener("hashchange", observer);
      document.body.style.overflow = ""; // reset on unmount
    };
  }, [contentRef, hashToCheck, hashToGoTo]);
}
