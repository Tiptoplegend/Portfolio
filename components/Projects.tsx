"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
    {
        title: "FinTrack",
        type: "FinTech · Enterprise",
        year: "2025",
        description: "A comprehensive financial management platform that helps users track their income, expenses, and investments.",
        color: "#22c55e",
    },
    {
        title: "Paynvio",
        type: "Invoicing · Mobile",
        year: "2024",
        description: "An invoicing platform for freelancers and small businesses.",
        color: "#3b82f6",
    },
    {
        title: "Mindease",
        type: "Mental Health · Mobile",
        year: "2023",
        description: "A mental health app that provides users with tools to manage their mental health.",
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

function TiltCard({ project, index }: { project: any, index: number }) {
    const ref = useRef<HTMLAnchorElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
    const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);
    const background = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.2) 0%, transparent 60%)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.a
            href="#"
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative h-[450px] md:h-[500px] rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/5 flex flex-col justify-end p-8 md:p-10 interactive"
        >
            {/* Ambient Background Color */}
            <div 
                className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle at bottom right, ${project.color} 0%, transparent 70%)` }}
            />

            {/* Dynamic Glare */}
            <motion.div
                className="absolute inset-0 pointer-events-none z-20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background }}
            />

            {/* Giant Title Backdrop */}
            <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[9vw] md:text-8xl text-white/5 font-black uppercase tracking-tighter whitespace-nowrap pointer-events-none" 
                style={{ transform: "translateZ(-20px) translateX(-50%) translateY(-50%)" }}
            >
                {project.title}
            </div>

            {/* Content Container */}
            <div 
                className="relative z-10 flex flex-col gap-6"
                style={{ transform: "translateZ(50px)" }}
            >
                <div className="flex items-center justify-between">
                    <span className="font-mono text-sm tracking-widest uppercase text-neutral-400 group-hover:text-white transition-colors">
                        {project.type}
                    </span>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all duration-300">
                        <FiArrowUpRight size={20} />
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="font-display text-4xl md:text-5xl font-black text-white tracking-tighter">
                        {project.title}
                    </h3>
                    <p className="text-neutral-400 font-sans text-base max-w-sm line-clamp-2">
                        {project.description}
                    </p>
                </div>
            </div>
            {/* Film grain layer */}
            <div className="noise-bg opacity-[0.03] pointer-events-none absolute inset-0 mix-blend-overlay" />
        </motion.a>
    );
}

export default function Projects() {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-32 md:py-48 relative z-10 perspective-1000">
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

            {/* Grid of Tilt Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12" style={{ perspective: "1500px" }}>
                {projects.map((project, index) => (
                    <div key={index} className={index % 2 !== 0 ? "md:mt-24" : "md:mb-24"}>
                        <TiltCard project={project} index={index} />
                    </div>
                ))}
            </div>
        </div>
    );
}
