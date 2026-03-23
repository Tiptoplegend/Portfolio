"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        role: "Senior Mobile Architect",
        company: "TechNova Inc.",
        period: "2023 — Present",
        description: "Spearheading the migration of two flagship native apps to Flutter, cutting development cycles by 40%. Architected a scalable micro-frontend system using Riverpod.",
        tech: ["Flutter", "Dart", "Firebase", "Riverpod"],
        colSpan: "col-span-1 md:col-span-2",
    },
    {
        role: "Flutter Developer",
        company: "AppStudio Solutions",
        period: "2021 — 2023",
        description: "Developed and published 5+ high-performance cross-platform applications. Mentored junior developers and established internal UI/UX standards.",
        tech: ["Flutter", "Provider", "REST APIs", "Figma"],
        colSpan: "col-span-1 md:col-span-1",
    },
    {
        role: "Frontend Engineer",
        company: "Creative Labs",
        period: "2019 — 2021",
        description: "Built responsive web applications using React and Next.js. Improved core web vitals and implemented complex state management with Redux.",
        tech: ["React.js", "Redux", "TailwindCSS", "Node.js"],
        colSpan: "col-span-1 md:col-span-3",
    },
];

export default function Experience() {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-32 md:py-48 relative z-10 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-4 mb-20 md:mb-32"
            >
                <span className="font-mono text-xs text-accent uppercase tracking-[0.3em]">03</span>
                <div className="w-16 h-[1px] bg-accent" />
                <span className="font-mono text-xs text-neutral-500 uppercase tracking-[0.2em]">Experience</span>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                        className={`group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-neutral-900/40 backdrop-blur-xl border border-white/5 p-8 md:p-10 hover:border-accent/30 hover:bg-neutral-900/60 transition-all duration-500 interactive ${exp.colSpan}`}
                    >
                        <div className="absolute inset-0 noise-bg opacity-[0.03] mix-blend-overlay pointer-events-none" />

                        <div className="relative z-10 flex flex-col gap-6 h-full">
                            <div className="flex justify-between items-start">
                                <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest bg-neutral-800/50 px-4 py-2 rounded-full border border-white/5 group-hover:bg-accent/10 group-hover:text-accent group-hover:border-accent/20 transition-all">
                                    {exp.period}
                                </span>
                            </div>

                            <div className="flex flex-col gap-2 mt-auto">
                                <h3 className="font-display text-3xl md:text-4xl font-bold text-primary tracking-tight">
                                    {exp.role}
                                </h3>
                                <span className="font-sans text-lg text-neutral-400 font-medium">
                                    {exp.company}
                                </span>
                                <p className="text-neutral-500 text-sm md:text-base font-light leading-relaxed mt-4 max-w-2xl">
                                    {exp.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5">
                                {exp.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest px-3 py-1.5 border border-white/5 rounded-full backdrop-blur-md group-hover:border-white/10 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
