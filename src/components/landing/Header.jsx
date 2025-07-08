"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MobileMenu from "@/src/components/MobileMenu"
import { useTranslations } from "next-intl";

const Header = ({
  missionRef,
  pricingRef,
  featureRef,
  growthRef,
  heroRef,
}) => {

  const t = useTranslations("Home.navbar");

  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start"});
    }
  };
    
  const [isAnimating, setIsAnimating] = useState(false);
  const [mount, setMount] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [scrolledToPricing, setScrolledToPricing] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setMount(true);
    setIsClient(true);
  }, []);
  
  return (
    <header className={`sticky top-0 backdrop-blur-sm z-20 ${mount ? "slide-down" : ""}`}>
        <div className="flex justify-center items-center py-1.5 bg-black text-white text-sm gap-3">
          {isClient && (
              <>
                <p className="text-white/60 hidden md:block">{t("header.header1")}</p> 
                <div className="inline-flex gap-1 items-center">
                  <p>{t("header.header2")}</p>
                </div>
              </>
          )}
        </div>
        <div className="container py-4 mx-auto">
          <div className="flex items-center mx-8 md:mx-0 justify-between md:gap-0 gap-6 md:justify-around px-3 lg:px-0">
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
              {isClient && (
                <span className={`cursor-default text-xl transition-colors ${scrolledToPricing ? "text-emerald-700" : "text-black"}`}>AsylMind</span>
              )}
            </div>
            <nav className="flex flex-col md:flex-row md:justify-center gap-3 md:gap-8 text-black/80 items-center">
              <MobileMenu 
                scrollToSection={scrollToSection}
                isMenuOpen={isMenuOpen} 
                missionRef={missionRef} 
                featureRef={featureRef}
                pricingRef={pricingRef}
                growthRef={growthRef}
                setIsMenuOpen={setIsMenuOpen}
                t={t}
              />

              <div className="hidden md:flex gap-3 md:gap-6">
                {
                  isClient && (
                    <>
                    <button
                      onClick={() => scrollToSection(missionRef)}
                      className={`${scrolledToPricing ? "text-emerald-700" : "text-black"} font-semibold cursor-pointer hover:text-black text-lg`}
                    >
                      {t("navbar.mission")}
                    </button>
                    <button
                      onClick={() => scrollToSection(growthRef)}
                      className={`${scrolledToPricing ? "text-emerald-700" : "text-black"} font-semibold cursor-pointer hover:text-black text-lg`}
                    >
                      {t("navbar.progress")}
                    </button>
                    <button
                      onClick={() => scrollToSection(featureRef)}
                      className={`${scrolledToPricing ? "text-emerald-700" : "text-black"} font-semibold cursor-pointer hover:text-black text-lg`}
                    >
                      {t("navbar.feature")}
                    </button>
                    <button
                      onClick={() => scrollToSection(pricingRef)}
                      className={`${scrolledToPricing ? "text-emerald-700" : "text-black"} font-semibold cursor-pointer hover:text-black text-lg`}
                    >
                      {t("navbar.price")}
                    </button>
                  </>
                  )
                }
              </div>

              <div className="hidden md:flex">
                <Link href="">
                {
                  isClient && (
                    <button onMouseOver={()=>setIsAnimating(true)} onMouseOut={()=>setIsAnimating(false)} className={`${isAnimating ? "shadow-2xl" : "shadow-none"} ${scrolledToPricing ? "bg-emerald-700" : "text-black"} hover:border-transparent relative items-center overflow-hidden px-3.5 py-1.5 bg-black/80 text-white rounded-xl font-semibold cursor-pointer`}>
                        <span className={`absolute inset-0 bg-emerald-700 scale-0 origin-center rounded-full transition-transform duration-400 transform ${isAnimating ? 'scale-110 ' : "scale-0"}`}></span>
                        <span className="relative z-10 text-lg">{t("navbar.get_started")}</span>
                    </button>
                  )
                }
                </Link>
              </div>
            </nav>
          </div>
        </div>
    </header>
  );
};

export default Header;