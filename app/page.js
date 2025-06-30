"use client"

import Header from "@/components/landing/Header"
import Hero from "@/components/landing/Hero"
import About from "@/components/landing/About"
import Feature from "@/components/landing/Feature"
import Pricing from "@/components/landing/Pricing"
import Footer from "@/components/landing/Footer"
import { useRef } from "react"
import { useRouter } from "next/navigation";

const Home = () => {
  const aboutRef = useRef(null);
  const pricingRef = useRef(null);
  const featureRef = useRef(null);
  const workRef = useRef(null);
  const heroRef = useRef(null);
  const { locale } = useRouter();

  return (
    <div className="bg-white">
      <Header 
        aboutRef={aboutRef}
        pricingRef={pricingRef}
        featureRef={featureRef}
        workRef={workRef}
        heroRef={heroRef}
        locale={locale}
        />
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={featureRef}>
        <Feature />
      </div>
      <div ref={pricingRef}>
        <Pricing />
      </div>
      <Footer />
    </div>
  )
}

export default Home;