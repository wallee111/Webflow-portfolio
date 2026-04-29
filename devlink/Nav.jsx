"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";
import Icon from "./webflow_modules/Icon/components/Icon";
import Image from "./webflow_modules/Basic/components/Image";
import Link from "./webflow_modules/Basic/components/Link";
import NavbarBrand from "./webflow_modules/Navbar/components/NavbarBrand";
import NavbarButton from "./webflow_modules/Navbar/components/NavbarButton";
import NavbarContainer from "./webflow_modules/Navbar/components/NavbarContainer";
import NavbarLink from "./webflow_modules/Navbar/components/NavbarLink";
import NavbarMenu from "./webflow_modules/Navbar/components/NavbarMenu";
import NavbarWrapper from "./webflow_modules/Navbar/components/NavbarWrapper";

export function Nav({
  link = {
    href: "#",
  },

  link1 = {
    href: "#",
  },

  link2 = {
    href: "#",
  },

  link3 = {
    href: "#",
  },

  text = "Home",
  text1 = "About Me",
  text2 = "Projects",
  text3 = "Contact",
}) {
  return (
    <NavbarWrapper
      className={_utils.cx(_styles, "navbar")}
      config={{
        animation: "default",
        collapse: "small",
        docHeight: false,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
      tag="div"
    >
      <NavbarContainer className={_utils.cx(_styles, "container-3")} tag="div">
        <NavbarBrand
          className={_utils.cx(_styles, "brand")}
          options={{
            href: "#",
          }}
        />
        <Link
          block="inline"
          button={false}
          className={_utils.cx(_styles, "link-block-3")}
          options={{
            href: "#",
          }}
        >
          <Block className={_utils.cx(_styles, "portfolio-logo")} tag="div">
            {"William Do"}
          </Block>
        </Link>
        <NavbarMenu
          className={_utils.cx(_styles, "nav-menu")}
          role="navigation"
          tag="nav"
        >
          <Block className={_utils.cx(_styles, "nav-wrap", "home")} tag="div">
            <NavbarLink
              className={_utils.cx(_styles, "nav-links", "home")}
              options={link}
            >
              {text}
            </NavbarLink>
            <Block
              className={_utils.cx(_styles, "icon-wrap", "home")}
              id={_utils.cx(_styles, "icon-home")}
              tag="div"
            >
              <Image
                alt=""
                className={_utils.cx(_styles, "astrik")}
                height="auto"
                loading="lazy"
                src="https://cdn.prod.website-files.com/67b14fd34a99640666c06139/690e167c2035b2fc1810c886_icon-*.svg"
                width="auto"
              />
            </Block>
          </Block>
          <Block
            className={_utils.cx(_styles, "nav-wrap", "project")}
            tag="div"
          >
            <NavbarLink
              className={_utils.cx(_styles, "nav-links", "projects")}
              options={link2}
            >
              {text2}
            </NavbarLink>
            <Block
              className={_utils.cx(_styles, "icon-wrap", "project")}
              id={_utils.cx(_styles, "icon-home")}
              tag="div"
            >
              <Image
                alt=""
                className={_utils.cx(_styles, "astrik")}
                height="auto"
                loading="lazy"
                src="https://cdn.prod.website-files.com/67b14fd34a99640666c06139/690e167c2035b2fc1810c886_icon-*.svg"
                width="auto"
              />
            </Block>
          </Block>
          <Block className={_utils.cx(_styles, "nav-wrap", "about")} tag="div">
            <NavbarLink
              className={_utils.cx(_styles, "nav-links", "about", "active")}
              options={link1}
            >
              {text1}
            </NavbarLink>
            <Block
              className={_utils.cx(_styles, "icon-wrap", "about")}
              id={_utils.cx(_styles, "icon-home")}
              tag="div"
            >
              <Image
                alt=""
                className={_utils.cx(_styles, "astrik")}
                height="auto"
                loading="lazy"
                src="https://cdn.prod.website-files.com/67b14fd34a99640666c06139/690e167c2035b2fc1810c886_icon-*.svg"
                width="auto"
              />
            </Block>
          </Block>
          <Block
            className={_utils.cx(_styles, "nav-wrap", "contact")}
            tag="div"
          >
            <NavbarLink
              className={_utils.cx(_styles, "nav-links", "contact")}
              options={link3}
            >
              {text3}
            </NavbarLink>
            <Block
              className={_utils.cx(_styles, "icon-wrap", "contact")}
              id={_utils.cx(_styles, "icon-home")}
              tag="div"
            >
              <Image
                alt=""
                className={_utils.cx(_styles, "astrik")}
                height="auto"
                loading="lazy"
                src="https://cdn.prod.website-files.com/67b14fd34a99640666c06139/690e167c2035b2fc1810c886_icon-*.svg"
                width="auto"
              />
            </Block>
          </Block>
          <Block className={_utils.cx(_styles, "nav-wrap", "resume")} tag="div">
            <NavbarLink
              className={_utils.cx(_styles, "nav-links", "resume")}
              options={{
                href: "#",
              }}
            >
              {"Resume"}
            </NavbarLink>
            <Block
              className={_utils.cx(_styles, "icon-wrap", "resume")}
              id={_utils.cx(_styles, "icon-home")}
              tag="div"
            >
              <Image
                alt=""
                className={_utils.cx(_styles, "astrik")}
                height="auto"
                loading="lazy"
                src="https://cdn.prod.website-files.com/67b14fd34a99640666c06139/690e167c2035b2fc1810c886_icon-*.svg"
                width="auto"
              />
            </Block>
          </Block>
        </NavbarMenu>
        <NavbarButton className={_utils.cx(_styles)} tag="div">
          <Icon
            widget={{
              type: "icon",
              icon: "nav-menu",
            }}
          />
        </NavbarButton>
      </NavbarContainer>
    </NavbarWrapper>
  );
}
