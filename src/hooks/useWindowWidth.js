import { useEffect, useState } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  const resizeWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    resizeWindowWidth();
    window.addEventListener("resize", resizeWindowWidth);
    return () => window.removeEventListener("resize", resizeWindowWidth);
  }, []);

  return windowWidth;
};

export default useWindowWidth;
