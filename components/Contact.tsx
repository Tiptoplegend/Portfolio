"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const socialLinks = [
    { name: "Github", href: "https://github.com", icon: FiGithub },
    { name: "LinkedIn", href: "https://linkedin.com", icon: FiLinkedin },
    { name: "Twitter", href: "https://twitter.com", icon: FiTwitter },
];

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 30;
        const y = (e.clientY - rect.top - rect.height / 2) / 30;
        setMousePosition({ x, y });
    };

    const springX = useSpring(mousePosition.x, { stiffness: 80, damping: 25 });
    const springY = useSpring(mousePosition.y, { stiffness: 80, damping: 25 });

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
            className="w-full relative z-10 overflow-hidden bg-accent text-secondary mt-24 md:mt-32"
        >
            {/* Main CTA Area */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 min-h-[80vh] flex flex-col justify-center items-center text-center pt-24 pb-16">

                {/* Small label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-12"
                >
                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-secondary/60">
                        Got a project in mind?
                    </span>
                </motion.div>

                {/* Massive heading */}
                <motion.div style={{ x: springX, y: springY }}>
                    <a href="mailto:hello@oboatdev.com" className="group block interactive">
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display text-[16vw] md:text-[14vw] font-black leading-[0.8] tracking-tighter uppercase transition-transform duration-700 group-hover:scale-[1.03]"
                        >
                            LET&apos;S
                            <br />
                            TALK<span className="text-secondary/30">.</span>
                        </motion.h2>

                        {/* Email reveal on hover */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-8 flex items-center justify-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                        >
                            <span className="font-mono text-sm md:text-lg tracking-wider">hello@oboatdev.com</span>
                            <FiArrowUpRight className="text-lg transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.div>
                    </a>
                </motion.div>
            </div>

            {/* Footer */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-8">
                <div className="border-t border-secondary/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-secondary/50 hover:text-secondary transition-all duration-300 interactive"
                            >
                                <link.icon size={14} />
                                <span className="hidden md:inline">{link.name}</span>
                                <span className="block w-0 group-hover:w-4 h-[1px] bg-secondary transition-all duration-300" />
                            </a>
                        ))}
                    </div>

                    {/* Credits */}
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-right">
                        <span className="font-mono text-[10px] text-secondary/40 uppercase tracking-widest">
                            Designed &amp; Built by Jeremiah Opoku-Boateng
                        </span>
                        <span className="font-mono text-[10px] text-secondary/30 uppercase tracking-widest">
                            © 2026
                        </span>
                    </div>
                </div>
            </div>

            {/* Noise overlay for texture */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.12] mix-blend-multiply"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
                }}
            />
        </div>
    );
}
