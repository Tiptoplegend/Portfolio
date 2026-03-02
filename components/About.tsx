"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-32 md:py-48 relative z-10 overflow-hidden">

            {/* Massive background watermark */}
            <div className="absolute top-16 right-0 text-[22vw] font-display font-black text-stroke leading-none select-none pointer-events-none hidden md:block">
                ABOUT
            </div>

            <div className="flex flex-col gap-24 md:gap-40 w-full relative">

                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-4"
                >
                    <span className="font-mono text-xs text-accent uppercase tracking-[0.3em]">01</span>
                    <div className="w-16 h-[1px] bg-accent" />
                    <span className="font-mono text-xs text-neutral-500 uppercase tracking-[0.2em]">About</span>
                </motion.div>

                {/* Giant Pull-Quote — Magazine Style */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full md:w-5/6 lg:w-4/5"
                >
                    <p className="font-display text-[7vw] md:text-[3.5vw] lg:text-[3vw] leading-[1.1] text-primary font-bold tracking-tight">
                        I build software that people{" "}
                        <span className="italic text-neutral-600 font-normal">actually</span>{" "}
                        want to use — obsessing over every{" "}
                        <span className="sketch-highlight pb-1">pixel</span>,{" "}
                        every transition, every micro-second of perceived performance.
                    </p>
                </motion.div>

                {/* Two-Column Body */}
                <div className="flex flex-col md:flex-row gap-16 md:gap-24 w-full items-start">

                    {/* Left: Polaroid Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, rotate: -3 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full md:w-2/5 shrink-0 relative"
                    >
                        <div className="bg-[#141414] p-4 pb-16 hover:rotate-0 transition-transform duration-700 shadow-2xl relative group">
                            <div className="aspect-[4/5] bg-[#0a0a0a] border border-neutral-800 flex items-center justify-center relative overflow-hidden">
                                {/* Grainy photo placeholder */}
                                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" />
                                <div className="relative text-neutral-600 font-mono text-xs tracking-widest uppercase">
                                    [ Portrait ]
                                </div>
                                {/* Grayscale to color on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-accent/10 via-transparent to-accent/5" />
                            </div>
                            <div className="absolute bottom-5 left-5 font-display text-neutral-500 text-lg font-bold tracking-tight">
                                EST. 2018
                            </div>
                            <div className="absolute bottom-5 right-5 font-mono text-[10px] text-neutral-600 tracking-widest">
                                ACCRA, GH
                            </div>
                        </div>

                        {/* Hand-drawn arrow annotation */}
                        <svg className="absolute -right-16 -bottom-8 w-28 hidden md:block text-accent opacity-60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 80 Q 30 20 80 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" strokeDasharray="4 4" />
                            <path d="M65 18 L 82 30 L 70 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>
                    </motion.div>

                    {/* Right: Body Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full md:w-3/5 flex flex-col gap-8 font-sans text-lg md:text-xl text-neutral-400 font-light leading-[1.8]"
                    >
                        <p>
                            I specialize in architecting high-performance, cross-platform mobile products using{" "}
                            <strong className="text-primary font-semibold">Flutter</strong> and{" "}
                            <strong className="text-primary font-semibold">Dart</strong>. The nuances
                            matter to me — the micro-interactions, the render performance, the absolute
                            perfection of a native feel.
                        </p>
                        <p>
                            I don&apos;t ship features. I ship <em className="text-primary italic">experiences</em>. If a screen feels sluggish
                            or a transition feels unnatural, it gets rewritten until it feels{" "}
                            <span className="text-accent font-medium">fundamentally unbreakable</span>.
                        </p>

                        {/* Stats row */}
                        <div className="grid grid-cols-3 gap-8 mt-8 pt-8 border-t border-white/5">
                            {[
                                { value: "5+", label: "Years" },
                                { value: "20+", label: "Projects" },
                                { value: "99%", label: "Obsession" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                    className="flex flex-col"
                                >
                                    <span className="font-display text-3xl md:text-4xl font-black text-primary tracking-tight">
                                        {stat.value}
                                    </span>
                                    <span className="font-mono text-[10px] text-neutral-600 uppercase tracking-[0.2em] mt-1">
                                        {stat.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
