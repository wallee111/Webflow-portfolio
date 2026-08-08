/* Other Projects — editorial hover list with fixed thumbnail pane.
   Vanilla JS. Self-mounts into [data-op-root]. */

(function () {
  const PROJECTS = [
    {
      id: "airhouse",
      num: "01",
      title: "Airhouse",
      meta: "Web · 2025",
      thumb: "https://picsum.photos/seed/willdo-airhouse/1200/900",
    },
    {
      id: "northstar",
      num: "02",
      title: "Northstar",
      meta: "Brand · 2024",
      thumb: "https://picsum.photos/seed/willdo-northstar/1200/900",
    },
    {
      id: "fieldnotes",
      num: "03",
      title: "Field Notes",
      meta: "iOS · 2024",
      thumb: "https://picsum.photos/seed/willdo-fieldnotes/1200/900",
    },
    {
      id: "refract",
      num: "04",
      title: "Refract",
      meta: "Web · 2023",
      thumb: "https://picsum.photos/seed/willdo-refract/1200/900",
    },
    {
      id: "signal",
      num: "05",
      title: "Signal",
      meta: "Systems · 2023",
      thumb: "https://picsum.photos/seed/willdo-signal/1200/900",
    },
  ];

  function mount() {
    const root = document.querySelector("[data-op-root]");
    if (!root) return;
    if (root.dataset.opMounted === "1") return; // idempotent
    root.dataset.opMounted = "1";

    root.classList.add("op-root");
    root.innerHTML = renderHTML(PROJECTS);

    const listEl = root.querySelector(".op-list");
    const rows = Array.from(root.querySelectorAll(".op-row"));
    const thumbs = Array.from(root.querySelectorAll(".op-thumb"));
    const label = root.querySelector(".op-pane-label");

    const isMobile = () => window.matchMedia("(max-width: 900px)").matches;

    function setActive(idx) {
      rows.forEach((r, i) => r.classList.toggle("is-active", i === idx));
      thumbs.forEach((t, i) => t.classList.toggle("is-active", i === idx));
      if (label) {
        label.textContent = PROJECTS[idx].meta;
        label.classList.add("is-visible");
      }
    }

    // default first project active
    setActive(0);

    rows.forEach((row, i) => {
      row.addEventListener("mouseenter", () => {
        if (isMobile()) return;
        setActive(i);
      });
      row.addEventListener("click", () => {
        if (isMobile()) {
          // toggle open/close on tap
          const wasActive = row.classList.contains("is-active");
          rows.forEach((r) => r.classList.remove("is-active"));
          if (!wasActive) row.classList.add("is-active");
        }
      });
    });

    if (listEl) {
      listEl.addEventListener("mouseenter", () => {
        if (isMobile()) return;
        listEl.classList.add("is-hovering");
      });
      listEl.addEventListener("mouseleave", () => {
        listEl.classList.remove("is-hovering");
        // return to first project as resting state
        setActive(0);
      });
    }

    // Entrance stagger via IntersectionObserver
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            rows.forEach((r, i) => {
              setTimeout(() => r.classList.add("is-in"), i * 90);
            });
            io.disconnect();
          });
        },
        { threshold: 0.15 }
      );
      io.observe(root);
    } else {
      rows.forEach((r) => r.classList.add("is-in"));
    }
  }

  function renderHTML(projects) {
    const rows = projects
      .map(
        (p, i) => `
      <li class="op-row" data-idx="${i}">
        <div class="op-row-head">
          <span class="op-row-num">${escape(p.num)}</span>
          <h3 class="op-row-title">${escape(p.title)}</h3>
          <span class="op-row-meta">${escape(p.meta)}</span>
        </div>
        <div class="op-mobile-thumb" style="background-image:url('${escapeAttr(
          p.thumb
        )}')"></div>
      </li>`
      )
      .join("");

    const thumbs = projects
      .map(
        (p, i) => `
      <div class="op-thumb${i === 0 ? " is-active" : ""}"
           data-idx="${i}"
           style="background-image:url('${escapeAttr(p.thumb)}')"></div>`
      )
      .join("");

    return `
      <div class="op-layout">
        <ol class="op-list">${rows}</ol>
        <div class="op-pane">
          ${thumbs}
          <span class="op-pane-label is-visible">${escape(projects[0].meta)}</span>
        </div>
      </div>
    `;
  }

  function escape(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
  function escapeAttr(s) {
    return String(s).replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
