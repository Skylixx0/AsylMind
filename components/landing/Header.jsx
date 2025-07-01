"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = ({
  aboutRef,
  pricingRef,
  featureRef,
  workRef,
  heroRef,
  userState,
  isLoading,
  locale
}) => {
  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
    
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);

  
  useEffect(() => {
    // Wait until component mounts on client side
    setMounted(true);
  }, []);

  return (
    <header className={`sticky top-0 backdrop-blur-sm z-20 ${mounted ? 'slide-down' : ''}`}>
      <div className="flex justify-center items-center py-1.5 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Исследуй свои финансы сегодня с FinQadam.
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Начни свой путь сбережений.</p>
        </div>
      </div>

      <div className="container py-4 mx-auto">
        <div className="flex items-center justify-around gap-6 md:justify-around px-3 lg:px-0">
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
            <span className="cursor-default text-xl text-black">FinQadam</span>
          </div>
          <nav className="flex flex-col md:flex-row md:justify-center gap-3 md:gap-8 text-black/80 items-center">
            <div className="flex gap-3 md:gap-6">
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="font-semibold cursor-pointer hover:text-black text-lg"
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection(featureRef)}
                className="font-semibold cursor-pointer hover:text-black text-lg"
              >
                Функции
              </button>
              <button
                onClick={() => scrollToSection(pricingRef)}
                className="font-semibold cursor-pointer hover:text-black text-lg"
              >
                Цена
              </button>
            </div>

            <div className="">
              <Link href="/">
                <button onMouseOver={()=>setIsAnimating(true)} onMouseOut={()=>setIsAnimating(false)} className={`${isAnimating ? "shadow-2xl" : "shadow-none"} hover:border-transparent relative items-center overflow-hidden px-3.5 py-1.5 bg-black/80 text-white rounded-xl font-semibold cursor-pointer`}>
                    <span className={`absolute inset-0 bg-emerald-700 scale-0 origin-center rounded-full transition-transform duration-400 transform ${isAnimating ? 'scale-110 ' : "scale-0"}`}></span>
                    <span className="relative z-10 text-lg">Начать</span>
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