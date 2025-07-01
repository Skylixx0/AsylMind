"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const About = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(()=>{
    setMounted(true);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#FFFFFF] to-emerald-300 py-40 md:py-auto  px-6 overflow-x-clip flex justify-center items-center min-h-screen">
      <div className={`container text-center ${mounted ? "fade-in-start" : ""}`}>
        <div className="max-w-[540px] mx-auto space-y-8">
          <h2 className="text-4xl text-gray-900  md:text-6xl md:leading-[60px] font-bold tracking-tighter bg-clip-text mt-5">
            <span className="whitespace-nowrap">Что такое <span className="text-emerald-600">FinQadam</span></span> 
          </h2>
          <div className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl flex flex-col gap-4">
            <p>
              В FinQadam мы стремимся помочь вам взять под контроль свои финансы и научиться управлять деньгами с уверенностью и пониманием.
            </p>
            <p>
              Следите за своими доходами и расходами, ставьте финансовые цели, или просто начните вести бюджет осознанно — наша платформа сделает управление деньгами простым, понятным и даже увлекательным.
            </p>
          </div>
        </div>

        <div className="relative mt-13 flex justify-center">
          {" "}
          {/* Flex added to center the image */}
          {/* <Image
            src={}
            alt="Product image"
            className="mx-auto" // Centers the image
          /> */}
        </div>
      </div>
    </div>
  );
};

export default About;