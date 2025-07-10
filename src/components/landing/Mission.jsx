"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FadeInSection } from "@/src/components/utils/FadeInSection"
import { GlassCard } from "@/src/components/utils/GlassCard"
import { useTranslations } from "next-intl";

const Mission = () => {
  const t = useTranslations("Home.mission");
  const cards = t.raw('cards');
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
        "Расскажем простым и понятным языком. Поможем именно тебе разобраться в финансах без лишней сложности и сделаем обучение лёгким и увлекательным.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#FFFFFF] to-emerald-300 py-40 md:py-auto mx-auto overflow-x-clip flex justify-center items-center min-h-screen">
      <div className={`container text-center my-auto px-3`}>
        <FadeInSection>
          <div className="text-center mb-16 space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">{t("title")}</h1>
            <p className="text-neutral-800  mt-4 max-w-2xl mx-auto text-lg md:text-xl">
              {t("subtitle")}
            </p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="px-4 flex flex-col mx-auto items-center w-full md:w-3/4 justify-center gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:mx-25 gap-10">
                {cards.map((card, idx) => (
                  (card.index !== 3) && (
                    <GlassCard key={idx} question={card.question} answer={card.answer} />
                  )
                ))}
            </div>  
            <div className="max-w-lg w-full">
                {cards.map((card, idx) => (
                  (card.index === 3) && (
                    <GlassCard key={idx} question={card.question} answer={card.answer} />
                  )
                ))}
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