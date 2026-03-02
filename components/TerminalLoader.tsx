"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const terminalSteps = [
    { text: "Resolving dependencies...", delay: 800 },
    { text: "Got dependencies!", delay: 1500 },
    { text: "Launching lib/main.dart on iPhone 15 Pro Max in debug mode...", delay: 2200 },
    { text: "Running Xcode build...", delay: 3500 },
    { text: "Xcode build done.                                            3.2s", delay: 5000 },
    { text: "Syncing files to device iPhone 15 Pro Max...", delay: 5500 },
    { text: "Flutter run key commands.", delay: 6000 },
    { text: "h Repeat this help message.", delay: 6100 },
    { text: "c Clear the screen", delay: 6200 },
    { text: "q Quit (terminate the application on the device).", delay: 6300 },
    { text: "An Observatory debugger and profiler on iPhone 15 Pro Max is available at: http://127.0.0.1:53123/", delay: 6800 },
    { text: "The Flutter DevTools debugger and profiler on iPhone 15 Pro Max is available at: http://127.0.0.1:9100?uri=http://127.0.0.1:53123/", delay: 7000, isSuccess: true },
];

interface TerminalLoaderProps {
    onComplete: () => void;
}

export default function TerminalLoader({ onComplete }: TerminalLoaderProps) {
    const [typedCommand, setTypedCommand] = useState("");
    const [showOutput, setShowOutput] = useState(false);
    const [visibleLines, setVisibleLines] = useState<number>(0);
    const fullCommand = "flutter run oboatdev_app";

    useEffect(() => {
        // Type out the command
        let i = 0;
        const typingInterval = setInterval(() => {
            setTypedCommand(fullCommand.slice(0, i + 1));
            i++;
            if (i === fullCommand.length) {
                clearInterval(typingInterval);
                setTimeout(() => setShowOutput(true), 400); // Small pause before output
            }
        }, 50);

        return () => clearInterval(typingInterval);
    }, [fullCommand]);

    useEffect(() => {
        if (!showOutput) return;

        // Show output lines progressively
        const timeouts = terminalSteps.map((step, index) => {
            return setTimeout(() => {
                setVisibleLines(index + 1);

                // If it's the last step, wait a beat then trigger complete
                if (index === terminalSteps.length - 1) {
                    setTimeout(onComplete, 1200);
                }
            }, step.delay);
        });

        return () => timeouts.forEach(clearTimeout);
    }, [showOutput, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-[#1e1e1e] flex items-center justify-center p-4 sm:p-8"
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="w-full max-w-4xl h-[70vh] sm:h-[60vh] bg-[#1e1e1e] md:bg-[#1e1e1e] md:border md:border-[#333] rounded-xl shadow-2xl overflow-hidden flex flex-col font-mono text-sm sm:text-base selection:bg-neutral-700">
                {/* Terminal Header */}
                <div className="h-10 bg-[#2d2d2d] flex items-center px-4 shrink-0 hidden md:flex">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="flex-1 text-center text-[#999] text-xs font-sans tracking-wide">oboatdev_app — bash — 80x24</div>
                </div>

                {/* Terminal Body */}
                <div className="p-4 sm:p-6 flex-1 overflow-y-auto w-full terminal-scrollbar">
                    <div className="text-[#cccccc] mb-2 flex items-center flex-wrap">
                        <span className="text-green-400 mr-2">jeremiahopoku-boateng@MacBook-Pro</span>
                        <span className="text-blue-400 mr-2">~/Portfolio</span>
                        <span className="text-white flex items-center">
                            $ {typedCommand}
                            {!showOutput && (
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.8 }}
                                    className="inline-block w-2.5 h-5 bg-white ml-1 align-middle"
                                />
                            )}
                        </span>
                    </div>

                    {showOutput && (
                        <div className="flex flex-col gap-1.5 mt-4">
                            {terminalSteps.slice(0, visibleLines).map((line, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.1 }}
                                    className={`${line.isSuccess ? "text-green-400" : "text-[#cccccc]"}`}
                                >
                                    {line.text}
                                </motion.div>
                            ))}
                            {visibleLines < terminalSteps.length && (
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.8 }}
                                    className="inline-block w-2.5 h-5 bg-white mt-2"
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
