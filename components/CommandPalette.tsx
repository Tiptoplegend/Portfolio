"use client";

import React, { useState, useEffect } from "react";
import { Command } from "cmdk";
import {
  FiHome,
  FiUser,
  FiBriefcase,
  FiMail,
  FiFileText,
  FiGithub,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setOpen(false)}
      />

      {/* Palette */}
      <Command
        className="w-full max-w-2xl bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative z-10 flex flex-col"
        label="Global Command Menu"
        shouldFilter={true}
      >
        <div className="flex items-center border-b border-white/5 px-4">
          <Command.Input
            autoFocus
            placeholder="Type a command or search..."
            className="w-full bg-transparent border-none text-white placeholder-neutral-500 font-sans text-lg focus:outline-none ring-0 py-6"
          />
        </div>

        <Command.List className="max-h-[60vh] overflow-y-auto p-2 scrollbar-hide">
          <Command.Empty className="py-12 text-center text-neutral-500 font-sans">
            No results found.
          </Command.Empty>

          {/* Navigation */}
          <Command.Group
            heading="Navigation"
            className="text-xs font-mono text-neutral-500 uppercase tracking-widest p-2"
          >
            <Command.Item
              onSelect={() =>
                runCommand(() => (window.location.href = "#hero"))
              }
              className="flex items-center gap-4 px-4 py-4 text-white hover:bg-white/10 rounded-xl cursor-pointer aria-selected:bg-white/10 transition-colors mt-2"
            >
              <FiHome className="text-xl opacity-70" />
              <span className="text-base font-sans mt-1">Home</span>
            </Command.Item>
            <Command.Item
              onSelect={() =>
                runCommand(() => (window.location.href = "#about"))
              }
              className="flex items-center gap-4 px-4 py-4 text-white hover:bg-white/10 rounded-xl cursor-pointer aria-selected:bg-white/10 transition-colors"
            >
              <FiUser className="text-xl opacity-70" />
              <span className="text-base font-sans mt-1">About Me</span>
            </Command.Item>
            <Command.Item
              onSelect={() =>
                runCommand(() => (window.location.href = "#projects"))
              }
              className="flex items-center gap-4 px-4 py-4 text-white hover:bg-white/10 rounded-xl cursor-pointer aria-selected:bg-white/10 transition-colors"
            >
              <FiBriefcase className="text-xl opacity-70" />
              <span className="text-base font-sans mt-1">Projects</span>
            </Command.Item>
            <Command.Item
              onSelect={() =>
                runCommand(() => (window.location.href = "#experience"))
              }
              className="flex items-center gap-4 px-4 py-4 text-white hover:bg-white/10 rounded-xl cursor-pointer aria-selected:bg-white/10 transition-colors"
            >
              <FiFileText className="text-xl opacity-70" />
              <span className="text-base font-sans mt-1">Experience</span>
            </Command.Item>
            <Command.Item
              onSelect={() =>
                runCommand(() => (window.location.href = "#contact"))
              }
              className="flex items-center gap-4 px-4 py-4 text-white hover:bg-white/10 rounded-xl cursor-pointer aria-selected:bg-white/10 transition-colors"
            >
              <FiMail className="text-xl opacity-70" />
              <span className="text-base font-sans mt-1">Contact</span>
            </Command.Item>
          </Command.Group>

          <Command.Separator className="h-px bg-white/5 my-4" />

          {/* Socials */}
          <Command.Group
            heading="Socials"
            className="text-xs font-mono text-neutral-500 uppercase tracking-widest p-2"
          >
            <Command.Item
              onSelect={() =>
                runCommand(() => window.open("https://github.com", "_blank"))
              }
              className="flex items-center gap-4 px-4 py-4 text-white hover:bg-white/10 rounded-xl cursor-pointer aria-selected:bg-white/10 transition-colors mt-2"
            >
              <FiGithub className="text-xl opacity-70" />
              <span className="text-base font-sans mt-1">GitHub</span>
            </Command.Item>
            <Command.Item
              onSelect={() =>
                runCommand(() => window.open("https://twitter.com", "_blank"))
              }
              className="flex items-center gap-4 px-4 py-4 text-white hover:bg-white/10 rounded-xl cursor-pointer aria-selected:bg-white/10 transition-colors"
            >
              <FiTwitter className="text-xl opacity-70" />
              <span className="text-base font-sans mt-1">Twitter</span>
            </Command.Item>
            <Command.Item
              onSelect={() =>
                runCommand(() => window.open("https://linkedin.com", "_blank"))
              }
              className="flex items-center gap-4 px-4 py-4 text-white hover:bg-white/10 rounded-xl cursor-pointer aria-selected:bg-white/10 transition-colors"
            >
              <FiLinkedin className="text-xl opacity-70" />
              <span className="text-base font-sans mt-1">LinkedIn</span>
            </Command.Item>
          </Command.Group>
        </Command.List>
        <div className="flex items-center justify-between border-t border-white/5 px-6 py-4 bg-[#0a0a0a]">
          <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500">
            Use arrows to navigate
          </span>
          <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 flex items-center gap-1">
            <kbd className="bg-white/10 px-2 py-1 rounded">esc</kbd>
            to close
          </span>
        </div>
      </Command>
    </div>
  );
}
