"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FadeInSection } from "@/components/utils/FadeInSection"
import { GlassCard } from "@/components/utils/GlassCard"

const Integration = () => {
    const workInfoData = [
        {
            image: "/search.svg",
            title: "Мини-уроки",
            text: "Краткие статьи по основам финансов, которые помогают понять, куда уходят деньги и как начать копить. С уроков начинается твой путь к финансовой осознанности.",
        },
        {
            extend: false,
            image: "/bank.png",
            title: "Финансовая база",
            text: "Финансовый прогресс в FinMind — это не просто цифры. Продвигайся от новичка до финансово свободного, выполняя простые действия: веди бюджет, проходи мини-уроки, достигай целей"
        },
        {
            image: "/recommendation.png",
            extend: false,
            title: "Привычка без давления",
            text: "Система streaks🔥 и мотивации: ежедневные действия (учёт, уроки, цели) формируют полезную привычку, без стресса и скуки."
        },
    ];

  return (
    <div className="py-45 md:py-auto px-6 min-h-screen bg-gradient-to-b from-emerald-300 to-emerald-200/70">
      {/* Top Section */}
      <FadeInSection>
        <div className="text-center mb-16 space-y-8">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">Финансовый рост</h1>
          <p className="text-neutral-800  mt-4 max-w-2xl mx-auto text-lg md:text-xl">
            Краткие уроки & гайды, личный прогресс и привычки — всё, чтобы ты добился своих целей.
          </p>
        </div>
      </FadeInSection>
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3">
        {workInfoData.map((data, idx) => (
          <FadeInSection key={idx}>
            <div
              key={data.title}
              className="flex flex-col items-center h-full text-center p-8 bg-white rounded-2xl shadow-sm hover:-translate-y-4 hover:shadow-2xl ease-out duration-700"
            >
              <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gray-200 rounded-full p-4">
                <img src={data.image} alt={data.title} className="w-12 h-12" />
              </div>
              <h2 className={`${data.extend ? "pb-4" : ""} text-2xl font-semibold text-gray-800`}>
                {data.title}
              </h2>
              {data?.extend ? 
                data.text.map((text, idx)=>(
                  <div key={idx}>
                    <p className="text-gray-600">{text}</p>
                  </div>
                ))
                :
                <p className="text-gray-600 mt-4">{data.text}</p>
              }
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default Integration;