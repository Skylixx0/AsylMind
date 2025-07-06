"use client"

import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Feature from "@/components/landing/Feature";
import Pricing from "@/components/landing/Pricing";
import Footer from "@/components/landing/Footer";
import Growth from "@/components/landing/Growth"
import { useRef } from "react";
import { useRouter } from "next/navigation";
import Mission from "@/components/landing/Mission";

const Home = () => {
  const missionRef = useRef(null);
  const pricingRef = useRef(null);
  const featureRef = useRef(null);
  const workRef = useRef(null);
  const heroRef = useRef(null);
  const growthRef = useRef(null);
  const { locale } = useRouter();

  return (
    <div className="bg-white ">
      <Header 
        missionRef={missionRef}
        pricingRef={pricingRef}
        featureRef={featureRef}
        workRef={workRef}
        heroRef={heroRef}
        growthRef={growthRef}
        locale={locale}
        />
      <section ref={heroRef}>
        <Hero />
      </section>
      <section ref={missionRef}>
        <Mission />
      </section>
      <section ref={growthRef}>
        <Growth />
      </section>
      <section ref={featureRef}>
        <Feature />
      </section>
      <section ref={pricingRef}>
        <Pricing />
      </section>
      <Footer />
    </div>
  )
}

export default Home;