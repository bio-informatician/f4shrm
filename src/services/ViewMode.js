import React from "react";
import { Grid } from "antd";

const isMobileView = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const {
    xs,
    sm,
    lg,
    // , md, lg, xl, xxl
  } = screens;

  return xs || (sm && !lg);
};

export { isMobileView };
