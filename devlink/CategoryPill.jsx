"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";

export function CategoryPill({
  cycling = "Cycling",
  text = "",
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    "Ux-design": "w-variant-ce2f10f4-5fd6-6711-2058-7590880e35cd",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <Block
      className={_utils.cx(_styles, "frame-64", _activeStyleVariant)}
      tag="div"
    >
      <Block
        className={_utils.cx(_styles, "pill-text-s", _activeStyleVariant)}
        tag="div"
      >
        {cycling}
      </Block>
    </Block>
  );
}
