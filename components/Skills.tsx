"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
    { name: "Flutter", level: 95, color: "bg-[#02569B]" },
    { name: "Dart", level: 90, color: "bg-[#0175C2]" },
    { name: "React / Next.js", level: 85, color: "bg-[#61DAFB]" },
    { name: "Firebase", level: 80, color: "bg-[#FFCA28]" },
    { name: "REST APIs & GraphQL", level: 85, color: "bg-purple-500" },
    { name: "UI/UX Design", level: 75, color: "bg-pink-500" },
    { name: "State Management (Riverpod, BLoC)", level: 90, color: "bg-emerald-500" },
    { name: "CI/CD & DevOps", level: 70, color: "bg-orange-500" },
];

export default function Skills() {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-16 md:mb-24 flex flex-col items-center md:items-start relative z-10"
            >
                <h2 className="font-display text-3xl md:text-5xl font-bold text-white flex items-center gap-4">
                    <span className="text-primary font-mono text-xl md:text-2xl font-normal w-12 border-b border-primary/30 pb-1">03.</span>
                    Technical Arsenal
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 relative z-10">
                <div className="flex flex-col gap-8">
                    {skills.slice(0, 4).map((skill, index) => (
                        <div key={index} className="w-full group">
                            <div className="flex justify-between items-end mb-2">
                                <span className="font-mono text-sm text-neutral-300 group-hover:text-white transition-colors">{skill.name}</span>
                                <span className="font-mono text-xs text-neutral-500 font-bold group-hover:text-primary transition-colors">{skill.level}%</span>
                            </div>
                            <div className="h-2.5 w-full bg-neutral-900 rounded-full overflow-hidden shadow-inner flex">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 1.2, delay: 0.1 + (index * 0.1), ease: "easeOut" }}
                                    className={`h-full ${skill.color} rounded-full relative overflow-hidden`}
                                >
                                    <motion.div
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "200%" }}
                                        transition={{ repeat: Infinity, duration: 2.5, ease: "linear", delay: index * 0.2 }}
                                        className="absolute inset-0 w-1/3 bg-white/30 skew-x-12"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-8">
                    {skills.slice(4).map((skill, index) => (
                        <div key={index} className="w-full group">
                            <div className="flex justify-between items-end mb-2">
                                <span className="font-mono text-sm text-neutral-300 group-hover:text-white transition-colors">{skill.name}</span>
                                <span className="font-mono text-xs text-neutral-500 font-bold group-hover:text-primary transition-colors">{skill.level}%</span>
                            </div>
                            <div className="h-2.5 w-full bg-neutral-900 rounded-full overflow-hidden shadow-inner flex">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 1.2, delay: 0.1 + (index * 0.1), ease: "easeOut" }}
                                    className={`h-full ${skill.color} rounded-full relative overflow-hidden`}
                                >
                                    <motion.div
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "200%" }}
                                        transition={{ repeat: Infinity, duration: 2.5, ease: "linear", delay: 1 + (index * 0.2) }}
                                        className="absolute inset-0 w-1/3 bg-white/30 skew-x-12"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating Decorative Elements */}
            <motion.div
                animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-[10%] text-[10rem] font-bold text-transparent pointer-events-none z-0 hidden lg:block opacity-10 blur-sm"
                style={{ WebkitTextStroke: '2px rgba(59, 130, 246, 0.8)' }}
            >
                {"{ }"}
            </motion.div>
            <motion.div
                animate={{ y: [0, 40, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-[5%] text-[12rem] font-bold text-transparent pointer-events-none z-0 hidden lg:block opacity-10 blur-sm"
                style={{ WebkitTextStroke: '2px rgba(139, 92, 246, 0.8)' }}
            >
                &lt;/&gt;
            </motion.div>
        </div>
    );
}
