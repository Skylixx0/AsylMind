import { useEffect, useState } from "react";
import { FadeInSection } from "@/components/utils/FadeInSection";

const Feature = () => {
  const features = [
    {
      icon: "/search.svg",
      text: "ИИ ассистент",
      description: "AI Money Coach - персональный помощник по деньгам прямо в приложении." ,
    },
    {
      icon: "/search.svg",
      text: "Голосовой ввод",
      description:
        "Скажи: “Я потратил 2500 на такси” — и всё запишется автоматически.",
    },
    {
      icon: "/search.svg",
      text: "Финансовый калькулятор",
      description:
        "Умный помощник, который рассчитывает твой бюджет, прогнозирует траты и подсказывает, сколько можно сэкономить.",
    },
    {
      icon: "/search.svg",
      text: "Лента знаний",
      description:
        "Следи за новостями из мира финансов, экономических советами и обновлениями от AsylMind — всё в одном месте.",
    },
    {
      icon: "/search.svg",
      text: "Семейный учет",
      description:
        "Общий бюджет — добавляй членов семьи и отслеживай траты вместе.",
    },
    {
      icon: "/search.svg",
      text: "Кастомизация интерфейса",
      description:
        "Персонализация — настрой приложение под себя: виджеты, цвета, шрифты.",
    },
  ];

  return (
    <div className={`py-40 md:py-auto px-6 bg-emerald-200/70 min-h-screen`}>
      <div className={`container max-w-6xl mx-auto`}>
        <FadeInSection>
          <div className="text-center pt-8">
            <h2 className="text-3xl sm:text-5xl  text-emerald-600 lg:text-6xl mt-7 tracking-wide font-bold">
              Специально <span className="text-gray-900">для вас</span>
            </h2>
          </div>
        </FadeInSection>
        
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-16 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <FadeInSection key={index}>
                <div
                  key={index}
                  className="flex h-full items-start bg-emerald-600/40 p-6 rounded-xl hover:-translate-y-4 hover:shadow-2xl hover:shadow-emerald-300 ease-out duration-600"
                >
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center  text-black rounded-full">
                    <img src={feature.icon} alt="icon" className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-xl font-semibold text-gray-900">
                      {feature.text}
                    </h5>
                    <p className="text-md text-neutral-800 mt-2">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Feature;