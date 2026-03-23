"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface VelocityMarqueeProps {
  children: React.ReactNode;
  baseVelocity?: number;
}

export default function VelocityMarquee({
  children,
  baseVelocity = -2,
}: VelocityMarqueeProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Change direction if scrolling up
    if (velocityFactor.get() < 0) {
      directionFactor.current = 1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = -1;
    }

    // Add speed multiplier based on scroll velocity
    moveBy += directionFactor.current * moveBy * Math.abs(velocityFactor.get());

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="w-full flex overflow-hidden whitespace-nowrap m-0 flex-nowrap bg-neutral-900/60 backdrop-blur-md border-y border-white/5 py-4 sm:py-6 relative interactive cursor-none shadow-2xl">
      <div className="absolute inset-0 noise-bg opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <motion.div
        className="flex whitespace-nowrap flex-nowrap font-mono text-sm sm:text-base uppercase tracking-[0.3em] text-neutral-500 w-max"
        style={{ x }}
      >
        <span className="flex gap-12 sm:gap-24 items-center px-6 sm:px-12">
          {children}
        </span>
        <span className="flex gap-12 sm:gap-24 items-center px-6 sm:px-12">
          {children}
        </span>
        <span className="flex gap-12 sm:gap-24 items-center px-6 sm:px-12">
          {children}
        </span>
        <span className="flex gap-12 sm:gap-24 items-center px-6 sm:px-12">
          {children}
        </span>
      </motion.div>
    </div>
  );
}
