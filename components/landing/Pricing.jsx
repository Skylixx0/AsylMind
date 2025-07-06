"use client";

import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FadeInSection } from "@/components/utils/FadeInSection";

const featureTiers = [
  {
    title: "Бесплатный тариф",
    monthlyPrice: 0,
    buttonText: "Начать бесплатно",
    popular: false,
    inverse: false,
    features: [
      "Доступ к первым 5 уроком финансовой грамотности",
      "Калькулятор финансов",
      "2 активная финансовая цель",
      "Напоминание, уведомление, отчеты export PDF.",
      "Финансовый прогресс",
    ],
  },
  {
    title: "Pro тариф",
    monthlyPrice: 890,
    buttonText: "Регистрация",
    popular: true,
    inverse: true,
    features: [
      "Полный доступ к урокам",
      "Полный доступ к курсам",
      "Полный доступ к гайдам",
      "Семейный учет",
      "Кастомизация интерфейса",
      "Безлимитные финансовые цели",
      "ИИ - умный финансовый помощник",
    ],
  },
];

const Pricing = () => {

  return (
    <div className="pt-45 pb-30 md:pt-auto px-6 bg-white flex items-center justify-center min-h-screen bg-gradient-to-b from-emerald-200/70 to-white">
      <div className={`container text-center`}>
        <FadeInSection>
          <div className="section-heading space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Наши цены</h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg md:text-xl">
              Откройте для себя возможности AsylMind с поддержкой ИИ, которые помогут вам эффективно управлять своими финансами и достигать финансовых целей.
            </p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="flex flex-col gap-6 items-center mt-13 lg:flex-row lg:items-center lg:justify-center text-start">
            {featureTiers.map(
              ({
                title,
                monthlyPrice,
                buttonText,
                popular,
                features,
                inverse,
              }) => (
                <div
                  key={title}
                  className={twMerge(
                    "px-10 py-5 rounded-3xl border border-[#e1e3de] shadow-sm   max-w-xs w-full",
                    inverse === true && "  bg-black text-white"
                  )}
                >
                  <div className="flex justify-between">
                    <h3
                      className={twMerge(
                        "text-lg font-bold text-black/70",
                        inverse && "text-white/80"
                      )}
                    >
                      {title}
                    </h3>
                    {popular && (
                      <div className="inline-flex text-sm p-1.5 rounded-xl border border-white/50">
                        <motion.span
                          animate={{
                            backgroundPositionX: "-100%",
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                          }}
                          className=" bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                        >
                          Популярно
                        </motion.span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1 mt-[30px]">
                    <span
                      className={twMerge(
                        "text-4xl font-bold tracking-tighter leading-none  text-black/70 ",
                        inverse && "text-white/80"
                      )}
                    >
                      ₸{monthlyPrice}
                    </span>
                    <span
                      className={twMerge(
                        "tracking-tight font-bold text-black/70",
                        inverse && "text-white/80"
                      )}
                    >
                      {" "}
                      /месяц
                    </span>
                  </div>
                  <button
                    className={twMerge(
                      "btn btn-primary w-full mt-[30px] bg-black  text-white",
                      inverse && "bg-white text-black"
                    )}
                  >
                    {buttonText}
                  </button>
                  <ul className="flex flex-col gap-5 mt-8">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className={twMerge(
                          "text-sm flex gap-4 text-black",
                          inverse && "text-white/80"
                        )}
                      >
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Pricing;