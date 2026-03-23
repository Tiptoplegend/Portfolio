import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import CommandPalette from "@/components/CommandPalette";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oboatdev | Premium Mobile Architect",
  description: "Senior Mobile Developer & React Architect Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground selection:bg-accent selection:text-background font-sans cursor-none`}
        suppressHydrationWarning
      >
        <SmoothScroll>
          <CustomCursor />
          <CommandPalette />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
