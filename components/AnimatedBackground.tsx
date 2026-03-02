"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function AnimatedBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isClient, setIsClient] = useState(false);

    const springX = useSpring(0, { stiffness: 30, damping: 20 });
    const springY = useSpring(0, { stiffness: 30, damping: 20 });

    useEffect(() => {
        setIsClient(true);
        const update = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", update);
        return () => window.removeEventListener("mousemove", update);
    }, []);

    useEffect(() => {
        if (isClient) {
            springX.set(mousePosition.x);
            springY.set(mousePosition.y);
        }
    }, [mousePosition, isClient, springX, springY]);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background">

            {/* Subtle interactive spotlight — follows mouse */}
            {isClient && (
                <motion.div
                    className="absolute inset-0 z-0 opacity-30"
                    style={{
                        background: `radial-gradient(600px circle at ${springX.get()}px ${springY.get()}px, rgba(255, 51, 0, 0.04), transparent 40%)`,
                    }}
                />
            )}

            {/* Minimal dot grid — architect blueprint feel */}
            <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage: `radial-gradient(circle, #ebeaec 0.8px, transparent 0.8px)`,
                    backgroundSize: '32px 32px',
                    maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
                }}
            />

            {/* Film grain texture */}
            <div className="noise-bg" />

            {/* Vignette */}
            <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.85)]" />
        </div>
    );
}
