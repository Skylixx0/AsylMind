"use client"

import {useState, useEffect} from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(()=>{
    setMounted(false);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${mounted ? "fade-in-start" : ""}`}
      >
        {children}
      </body>
    </html>
  );
}