import * as React from "react";
import * as Types from "./types";

declare function CategoryPill(props: {
  as?: React.ElementType;
  variant?: "Base" | "Ux-design";
  text?: React.ReactNode;
  cycling?: React.ReactNode;
}): React.JSX.Element;
