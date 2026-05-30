"use client";

import { useState } from "react";

interface RoomImageGalleryProps {
  title: string;
  images: string[];
}

export const RoomImageGallery = ({ title, images }: RoomImageGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = images[activeIndex] ?? images[0];

  const move = (step: number) => {
    const nextIndex = (activeIndex + step + images.length) % images.length;
    setActiveIndex(nextIndex);
  };

  return (
    <section className="space-y-3">
      <div className="relative overflow-hidden rounded-2xl">
        <img src={current} alt={title} className="h-[300px] w-full object-cover md:h-[460px]" />
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button type="button" onClick={() => move(-1)} className="rounded-full bg-white/95 px-3 py-1 text-sm font-semibold">
            Prev
          </button>
          <button type="button" onClick={() => move(1)} className="rounded-full bg-white/95 px-3 py-1 text-sm font-semibold">
            Next
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.slice(0, 4).map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`overflow-hidden rounded-xl border ${
              activeIndex === index
                ? "border-[var(--color-primary)]"
                : "border-[var(--color-outline-variant)]"
            }`}
          >
            <img src={image} alt={`${title} ${index + 1}`} className="h-20 w-full object-cover" />
          </button>
        ))}
      </div>
    </section>
  );
};
