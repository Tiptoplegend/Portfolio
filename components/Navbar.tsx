"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#projects" },
    { name: "Experience", href: "#experience" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"}`}
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="font-display font-extrabold text-2xl tracking-tighter group interactive">
                    <span className="text-primary group-hover:text-accent transition-colors duration-300">J</span>
                    <span className="text-primary/40 group-hover:text-primary transition-colors duration-300">OB</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link, i) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative text-sm font-medium text-neutral-500 hover:text-primary transition-colors duration-300 uppercase tracking-[0.15em] group interactive"
                        >
                            <span className="text-accent/60 text-[10px] mr-1 font-mono">0{i + 1}</span>
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full" />
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="ml-4 px-6 py-2.5 text-sm font-bold uppercase tracking-[0.15em] bg-accent text-secondary hover:bg-primary hover:text-secondary transition-all duration-300 interactive"
                    >
                        Let&apos;s Talk
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden text-primary active:scale-95 transition-transform interactive"
                >
                    <div className="flex flex-col gap-1.5 w-7">
                        <motion.div
                            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                            className="h-[2px] bg-primary origin-center"
                        />
                        <motion.div
                            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="h-[2px] bg-primary"
                        />
                        <motion.div
                            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                            className="h-[2px] bg-primary origin-center"
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-white/5"
            >
                <div className="flex flex-col px-6 py-8 gap-6">
                    {navLinks.map((link, i) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-2xl font-display font-bold text-primary/60 hover:text-primary transition-colors uppercase tracking-tight interactive"
                        >
                            <span className="text-accent text-sm font-mono mr-3">0{i + 1}</span>
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setMobileOpen(false)}
                        className="mt-4 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.15em] bg-accent text-secondary interactive"
                    >
                        Let&apos;s Talk
                    </a>
                </div>
            </motion.div>
        </motion.header>
    );
}
