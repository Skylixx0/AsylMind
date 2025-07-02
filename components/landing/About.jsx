"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FadeInSection } from "@/components/utils/FadeInSection"
import { GlassCard } from "@/components/utils/GlassCard"

const About = () => {
  const faqData = [
    {
      index: 1,
      question: "Не понимаешь, куда уходят твои деньги?",
      answer:
        "FinQadam покажет всё ясно и просто. Ты сразу увидишь, на что тратишь больше всего, и поймёшь, где можно сэкономить, чтобы твои деньги начали работать на твои цели. А за внимание к своему бюджету ты будешь получать XP и открывать новые уровни — на пути к финансовой свободе.",
    },
    {
      index: 2,
      question: "Тяжело начать откладывать?",
      answer:
        "Мы поможем сделать первый шаг. FinQadam подскажет, сколько ты можешь отложить уже сейчас, и покажет, как постепенно наращивать свои сбережения.",
    },
    {
      index: 3,
      question: "Боишься сложных финансовых терминов?",
      answer:
        "Не волнуйся — здесь всё объясняется простым, понятным языком. Короткие мини-уроки и полезные подсказки помогут быстро разобраться, а система XP и награды превратят обучение в увлекательный путь.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#FFFFFF] to-emerald-300 py-40 md:py-auto mx-auto overflow-x-clip flex justify-center items-center min-h-screen">
      <div className={`container text-center my-auto px-3`}>
        <FadeInSection>
          <div className="px-4 flex flex-col mx-auto xl:mx-50 items-center justify-center gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
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

export default About;