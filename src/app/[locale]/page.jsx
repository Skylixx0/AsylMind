"use client"

import Header from "@/src/components/landing/Header";
import Hero from "@/src/components/landing/Hero";
import Feature from "@/src/components/landing/Feature";
import Pricing from "@/src/components/landing/Pricing";
import Footer from "@/src/components/landing/Footer";
import Growth from "@/src/components/landing/Growth"
import React, { useRef } from "react";
import Mission from "@/src/components/landing/Mission";

const Home = () => {
  const missionRef = useRef(null);
  const pricingRef = useRef(null);
  const featureRef = useRef(null);
  const workRef = useRef(null);
  const heroRef = useRef(null);
  const growthRef = useRef(null);

  return (
    <div className="bg-white ">
      <Header 
        missionRef={missionRef}
        pricingRef={pricingRef}
        featureRef={featureRef}
        workRef={workRef}
        heroRef={heroRef}
        growthRef={growthRef}
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