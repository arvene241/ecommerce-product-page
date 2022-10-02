import React from "react";
import useMediaQuery from "./useMediaQuery";

const useBreakpoints = () => {
  const breakpoints = {
    isMobile: useMediaQuery("(max-width: 549px"),
    isMobileLg: useMediaQuery("(min-width: 550px) and (max-width: 1023px)"),
    isDesktop: useMediaQuery("(min-width: 1024px)"),
  };

  return breakpoints;
};

export default useBreakpoints;
