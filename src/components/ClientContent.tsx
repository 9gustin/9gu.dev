"use client";
import { useEffect } from "react";

import "../app/prism.css";
import * as prism from "../app/prism";
import { Render } from "@9gustin/react-notion-render";

export const ClientContent = ({ blocks }: any) => {
  useEffect(() => {
    prism && prism.highlightAll();
  }, []);

  return <Render blocks={blocks} useStyles classNames />;
};
