"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FadeInSection } from "@/components/utils/FadeInSection"
import { GlassCard } from "@/components/utils/GlassCard"

const Mission = () => {
  const faqData = [
    {
      index: 1,
      question: "Не понимаешь, куда уходят твои деньги?",
      answer:
        "AsylMind покажет всё ясно и просто. Ты сразу увидишь, на что тратишь больше всего, и где можно сэкономить, чтобы твои деньги начали работать на тебя.",
    },
    {
      index: 2,
      question: "Тяжело начать откладывать?",
      answer:
        "Мы поможем сделать первый шаг. AsylMind подскажет, сколько ты можешь отложить уже сейчас, и покажет, как постепенно наращивать свои сбережения.",
    },
    {
      index: 3,
      question: "Боишься сложных финансовых терминов?",
      answer:
        "Всё просто и понятно. Подсказки, мини-уроки и награды сделают обучение лёгким и интересным, а система XP и награды превратят обучение в увлекательный путь.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#FFFFFF] to-emerald-300 py-40 md:py-auto mx-auto overflow-x-clip flex justify-center items-center min-h-screen">
      <div className={`container text-center my-auto px-3`}>
        <FadeInSection>
          <div className="text-center mb-16 space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">Наша миссия</h1>
            <p className="text-neutral-800  mt-4 max-w-2xl mx-auto text-lg md:text-xl">
              AsylMind помогает понять, куда уходят деньги, как начать откладывать, и делает финансы простыми и понятными.
            </p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="px-4 flex flex-col mx-auto items-center w-full md:w-1/2 justify-center gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <GlassCard {...faqData[0]} />
              <GlassCard {...faqData[1]} />
            </div>  
            <div className="max-w-lg w-full">
              <GlassCard {...faqData[2]} />
            </div>
          </div>
        </FadeInSection>

        <div className="relative mt-13 flex justify-center">
          {" "}
          {/* Flex added to center the image */}
          {/* <Image
            src="/crypto.png"
            width={200}
            height={200}
            alt="Product image"
            className="mx-auto" // Centers the image
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Mission;