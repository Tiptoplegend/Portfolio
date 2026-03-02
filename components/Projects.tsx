"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
    {
        title: "EcoTrack",
        type: "Flutter · Mobile",
        year: "2025",
        description: "Carbon footprint tracker with real-time analytics and gamified sustainability goals.",
        color: "#22c55e",
    },
    {
        title: "FinanceFlow",
        type: "FinTech · Enterprise",
        year: "2024",
        description: "AI-powered budgeting tool with receipt scanning and secure bank integrations.",
        color: "#3b82f6",
    },
    {
        title: "HealthSync",
        type: "React · Dashboard",
        year: "2023",
        description: "Patient portal for remote health monitoring connected to Apple HealthKit.",
        color: "#a855f7",
    },
    {
        title: "ShopLocal",
        type: "Flutter · E-Commerce",
        year: "2023",
        description: "Hyperlocal marketplace connecting small businesses with nearby customers.",
        color: "#f97316",
    },
];

export default function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const springX = useSpring(0, { stiffness: 150, damping: 25 });
    const springY = useSpring(0, { stiffness: 150, damping: 25 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (hoveredIndex !== null) {
                springX.set(e.clientX - 160);
                springY.set(e.clientY - 200);
            }
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [hoveredIndex, springX, springY]);

    return (
        <div ref={containerRef} className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-32 md:py-48 relative z-10">

            {/* Section Header */}
            <div className="flex flex-col gap-8 mb-20 md:mb-32">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-4"
                >
                    <span className="font-mono text-xs text-accent uppercase tracking-[0.3em]">02</span>
                    <div className="w-16 h-[1px] bg-accent" />
                    <span className="font-mono text-xs text-neutral-500 uppercase tracking-[0.2em]">Selected Work</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary uppercase tracking-tighter leading-[0.9]"
                >
                    Work that<br />
                    <span className="italic text-neutral-600 font-normal">speaks</span>
                </motion.h2>
            </div>

            {/* Project List */}
            <div className="flex flex-col">
                {projects.map((project, index) => (
                    <motion.a
                        key={index}
                        href="#"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.08 }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="group flex items-center justify-between py-8 md:py-10 border-b border-neutral-800/60 hover:border-accent/40 transition-all duration-500 interactive cursor-none relative overflow-hidden"
                    >
                        {/* Left: Number + Title */}
                        <div className="flex items-baseline gap-4 md:gap-8 relative z-10">
                            <span className="font-mono text-xs text-neutral-600 group-hover:text-accent transition-colors duration-300">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-400 group-hover:text-primary transition-all duration-500 tracking-tight group-hover:tracking-normal">
                                {project.title}
                            </h3>
                        </div>

                        {/* Right: Type + Year + Arrow */}
                        <div className="flex items-center gap-4 md:gap-8 relative z-10">
                            <span className="hidden md:block font-mono text-xs text-neutral-600 uppercase tracking-widest group-hover:text-neutral-400 transition-colors">
                                {project.type}
                            </span>
                            <span className="font-mono text-sm text-neutral-600 group-hover:text-accent transition-colors">
                                {project.year}
                            </span>
                            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-neutral-800 group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                                <FiArrowUpRight className="text-neutral-600 group-hover:text-secondary transition-colors" size={18} />
                            </div>
                        </div>

                        {/* Hover background sweep */}
                        <div className="absolute inset-0 bg-neutral-900/50 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] -z-10" />

                        {/* Left accent bar on hover */}
                        <div
                            className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"
                            style={{ backgroundColor: project.color }}
                        />
                    </motion.a>
                ))}
            </div>

            {/* Floating Image — tracks cursor on project hover (desktop only) */}
            <motion.div
                className="fixed top-0 left-0 w-72 h-80 pointer-events-none z-50 overflow-hidden hidden md:block"
                style={{
                    x: springX,
                    y: springY,
                    opacity: hoveredIndex !== null ? 1 : 0,
                    scale: hoveredIndex !== null ? 1 : 0.85,
                }}
                transition={{
                    opacity: { duration: 0.25 },
                    scale: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                }}
            >
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-all duration-500 ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                        style={{ backgroundColor: project.color }}
                    >
                        {/* Image placeholder with project aesthetic */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                            <div className="text-white/30 font-display text-3xl font-black uppercase tracking-tight">
                                {project.title}
                            </div>
                            <div className="text-white/20 font-mono text-xs tracking-widest uppercase">
                                {project.year}
                            </div>
                        </div>
                        {/* Film grain */}
                        <div className="noise-bg opacity-20" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
