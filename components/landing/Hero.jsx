"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(()=>{
    setMounted(true);
  }, []);

  const heroRef = useRef(null);
  return (
    <div
      ref={heroRef}
      className="container mx-auto px-6 flex items-center h-screen"
    >
      <div className={`flex flex-col md:flex-row items-center justify-center mb-40 gap-2 md:gap-10 w-full`}>
        <div className={`md:w-1/1 space-y-6 flex flex-col text-center md:text-center ${mounted ? "fade-in-start" : ""}`}>
          <h1 className="font-bold text-4xl text-center md:text-6xl tracking-tight bg-gradient-to-b from-black/100 to-black/100 text-transparent bg-clip-text pb-2">
              <div>Управляйте своими</div>
              <div className="">
                <span className="seamless-gradient-text">деньгами </span>
                <span>с уверенностью</span>
              </div>
          </h1>
          <p className="max-w-2xl text-lg text-center text-black leading-relaxed mx-auto">
            FinMind поможет вам ставить цели, экономить разумнее и понимать свои финансы — даже если вы только начинаете.
          </p>
          <div className="flex gap-4 mt-2 justify-center">
            <Link href="/">
                <button className= {`hover:border-transparent relative items-center overflow-hidden px-5.5 py-2.5 bg-black/80 hover:bg-black/100 transition text-lg text-white rounded-xl font-semibold cursor-pointer`}>
                    Начать
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