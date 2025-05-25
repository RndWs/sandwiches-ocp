
import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    // Subscribe to window resize event
    window.addEventListener("resize", handleResizeWindow);

    // Cleanup subscription on unmount
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return width;
};

export default useWindowWidth;