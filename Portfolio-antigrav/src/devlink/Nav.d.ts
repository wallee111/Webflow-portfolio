import * as React from "react";
import * as Types from "./types";

declare function Nav(props: {
  as?: React.ElementType;
  link?: Types.Basic.Link;
  text?: React.ReactNode;
  link2?: Types.Basic.Link;
  text2?: React.ReactNode;
}): React.JSX.Element;
