"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useWindowWidth } from "@/components/utils/useWindowWidth";

export const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const width = useWindowWidth();

  useEffect(()=>{
    setMounted(true);
  }, [])
  
  const imageSize = width <= 768 ? 200 : 350;
  
  const heroRef = useRef(null);
  return (
    <div
      ref={heroRef}
      className="container mx-auto px-6 flex items-center h-screen"
    >
      <div className={` flex mx-auto flex-col md:flex-row items-center px-3 md:justify-evenly mb-40 gap-2 lg:px-0`}>
        <div className={`md:w-1/2 space-y-6 text-center md:text-left ${mounted ? "fade-in-start" : ""}`}>
          <h1 className="font-bold text-4xl text-center md:text-left md:text-6xl tracking-tight bg-gradient-to-b from-black/100 to-black/100 text-emerald-600 bg-clip-text pb-2">
              {/* <div>Управляйте своими</div>
              <div className="">
                <span className="seamless-gradient-text">деньгами </span>
                <span>с уверенностью</span>
              </div> */}
              Управляй.
              Копи.
              Добивайся.
          </h1>
          <p className="max-w-2xl text-lg text-black leading-relaxed">
            Веди учёт, обучайся, строй цели и управляй деньгами так, чтобы обрести финансовую ясность и уверенность в своих решениях. FinQadam — твой путь к зрелому и свободному отношению к деньгам.
          </p>
          <div className="flex gap-4 mt-2 justify-center">
            {/* <Link href="/"> */}
                {/* <button className= {`hover:border-transparent relative items-center overflow-hidden px-5.5 py-2.5 bg-black/80 hover:bg-black/100 transition text-lg text-white rounded-xl font-semibold cursor-pointer`}>
                    Начать
                </button> */}
              {/* </Link> */}
          </div>
        </div>

        <div className="flex justify-center">
          {
            mounted && (
              <Image
                src="/crypto.png"
                alt="crypto"
                width={imageSize}
                height={imageSize}
                objectFit="cover"
                className="fade-in-start"
              />
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Hero;