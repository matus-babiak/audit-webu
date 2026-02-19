import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const SCROLL_KEY = (path: string) => `scroll_${path}`;

/**
 * - Pri prekliknutí na novú stránku (PUSH/REPLACE): scroll na začiatok.
 * - Pri späť/vpred (POP): obnoví uloženú pozíciu.
 * - Pri refreshi: obnoví pozíciu (uloženú v beforeunload).
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const action = useNavigationType();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    const prevPath = prevPathRef.current;

    // Uložiť pozíciu stránky, ktorú opúšťame (vrátane pri refreshi cez beforeunload)
    if (prevPath) {
      try {
        sessionStorage.setItem(SCROLL_KEY(prevPath), String(window.scrollY));
      } catch {
        // ignore
      }
    }

    if (action === "POP") {
      // Späť / vpred alebo prvý load po refreshi – obnoviť pozíciu
      try {
        const saved = sessionStorage.getItem(SCROLL_KEY(pathname));
        const y = saved ? parseInt(saved, 10) : 0;
        if (Number.isFinite(y)) {
          requestAnimationFrame(() => window.scrollTo(0, y));
        }
      } catch {
        window.scrollTo(0, 0);
      }
    } else {
      // PUSH alebo REPLACE – nová navigácia, vždy na začiatok
      window.scrollTo(0, 0);
    }

    prevPathRef.current = pathname;
  }, [pathname, action]);

  // Pri refreshi/zatvorení stránky uložiť aktuálnu pozíciu
  useEffect(() => {
    const save = () => {
      try {
        sessionStorage.setItem(SCROLL_KEY(window.location.pathname), String(window.scrollY));
      } catch {
        // ignore
      }
    };
    window.addEventListener("beforeunload", save);
    return () => window.removeEventListener("beforeunload", save);
  }, []);

  return null;
};

export default ScrollToTop;
