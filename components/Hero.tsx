"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring, useScroll, useTransform } from "framer-motion";
import { FiArrowDownRight } from "react-icons/fi";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Parallax effect on scroll
    const nameY = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -60]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div
            ref={containerRef}
            className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-end min-h-screen relative z-10 pb-12 md:pb-20"
        >
            {/* Background watermark */}
            <motion.div
                style={{ y: nameY, opacity }}
                className="absolute top-[15%] -left-[5%] text-[28vw] font-display font-black text-stroke leading-none select-none pointer-events-none hidden md:block"
            >
                JOB
            </motion.div>

            {/* Top badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-32 md:top-40 right-6 md:right-12"
            >
                <div className="flex items-center gap-3 text-neutral-500 font-mono text-xs uppercase tracking-[0.2em]">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    Available for work
                </div>
            </motion.div>

            {/* Main content — pushed to bottom */}
            <div className="flex flex-col gap-8 md:gap-12 w-full">

                {/* Massive name */}
                <motion.div
                    style={{ y: nameY }}
                    className="overflow-hidden"
                >
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-display text-[14vw] md:text-[9vw] font-black tracking-[-0.04em] text-primary leading-[0.85] uppercase"
                    >
                        Jeremiah
                    </motion.h1>
                </motion.div>

                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                    {/* Last name — offset */}
                    <motion.div
                        style={{ y: subtitleY }}
                        className="overflow-hidden md:ml-[8vw]"
                    >
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: "0%" }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display text-[14vw] md:text-[9vw] font-black tracking-[-0.04em] leading-[0.85] uppercase text-neutral-700 italic"
                        >
                            Opoku-B.
                        </motion.h1>
                    </motion.div>

                    {/* Right-aligned descriptor */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-md md:text-right md:pb-4"
                    >
                        <p className="font-sans text-lg md:text-xl text-neutral-400 leading-relaxed font-light">
                            Crafting <span className="text-primary font-medium">native-quality</span> digital
                            products through <span className="sketch-highlight font-medium">ruthless simplicity</span> and
                            obsessive engineering.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom row — role + CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-col md:flex-row items-start md:items-end justify-between pt-8 md:pt-12 border-t border-white/10 gap-8"
                >
                    <div className="flex flex-col gap-1">
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">Role</span>
                        <span className="font-display text-xl md:text-2xl font-bold text-primary/80 uppercase tracking-tight">
                            Senior Mobile Architect
                        </span>
                    </div>

                    <MagneticButton>
                        <a
                            href="#projects"
                            className="group relative flex items-center gap-4 px-8 py-4 bg-accent text-secondary font-display font-bold text-base uppercase tracking-[0.1em] overflow-hidden interactive"
                        >
                            <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-8">
                                See my work
                            </span>
                            <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0 font-bold z-10">
                                See my work
                            </span>
                            <FiArrowDownRight className="relative z-10 text-lg" />

                            {/* Sweep */}
                            <div className="absolute inset-0 bg-primary -translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 z-0" />
                        </a>
                    </MagneticButton>
                </motion.div>
            </div>
        </div>
    );
}

function MagneticButton({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.25, y: middleY * 0.25 });
    };

    const reset = () => setPosition({ x: 0, y: 0 });

    const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
    const smoothX = useSpring(position.x, springConfig);
    const smoothY = useSpring(position.y, springConfig);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            style={{ x: smoothX, y: smoothY }}
            className="p-6 -m-6"
        >
            {children}
        </motion.div>
    );
}
