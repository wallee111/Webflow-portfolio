"use client";

import React from 'react';
import { MasonryPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/masonry.css';

// Generate some dummy photos with varying aspect ratios for a true masonry look
const photos = [
    { src: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=800&auto=format&fit=crop", width: 800, height: 600 }, // Landscape
    { src: "https://images.unsplash.com/photo-1542314831-c6a4d14cd511?q=80&w=800&auto=format&fit=crop", width: 800, height: 1200 }, // Portrait
    { src: "https://images.unsplash.com/photo-1540573133985-87b6ba6d5425?q=80&w=800&auto=format&fit=crop", width: 800, height: 800 }, // Square
    { src: "https://images.unsplash.com/photo-1533038590840-1c798b3353ee?q=80&w=800&auto=format&fit=crop", width: 800, height: 1000 }, // Portrait
    { src: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800&auto=format&fit=crop", width: 800, height: 533 }, // Landscape
    { src: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=800&auto=format&fit=crop", width: 800, height: 1200 }, // Portrait
    { src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=800&auto=format&fit=crop", width: 800, height: 600 }, // Landscape
];

export default function MasonryGallery() {
    return (
        <div style={{ padding: '2rem', background: '#f5f5f5', borderRadius: '12px', marginTop: '2rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>True Masonry Gallery</h2>
            <p style={{ marginBottom: '2rem' }}>Built with <code>react-photo-album</code> to ensure mathematically perfect vertical cascades regardless of image dimensions.</p>

            <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px' }}>
                <MasonryPhotoAlbum
                    photos={photos}
                    columns={(containerWidth) => {
                        if (containerWidth < 400) return 1;
                        if (containerWidth < 800) return 2;
                        return 3;
                    }}
                    spacing={16}
                />
            </div>
        </div>
    );
}
