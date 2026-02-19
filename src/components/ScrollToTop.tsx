import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Pri zmene route scrolluje na začiatok stránky. */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
