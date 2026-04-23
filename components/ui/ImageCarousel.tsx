"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  label: string;
}

export function ImageCarousel({ images, label }: Props) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = () =>
    setCurrent((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrent((i) => (i + 1) % images.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const single = images.length === 1;

  return (
    <div className="my-8">
      <div
        className="relative rounded-md overflow-hidden group shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${label} screenshot ${i + 1}`}
              className="w-full shrink-0 block select-none"
              draggable={false}
            />
          ))}
        </div>

        {!single && (
          <>
            {current > 0 && (
              <button
                onClick={prev}
                aria-label="Previous image"
                className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow-sm items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150"
              >
                <ChevronLeft size={16} className="text-gray-700" />
              </button>
            )}
            {current < images.length - 1 && (
              <button
                onClick={next}
                aria-label="Next image"
                className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow-sm items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150"
              >
                <ChevronRight size={16} className="text-gray-700" />
              </button>
            )}
          </>
        )}
      </div>

      {!single && (
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-150 ${
                i === current ? "bg-gray-500" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
