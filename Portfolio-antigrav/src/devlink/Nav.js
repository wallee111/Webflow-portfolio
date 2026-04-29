"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Nav.module.css";

export function Nav({
  as: _Component = _Builtin.NavbarWrapper,

  link = {
    href: "#",
  },

  text = "Home",

  link2 = {
    href: "#",
  },

  text2 = "Projects",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "navbar")}
      tag="div"
      config={{
        animation: "default",
        collapse: "small",
        docHeight: false,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.NavbarContainer
        className={_utils.cx(_styles, "container-3")}
        tag="div"
      >
        <_Builtin.NavbarBrand
          className={_utils.cx(_styles, "", "brand")}
          options={{
            href: "#",
          }}
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "portfolio-logo")}
          tag="div"
        >
          {"William Do"}
        </_Builtin.Block>
        <_Builtin.NavbarMenu
          className={_utils.cx(_styles, "nav-menu")}
          tag="nav"
          role="navigation"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "nav-wrap", "home")}
            tag="div"
          >
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "nav-links", "home")}
              options={link}
            >
              {text}
            </_Builtin.NavbarLink>
            <_Builtin.Block
              className={_utils.cx(_styles, "icon-wrap", "home")}
              tag="div"
              id="icon-home"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "astrik")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/67b14fd34a99640666c06139/690e167c2035b2fc1810c886_icon-*.svg"
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "nav-wrap", "project")}
            tag="div"
          >
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "nav-links", "projects")}
              options={link2}
            >
              {text2}
            </_Builtin.NavbarLink>
            <_Builtin.Block
              className={_utils.cx(_styles, "icon-wrap", "project")}
              tag="div"
              id="icon-home"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "astrik")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/67b14fd34a99640666c06139/690e167c2035b2fc1810c886_icon-*.svg"
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "nav-wrap", "about")}
            tag="div"
          >
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "nav-links", "about")}
              options={{
                href: "#",
              }}
            >
              {"About Me"}
            </_Builtin.NavbarLink>
            <_Builtin.Block
              className={_utils.cx(_styles, "icon-wrap", "about")}
              tag="div"
              id="icon-home"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "astrik")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/67b14fd34a99640666c06139/690e167c2035b2fc1810c886_icon-*.svg"
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "nav-wrap", "contact")}
            tag="div"
          >
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "nav-links", "contact")}
              options={{
                href: "#",
              }}
            >
              {"Contact"}
            </_Builtin.NavbarLink>
            <_Builtin.Block
              className={_utils.cx(_styles, "icon-wrap", "contact")}
              tag="div"
              id="icon-home"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "astrik")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/67b14fd34a99640666c06139/690e167c2035b2fc1810c886_icon-*.svg"
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "nav-wrap", "resume")}
            tag="div"
          >
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "nav-links", "resume")}
              options={{
                href: "#",
              }}
            >
              {"Resume"}
            </_Builtin.NavbarLink>
            <_Builtin.Block
              className={_utils.cx(_styles, "icon-wrap", "resume")}
              tag="div"
              id="icon-home"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "astrik")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/67b14fd34a99640666c06139/690e167c2035b2fc1810c886_icon-*.svg"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton className={_utils.cx(_styles, "")} tag="div">
          <_Builtin.Icon
            widget={{
              type: "icon",
              icon: "nav-menu",
            }}
          />
        </_Builtin.NavbarButton>
      </_Builtin.NavbarContainer>
    </_Component>
  );
}
