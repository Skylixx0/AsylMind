"use client";

import { useRef } from "react";
import Link from "next/link";

export const Hero = () => {
  const heroRef = useRef(null);

  return (
    <div
      ref={heroRef}
      className="container mx-auto px-6 flex items-center h-screen"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-10 w-full">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="font-bold text-4xl md:text-6xl tracking-tight bg-gradient-to-b from-black/100 to-black/100 text-transparent bg-clip-text pb-2">
            Master your money with confidence
          </h1>
          <p className="text-lg md:text-xl text-black leading-relaxed">
            FinMind helps you set goals, save smarter, and understand your money — even if you're just getting started.
          </p>
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <Link passHref href="/chat-app">
              <button className="px-6 py-3 bg-green-800 text-white rounded-lg shadow-lg hover:bg-green-900 transition font-semibold cursor-pointer">
                Get Started
              </button>
            </Link>
            <Link passHref href="/">
              <button className="px-6 py-3 text-green-900 border-2 border-green-700 hover:border-transparent rounded-lg hover:bg-green-900 hover:text-white transition font-semibold cursor-pointer">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* <div className="md:w-1/2 flex justify-center">
          <Image
            src={Water.src}
            alt="water"
            width={600}
            height={600}
            objectFit="cover"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;