"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, animate, useReducedMotion } from "framer-motion";

interface Photo {
  src: string;
  alt: string;
}

export default function PhotoMarquee({
  photos,
  speed = 48,
}: {
  photos: Photo[];
  speed?: number;
}) {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const playback = useRef<ReturnType<typeof animate> | null>(null);

  useEffect(() => {
    if (reduce) return;

    const id = setTimeout(() => {
      if (!trackRef.current) return;
      const halfWidth = trackRef.current.scrollWidth / 2;
      if (halfWidth <= 0) return;

      playback.current = animate(x, [0, -halfWidth], {
        ease: "linear",
        duration: halfWidth / speed,
        repeat: Infinity,
        repeatType: "loop",
      });
    }, 80);

    return () => {
      clearTimeout(id);
      playback.current?.stop();
    };
  }, [reduce, speed, x]);

  /* Reduced-motion: simple static grid */
  if (reduce) {
    return (
      <div className="container-px grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
        {photos.map((p) => (
          <div key={p.src} className="aspect-[3/4] overflow-hidden bg-steel-100">
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    );
  }

  const doubled = [...photos, ...photos];

  return (
    <div
      className="overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]"
      onMouseEnter={() => playback.current?.pause()}
      onMouseLeave={() => playback.current?.play()}
    >
      <motion.div
        ref={trackRef}
        style={{ x }}
        className="flex w-max gap-3 px-3"
      >
        {doubled.map((p, i) => (
          <div
            key={`${p.src}-${i}`}
            className="relative aspect-[3/4] w-[260px] flex-shrink-0 overflow-hidden bg-steel-100 md:w-[300px]"
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
