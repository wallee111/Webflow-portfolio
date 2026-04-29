/* Capabilities — production component for William Do's portfolio.
   Editorial big-type list with sticky preview pane.
   Hover: previews skill in pane.
   Click: locks the preview to that skill (re-click to unlock).
   Scroll: subtle parallax on the preview pane.
   Mobile: list expands inline on tap. */

(function () {
  const SKILLS = [{
    id: "web-mobile",
    num: "01",
    name: "Web & Mobile Design",
    kicker: "Designing the surface people actually touch.",
    body: "Responsive marketing sites, dashboards, and native iOS/Android flows. I sweat the details — type ramp, tap targets, that one weird tablet breakpoint.",
    tools: ["Figma", "Claude Code", "Antigravity"],
    visual: "device"
  }, {
    id: "logo-brand",
    num: "02",
    name: "Logo & Branding",
    kicker: "Marks that hold up at 16px and on a billboard.",
    body: "Logo systems, colour, type, voice — built from the brief, not from a template. I work through 30 sketches before a single vector.",
    tools: ["Illustrator", "Glyphs", "Figma"],
    visual: "mark"
  }, {
    id: "prototyping",
    num: "03",
    name: "Prototyping",
    kicker: "Working software, not slideware.",
    body: "Hi-fi clickable prototypes in Figma, motion in Rive, real ones in React. If a stakeholder needs to feel it, I can build it by Friday.",
    tools: ["Figma", "Rive", "Framer", "ProtoPie"],
    visual: "proto"
  }, {
    id: "design-systems",
    num: "04",
    name: "Design Systems",
    kicker: "Tokens, components, and the docs nobody reads.",
    body: "Multi-brand component libraries with tight token pipelines. Figma Variables → Style Dictionary → Tailwind config, all in one source of truth.",
    tools: ["Figma Variables", "Storybook", "Tokens Studio"],
    visual: "system"
  }, {
    id: "frontend",
    num: "05",
    name: "Frontend Engineering",
    kicker: "I ship the design — actual code in actual prod.",
    body: "React, TypeScript, Tailwind, a healthy respect for accessibility. Comfortable from a first commit to a Lighthouse-100 push.",
    tools: ["React", "TypeScript", "Tailwind", "Next.js"],
    visual: "code"
  }, {
    id: "motion",
    num: "06",
    name: "Motion & Interaction",
    kicker: "The micro-interactions you barely notice — that's the point.",
    body: "Easing curves, spring physics, scroll-driven moments. I care about whether the motion serves the user or just the demo reel.",
    tools: ["Rive", "Lottie", "Framer Motion", "GSAP"],
    visual: "motion"
  }];

  /* ─── Animated SVG glyphs ─── */
  function Visual({
    kind,
    active
  }) {
    const accent = "var(--cap-accent)";
    if (kind === "device") {
      return /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 200 140",
        width: "100%",
        height: "100%",
        style: {
          maxWidth: 240
        }
      }, /*#__PURE__*/React.createElement("rect", {
        x: "20",
        y: "22",
        width: "120",
        height: "78",
        rx: "4",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "60",
        y: "100",
        width: "40",
        height: "6",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "50",
        y1: "106",
        x2: "110",
        y2: "106",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "150",
        y: "40",
        width: "34",
        height: "62",
        rx: "5",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "167",
        cy: "96",
        r: "1.5",
        fill: "currentColor"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "24",
        y: "26",
        width: "112",
        height: "2",
        fill: accent,
        style: {
          animation: active ? "cap-scan-d 2.4s ease-in-out infinite" : "none"
        }
      }), /*#__PURE__*/React.createElement("rect", {
        x: "154",
        y: "44",
        width: "26",
        height: "2",
        fill: accent,
        style: {
          animation: active ? "cap-scan-p 2.4s ease-in-out infinite .3s" : "none"
        }
      }));
    }
    if (kind === "mark") {
      return /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 200 140",
        width: "100%",
        height: "100%",
        style: {
          maxWidth: 200
        }
      }, /*#__PURE__*/React.createElement("g", {
        style: {
          transformOrigin: "100px 70px",
          animation: active ? "cap-spin 12s linear infinite" : "none"
        }
      }, /*#__PURE__*/React.createElement("circle", {
        cx: "100",
        cy: "70",
        r: "38",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "100",
        cy: "70",
        r: "6",
        fill: accent
      }), /*#__PURE__*/React.createElement("line", {
        x1: "62",
        y1: "70",
        x2: "138",
        y2: "70",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "100",
        y1: "32",
        x2: "100",
        y2: "108",
        stroke: "currentColor",
        strokeWidth: "1.5"
      })), /*#__PURE__*/React.createElement("text", {
        x: "48",
        y: "74",
        fontFamily: "var(--cap-mono)",
        fontSize: "7",
        fill: "currentColor",
        opacity: "0.5"
      }, "A"), /*#__PURE__*/React.createElement("text", {
        x: "146",
        y: "74",
        fontFamily: "var(--cap-mono)",
        fontSize: "7",
        fill: "currentColor",
        opacity: "0.5"
      }, "a"), /*#__PURE__*/React.createElement("text", {
        x: "96",
        y: "26",
        fontFamily: "var(--cap-mono)",
        fontSize: "7",
        fill: "currentColor",
        opacity: "0.5"
      }, "x"));
    }
    if (kind === "proto") {
      return /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 200 140",
        width: "100%",
        height: "100%",
        style: {
          maxWidth: 240
        }
      }, [20, 80, 140].map((x, i) => /*#__PURE__*/React.createElement("rect", {
        key: i,
        x: x,
        y: "40",
        width: "40",
        height: "60",
        rx: "3",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5"
      })), /*#__PURE__*/React.createElement("line", {
        x1: "60",
        y1: "70",
        x2: "80",
        y2: "70",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeDasharray: "3 2"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "120",
        y1: "70",
        x2: "140",
        y2: "70",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeDasharray: "3 2"
      }), /*#__PURE__*/React.createElement("circle", {
        r: "3",
        fill: accent
      }, active && /*#__PURE__*/React.createElement("animate", {
        attributeName: "cx",
        values: "40;100;160;40",
        dur: "3s",
        repeatCount: "indefinite"
      }), active && /*#__PURE__*/React.createElement("animate", {
        attributeName: "cy",
        values: "70;70;70;70",
        dur: "3s",
        repeatCount: "indefinite"
      }), !active && /*#__PURE__*/React.createElement("animate", {
        attributeName: "cx",
        values: "40",
        dur: "0.1s"
      })));
    }
    if (kind === "system") {
      const swatches = ["#2A1A14", "#D9412C", "#E8DCC8", "#3A2E26", "#F5F1EA", "#6B5D52"];
      return /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 200 140",
        width: "100%",
        height: "100%",
        style: {
          maxWidth: 240
        }
      }, swatches.map((c, i) => /*#__PURE__*/React.createElement("g", {
        key: i,
        style: {
          animation: active ? `cap-pulse 2s ease-in-out infinite ${i * 0.15}s` : "none"
        }
      }, /*#__PURE__*/React.createElement("rect", {
        x: 28 + i * 28 - 10,
        y: "40",
        width: "20",
        height: "20",
        fill: c,
        stroke: "currentColor",
        strokeWidth: "0.6"
      }), /*#__PURE__*/React.createElement("text", {
        x: 28 + i * 28,
        y: "74",
        fontFamily: "var(--cap-mono)",
        fontSize: "6",
        fill: "currentColor",
        textAnchor: "middle",
        opacity: "0.6"
      }, String(i + 1).padStart(2, "0")))), /*#__PURE__*/React.createElement("line", {
        x1: "20",
        y1: "92",
        x2: "180",
        y2: "92",
        stroke: "currentColor",
        strokeWidth: "1",
        opacity: "0.4"
      }), /*#__PURE__*/React.createElement("text", {
        x: "100",
        y: "110",
        fontFamily: "var(--cap-mono)",
        fontSize: "8",
        fill: "currentColor",
        textAnchor: "middle",
        opacity: "0.6"
      }, "tokens \xB7 components \xB7 docs"));
    }
    if (kind === "code") {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: "var(--cap-mono)",
          fontSize: 11,
          color: "var(--cap-ink-2)",
          lineHeight: 1.55,
          padding: "10px 14px",
          width: "100%",
          maxWidth: 260
        }
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
        style: {
          color: accent
        }
      }, "const"), " design = ", /*#__PURE__*/React.createElement("span", {
        style: {
          color: "#7a6a5e"
        }
      }, "(brief) =>"), " ", "{"), /*#__PURE__*/React.createElement("div", {
        style: {
          paddingLeft: 14
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          color: "#7a6a5e"
        }
      }, "return"), " brief"), /*#__PURE__*/React.createElement("div", {
        style: {
          paddingLeft: 28
        }
      }, ".", /*#__PURE__*/React.createElement("span", {
        style: {
          color: accent
        }
      }, "sketch"), "()"), /*#__PURE__*/React.createElement("div", {
        style: {
          paddingLeft: 28
        }
      }, ".", /*#__PURE__*/React.createElement("span", {
        style: {
          color: accent
        }
      }, "prototype"), "()"), /*#__PURE__*/React.createElement("div", {
        style: {
          paddingLeft: 28
        }
      }, ".", /*#__PURE__*/React.createElement("span", {
        style: {
          color: accent
        }
      }, "ship"), "(", /*#__PURE__*/React.createElement("span", {
        style: {
          borderRight: active ? "1.5px solid currentColor" : "1.5px solid transparent",
          animation: active ? "cap-cursor 0.9s steps(1) infinite" : "none",
          paddingRight: 1
        }
      }, "\xA0"), ")"), /*#__PURE__*/React.createElement("div", null, "}"));
    }
    if (kind === "motion") {
      return /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 200 140",
        width: "100%",
        height: "100%",
        style: {
          maxWidth: 240
        }
      }, /*#__PURE__*/React.createElement("line", {
        x1: "20",
        y1: "118",
        x2: "190",
        y2: "118",
        stroke: "currentColor",
        strokeWidth: "0.6",
        opacity: "0.3"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "20",
        y1: "22",
        x2: "20",
        y2: "118",
        stroke: "currentColor",
        strokeWidth: "0.6",
        opacity: "0.3"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 20 110 C 60 110, 80 30, 180 30",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }), /*#__PURE__*/React.createElement("circle", {
        r: "4",
        fill: accent
      }, active ? /*#__PURE__*/React.createElement("animateMotion", {
        dur: "2.2s",
        repeatCount: "indefinite",
        path: "M 20 110 C 60 110, 80 30, 180 30"
      }) : /*#__PURE__*/React.createElement("animateMotion", {
        dur: "0.1s",
        path: "M 100 70 L 100 70"
      })));
    }
    return null;
  }

  /* ─── Section root ─── */
  function Capabilities() {
    const [hovered, setHovered] = React.useState(null);
    const [locked, setLocked] = React.useState(null);
    const [mobileOpen, setMobileOpen] = React.useState(SKILLS[0].id);
    const [parallax, setParallax] = React.useState(0);
    const sectionRef = React.useRef(null);
    const isMobile = useIsMobile();

    // active = lock wins, then hover, then default to first skill
    const activeId = locked || hovered || SKILLS[0].id;
    const active = SKILLS.find(s => s.id === activeId) || SKILLS[0];

    // scroll parallax — translate the aside up to ±40px relative to
    // the section's position in the viewport.
    React.useEffect(() => {
      if (isMobile) return;
      let frame = 0;
      const onScroll = () => {
        if (frame) return;
        frame = requestAnimationFrame(() => {
          frame = 0;
          const el = sectionRef.current;
          if (!el) return;
          const r = el.getBoundingClientRect();
          const center = window.innerHeight / 2;
          const dist = r.top + r.height / 2 - center;
          const maxDist = window.innerHeight;
          const t = Math.max(-1, Math.min(1, dist / maxDist));
          setParallax(-t * 32);
        });
      };
      onScroll();
      window.addEventListener("scroll", onScroll, {
        passive: true
      });
      window.addEventListener("resize", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        if (frame) cancelAnimationFrame(frame);
      };
    }, [isMobile]);
    const onRowEnter = id => !isMobile && setHovered(id);
    const onRowLeave = () => !isMobile && setHovered(null);
    const onRowClick = id => {
      if (isMobile) {
        setMobileOpen(cur => cur === id ? null : id);
      } else {
        setLocked(cur => cur === id ? null : id);
      }
    };
    return /*#__PURE__*/React.createElement("div", {
      ref: sectionRef,
      className: "cap-inner"
    }, /*#__PURE__*/React.createElement("header", {
      className: "cap-header"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "What I can actually do.")), /*#__PURE__*/React.createElement("div", {
      className: "cap-layout"
    }, /*#__PURE__*/React.createElement("ol", {
      className: "cap-list",
      onMouseLeave: onRowLeave
    }, SKILLS.map(s => {
      const rowActive = isMobile ? mobileOpen === s.id : activeId === s.id;
      const rowLocked = !isMobile && locked === s.id;
      return /*#__PURE__*/React.createElement("li", {
        key: s.id,
        className: `cap-row${rowActive ? " is-active" : ""}${rowLocked ? " is-locked" : ""}`,
        onMouseEnter: () => onRowEnter(s.id),
        onClick: () => onRowClick(s.id)
      }, /*#__PURE__*/React.createElement("div", {
        className: "cap-row-head"
      }, /*#__PURE__*/React.createElement("span", {
        className: "cap-row-num"
      }, s.num), /*#__PURE__*/React.createElement("h3", {
        className: "cap-row-name"
      }, s.name), /*#__PURE__*/React.createElement("span", {
        className: "cap-row-aside"
      }, rowLocked ? "pinned" : `${s.tools.length} tools →`), /*#__PURE__*/React.createElement("svg", {
        className: "cap-row-mobile-toggle",
        viewBox: "0 0 12 12",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.4"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M4 2l4 4-4 4",
        strokeLinecap: "round"
      }))), /*#__PURE__*/React.createElement("div", {
        className: "cap-row-mobile-body"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "cap-row-mobile-inner"
      }, /*#__PURE__*/React.createElement("div", {
        className: "cap-mobile-visual"
      }, /*#__PURE__*/React.createElement(Visual, {
        kind: s.visual,
        active: rowActive
      })), /*#__PURE__*/React.createElement("p", {
        className: "cap-mobile-body"
      }, /*#__PURE__*/React.createElement("strong", null, s.kicker), " ", s.body), /*#__PURE__*/React.createElement("div", {
        className: "cap-mobile-tools"
      }, s.tools.map(t => /*#__PURE__*/React.createElement("span", {
        key: t,
        className: "cap-tool"
      }, t)))))));
    })), /*#__PURE__*/React.createElement("aside", {
      className: "cap-aside",
      style: {
        "--cap-parallax": `${parallax}px`
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "cap-aside-bar"
    }, /*#__PURE__*/React.createElement("span", {
      className: "cap-aside-bar-label"
    }, locked ? "Pinned" : "Now showing", " \u2014 ", active.num), /*#__PURE__*/React.createElement("span", {
      className: "cap-aside-bar-dot"
    })), /*#__PURE__*/React.createElement("div", {
      className: "cap-aside-visual"
    }, /*#__PURE__*/React.createElement(Visual, {
      kind: active.visual,
      active: true
    })), /*#__PURE__*/React.createElement("h3", {
      className: "cap-aside-name"
    }, active.name), /*#__PURE__*/React.createElement("p", {
      className: "cap-aside-body"
    }, /*#__PURE__*/React.createElement("strong", null, active.kicker), " ", active.body), /*#__PURE__*/React.createElement("div", {
      className: "cap-tools"
    }, active.tools.map(t => /*#__PURE__*/React.createElement("span", {
      key: t,
      className: "cap-tool"
    }, t))))));
  }
  function useIsMobile() {
    const [m, setM] = React.useState(() => typeof window !== "undefined" && window.innerWidth <= 900);
    React.useEffect(() => {
      const mq = window.matchMedia("(max-width: 900px)");
      const onChange = e => setM(e.matches);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    }, []);
    return m;
  }

  // mount into [data-cap-root]
  function mount() {
    const root = document.querySelector("[data-cap-root]");
    if (!root) return;
    ReactDOM.createRoot(root).render(/*#__PURE__*/React.createElement(Capabilities, null));
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
