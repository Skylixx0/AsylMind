"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useWindowWidth } from "@/src/components/utils/useWindowWidth";
import { FadeInSection } from "@/src/components/utils/FadeInSection";

export const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const width = useWindowWidth();

  useEffect(()=>{
    setMounted(true);
  }, [])
  
  const imageSize = width <= 768 ? 200 : 350;
  
  return (
    <div
      className="container mx-auto px-6 flex pt-30 md:pt-0 items-center h-screen"
    >
      <div className={` flex mx-auto flex-col md:flex-row items-center px-3 md:justify-evenly mb-40 gap-3 lg:gap-0 lg:px-0`}>
        <div className={`md:w-1/2 space-y-6 text-center md:text-left ${mounted ? "fade-in-start" : ""}`}>
          <FadeInSection>
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
          </FadeInSection>
          <FadeInSection>
            <p className="max-w-2xl text-lg text-black leading-relaxed">
              Веди учёт, обучайся, строй цели и управляй деньгами так, чтобы обрести финансовую ясность и уверенность в своих решениях. AsylMind — твой путь к зрелому и свободному отношению к деньгам.
            </p>
          </FadeInSection>
          <div className="flex gap-4 mt-2 justify-center">
            {/* <Link href="/"> */}
                {/* <button className= {`hover:border-transparent relative items-center overflow-hidden px-5.5 py-2.5 bg-black/80 hover:bg-black/100 transition text-lg text-white rounded-xl font-semibold cursor-pointer`}>
                    Начать
                </button> */}
              {/* </Link> */}
          </div>
        </div>
        <FadeInSection>
          <div className="flex justify-center">
            <div className="relative flex items-center justify-center">
              {/* Shadow */}
              {
                mounted && (
                  <>
                  <div className="absolute bottom-0 w-30 h-3 md:w-50 bg-black/60 rounded-full blur-md animate-shadowPulse z-0" />
                  <Image
                    src="/crypto.png"
                    alt="crypto"
                    width={imageSize}
                    height={imageSize}
                    objectFit="cover"
                    className="rounded-full mb-7 float-animation"
                  />
                  </>
                )
              }
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Hero;