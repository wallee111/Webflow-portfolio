"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CategoryPill.module.css";

export function CategoryPill({
  as: _Component = _Builtin.Block,
  variant = "Base",
  text = "",
  cycling = "Cycling",
}) {
  const _styleVariantMap = {
    Base: "",
    "Ux-design": "w-variant-ce2f10f4-5fd6-6711-2058-7590880e35cd",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "frame-64", _activeStyleVariant)}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "pill-text-s", _activeStyleVariant)}
        tag="div"
      >
        {cycling}
      </_Builtin.Block>
    </_Component>
  );
}
