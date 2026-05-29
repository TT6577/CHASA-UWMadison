import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      document
        .querySelector("#content")
        .scrollTo({ top: 0 });
    }, 300); // 300ms delay
  }, [location.pathname]);

  return null;
}
