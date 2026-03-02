"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [cursorLabel, setCursorLabel] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    const springX = useSpring(0, { stiffness: 500, damping: 28 });
    const springY = useSpring(0, { stiffness: 500, damping: 28 });

    const handleMouseMove = useCallback((e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);
    }, [isVisible]);

    const handleMouseOver = useCallback((e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const interactiveEl =
            target.tagName.toLowerCase() === "a" ||
            target.tagName.toLowerCase() === "button" ||
            target.closest("a") !== null ||
            target.closest("button") !== null ||
            target.classList.contains("interactive");

        setIsHovering(interactiveEl);

        // Check for cursor label data attribute
        const labelEl = target.closest("[data-cursor]") as HTMLElement | null;
        setCursorLabel(labelEl?.dataset.cursor || "");
    }, []);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [handleMouseMove, handleMouseOver]);

    useEffect(() => {
        const size = isHovering ? 32 : 10;
        springX.set(mousePosition.x - size / 2);
        springY.set(mousePosition.y - size / 2);
    }, [mousePosition, isHovering, springX, springY]);

    // Don't render on touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
        return null;
    }

    return (
        <>
            {/* Main dot */}
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: springX,
                    y: springY,
                    width: isHovering ? 32 : 10,
                    height: isHovering ? 32 : 10,
                    backgroundColor: "#ebeaec",
                    opacity: isVisible ? 1 : 0,
                }}
                animate={{
                    scale: isHovering ? 1.8 : 1,
                }}
                transition={{
                    scale: { type: "spring", stiffness: 300, damping: 20 },
                    opacity: { duration: 0.2 },
                }}
            />

            {/* Cursor label (shows on elements with data-cursor attribute) */}
            {cursorLabel && (
                <motion.div
                    className="fixed pointer-events-none z-[9999] font-mono text-[10px] uppercase tracking-[0.2em] text-primary whitespace-nowrap"
                    style={{
                        x: springX,
                        y: springY,
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: -20 }}
                    exit={{ opacity: 0 }}
                >
                    {cursorLabel}
                </motion.div>
            )}
        </>
    );
}
