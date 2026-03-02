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
    },
    {
        role: "Flutter Developer",
        company: "AppStudio Solutions",
        period: "2021 — 2023",
        description: "Developed and published 5+ high-performance cross-platform applications. Mentored junior developers and established internal UI/UX standards.",
        tech: ["Flutter", "Provider", "REST APIs", "Figma"],
    },
    {
        role: "Frontend Engineer",
        company: "Creative Labs",
        period: "2019 — 2021",
        description: "Built responsive web applications using React and Next.js. Improved core web vitals and implemented complex state management with Redux.",
        tech: ["React.js", "Redux", "TailwindCSS", "Node.js"],
    },
];

export default function Experience() {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-32 md:py-48 relative z-10 overflow-hidden">

            {/* Section Label */}
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

            {/* Experience Entries */}
            <div className="flex flex-col">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                        className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-12 md:py-16 border-b border-neutral-800/60 hover:border-accent/30 transition-colors duration-500"
                    >
                        {/* Period */}
                        <div className="md:col-span-2">
                            <span className="font-mono text-xs text-neutral-600 group-hover:text-accent transition-colors uppercase tracking-widest">
                                {exp.period}
                            </span>
                        </div>

                        {/* Role + Company */}
                        <div className="md:col-span-4 flex flex-col gap-1">
                            <h3 className="font-display text-xl md:text-2xl font-bold text-primary tracking-tight group-hover:text-accent transition-colors duration-300">
                                {exp.role}
                            </h3>
                            <span className="font-sans text-sm text-neutral-500">
                                {exp.company}
                            </span>
                        </div>

                        {/* Description */}
                        <div className="md:col-span-4">
                            <p className="text-neutral-400 text-base font-light leading-relaxed">
                                {exp.description}
                            </p>
                        </div>

                        {/* Tech Stack */}
                        <div className="md:col-span-2 flex flex-wrap gap-2">
                            {exp.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    className="font-mono text-[10px] text-neutral-600 uppercase tracking-wider px-2.5 py-1 border border-neutral-800/50 group-hover:border-neutral-700 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
