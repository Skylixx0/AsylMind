"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = ({
  aboutRef,
  pricingRef,
  featureRef,
  workRef,
  heroRef,
  userState,
  isLoading,
}) => {
  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
    
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <header className="sticky top-0 backdrop-blur-sm bg-gray-50/70 z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Explore your finance today with FinMind.
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Start your saving journey</p>
        </div>
      </div>

      <div className="container py-5 mx-auto ">
        <div className="flex items-center justify-around gap-6 md:justify-between sticky top-0 px-3 lg:px-0">
          <div
            onClick={() => scrollToSection(heroRef)}
            className="flex flex-col md:flex-row items-center gap-2 font-extrabold text-1xl"
          >
            {" "}
            {/* <Image
              src="/rounded-chefAI.png"
              alt="Knife GIF"
              width={40} // Adjusted width
              height={40} // Adjusted height
              objectFit="cover"
              className="rounded-full  shadow-lg"
            /> */}
            <span className="cursor-default text-lg text-black">FinMind</span>
          </div>
          <nav className="flex flex-col md:flex-row md:justify-center gap-3 md:gap-8 text-black/80 items-center">
            <div className="flex gap-6">
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="cursor-pointer hover:text-black"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection(featureRef)}
                className="cursor-pointer hover:text-black"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection(workRef)}
                className="cursor-pointer hover:text-black"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection(pricingRef)}
                className="cursor-pointer hover:text-black"
              >
                Pricing
              </button>
            </div>

            <div className="">
              <Link href="/">
                <button onMouseOver={()=>setIsAnimating(true)} onMouseOut={()=>setIsAnimating(false)} className={`${isAnimating && "shadow-2xl"} relative items-center overflow-hidden px-4 py-2 bg-black/80 text-white rounded-lg font-semibold cursor-pointer`}>
                    <span className={`absolute inset-0 bg-emerald-700 scale-x-0 origin-center ${isAnimating && 'transform scale-x-125 transition-transform duration-500 '}`}></span>
                    <span className="relative z-10">Get Started</span>
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;