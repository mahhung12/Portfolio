import { useEffect, useState } from "react";

import { LARGE_MOBILE_SIZE, SMALL_TABLET_SIZE } from "constants/common";

const isClient = typeof window === "object";

function getSize() {
  return {
    width: isClient ? window.innerWidth : 0,
    height: isClient ? window.innerHeight : 0,
  };
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }

    if (isClient) {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
    return undefined;
  }, []);

  return windowSize;
}

// 575
export function useMobile() {
  const { width } = useWindowSize();
  return width <= LARGE_MOBILE_SIZE;
}

// 768
export function useSmallTablet() {
  const { width } = useWindowSize();
  return width <= SMALL_TABLET_SIZE;
}
