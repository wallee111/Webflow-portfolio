"use client";

import { Nav } from "@devlink/Nav";
import { CategoryPill } from "@devlink/CategoryPill";
import { TypcnArrowUp } from "@devlink/TypcnArrowUp";
import SwiperSlider from "@/components/SwiperSlider";
import MasonryGallery from "@/components/MasonryGallery";

export default function Home() {
  return (
    <main>
      <Nav />
      <div style={{ padding: "2rem" }}>
        <h1>Welcome to my Portfolio</h1>
        <p>This page uses components synced from Webflow.</p>

        <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
          <CategoryPill cycling="React" />
          <CategoryPill cycling="Next.js" />
          <CategoryPill cycling="Webflow" variant="Ux-design" />
          <div style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e0e0e0', borderRadius: '50%' }}>
            <TypcnArrowUp />
          </div>
        </div>

        <SwiperSlider />
        <MasonryGallery />
      </div>
    </main>
  );
}
