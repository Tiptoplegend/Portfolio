"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TerminalLoader from "@/components/TerminalLoader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import AnimatedBackground from "@/components/AnimatedBackground";
import VelocityMarquee from "@/components/VelocityMarquee";

export default function Home() {
  const [showTerminal, setShowTerminal] = useState(true);

  useEffect(() => {
    if (showTerminal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showTerminal]);

  return (
    <main className="min-h-screen bg-background relative scroll-smooth overflow-hidden text-foreground">
      <AnimatedBackground />

      <AnimatePresence mode="wait">
        {showTerminal && (
          <TerminalLoader key="terminal" onComplete={() => setShowTerminal(false)} />
        )}
      </AnimatePresence>

      {!showTerminal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col min-h-screen relative z-10"
        >
          <Navbar />

          {/* Hero */}
          <section id="hero" className="w-full relative min-h-screen flex items-center">
            <Hero />
          </section>

          {/* Interactive Velocity Marquee */}
          <VelocityMarquee baseVelocity={-2}>
            <span>Flutter Architect</span>
            <span className="text-accent">◆</span>
            <span>Mobile Engineer</span>
            <span className="text-accent">◆</span>
            <span>React Developer</span>
            <span className="text-accent">◆</span>
            <span>UI/UX Obsessive</span>
            <span className="text-accent">◆</span>
            <span>Product Thinker</span>
            <span className="text-accent">◆</span>
            <span>Dart Specialist</span>
            <span className="text-accent">◆</span>
          </VelocityMarquee>

          {/* About */}
          <section id="about" className="w-full relative">
            <About />
          </section>

          {/* Projects */}
          <section id="projects" className="w-full relative">
            <Projects />
          </section>

          {/* Experience */}
          <section id="experience" className="w-full relative">
            <Experience />
          </section>

          {/* Contact / Footer */}
          <section id="contact" className="w-full relative">
            <Contact />
          </section>
        </motion.div>
      )}
    </main>
  );
}
