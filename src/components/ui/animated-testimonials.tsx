"use client";

import {
  motion,
  useAnimation,
  useInView,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Animated testimonials — adapted from the 21st.dev `animated-testimonials`
 * reference to Takka Steel's design system (navy/gold). The shadcn/radix
 * Avatar + Separator and lucide icons are replaced with lightweight inline
 * equivalents (initials avatar, inline star/quote) so no extra deps are
 * needed beyond framer-motion (already installed).
 */
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

interface AnimatedTestimonialsProps {
  title?: string;
  subtitle?: string;
  badgeText?: string;
  testimonials: Testimonial[];
  autoRotateInterval?: number;
  trustedCompanies?: string[];
  trustedCompaniesTitle?: string;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-5 w-5 fill-gold" aria-hidden="true">
          <path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 18.6 6.1 20.2l1.2-6.6L2.5 9l6.6-.9L12 2z" />
        </svg>
      ))}
    </div>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function AnimatedTestimonials({
  title = "Apa Kata Klien Kami",
  subtitle = "",
  badgeText,
  testimonials,
  autoRotateInterval = 6000,
  trustedCompanies = [],
  trustedCompaniesTitle = "",
}: AnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return;
    const id = setInterval(() => {
      setActiveIndex((c) => (c + 1) % testimonials.length);
    }, autoRotateInterval);
    return () => clearInterval(id);
  }, [autoRotateInterval, testimonials.length]);

  if (testimonials.length === 0) return null;

  return (
    <section ref={sectionRef} className="section overflow-hidden bg-steel-50">
      <div className="container-px">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20"
        >
          {/* Left: heading + dot navigation */}
          <motion.div variants={itemVariants}>
            {badgeText && <span className="eyebrow">{badgeText}</span>}
            <h2 className="h2 mt-2 text-steel-900">{title}</h2>
            {subtitle && (
              <p className="mt-4 max-w-[560px] text-steel-600 md:text-lg">{subtitle}</p>
            )}
            <div className="flex items-center gap-3 pt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-10 bg-gold"
                      : "w-2.5 bg-steel-300 hover:bg-steel-400"
                  }`}
                  aria-label={`Lihat testimoni ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: rotating testimonial cards */}
          <motion.div
            variants={itemVariants}
            className="relative min-h-[340px] md:min-h-[360px]"
          >
            {testimonials.map((t, index) => (
              <motion.div
                key={t.id}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 60 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 60,
                  scale: activeIndex === index ? 1 : 0.95,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                  zIndex: activeIndex === index ? 10 : 0,
                  pointerEvents: activeIndex === index ? "auto" : "none",
                }}
              >
                <div className="flex h-full flex-col rounded-2xl bg-gradient-to-b from-steel-900 to-steel-950 p-8 text-white shadow-xl">
                  <StarRow count={t.rating} />
                  <div className="relative mt-6 flex-1">
                    <span className="absolute -left-1 -top-5 font-heading text-6xl leading-none text-gold/25">
                      &ldquo;
                    </span>
                    <p className="relative text-lg font-medium leading-relaxed text-steel-100">
                      {t.content}
                    </p>
                  </div>
                  <div className="mt-6 h-px w-full bg-white/10" />
                  <div className="mt-5 flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/30 bg-gold/15 font-bold text-gold">
                      {getInitials(t.name)}
                    </span>
                    <div>
                      <div className="font-bold text-white">{t.name}</div>
                      <div className="text-sm text-steel-400">{t.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Decorative accents */}
            <div className="absolute -bottom-6 -left-6 -z-10 h-24 w-24 rounded-2xl bg-gold/10" />
            <div className="absolute -right-6 -top-6 -z-10 h-24 w-24 rounded-2xl bg-steel-900/5" />
          </motion.div>
        </motion.div>

        {/* Trusted partners logo cloud */}
        {trustedCompanies.length > 0 && (
          <motion.div
            initial="hidden"
            animate={controls}
            variants={itemVariants}
            className="mt-20 text-center"
          >
            {trustedCompaniesTitle && (
              <h3 className="mb-8 text-sm font-medium text-steel-500">
                {trustedCompaniesTitle}
              </h3>
            )}
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {trustedCompanies.map((c) => (
                <div key={c} className="font-heading text-xl font-bold text-steel-400">
                  {c}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
