"use client";

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import { CategoryPill } from '@/../devlink/CategoryPill';

export default function SwiperSlider() {
    return (
        <div style={{ padding: '2rem', background: '#f5f5f5', borderRadius: '12px', marginTop: '2rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Custom Swiper Component (Built in React)</h2>
            <p style={{ marginBottom: '2rem' }}>This slider is built locally using Swiper.js and incorporates the Webflow synced <code>CategoryPill</code> component inside the slides!</p>

            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
                style={{ height: '200px', backgroundColor: 'white', borderRadius: '8px' }}
            >
                <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                        <h3>Slide 1</h3>
                        <CategoryPill cycling="Slide 1 Tag" />
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                        <h3>Slide 2</h3>
                        <CategoryPill cycling="Slide 2 Tag" variant="Ux-design" />
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                        <h3>Slide 3</h3>
                        <CategoryPill cycling="Slide 3 Tag" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
