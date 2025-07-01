import { useEffect, useState } from "react";

const Feature = () => {
    const [mounted, setMounted] = useState(false);
  
    useEffect(()=>{
      setMounted(true);
    }, []);

  const features = [
    {
      icon: "/search.svg",
      text: "Умное управление бюджетом",
      description:
        "Автоматически отслеживайте свои доходы и расходы, создавайте категории трат и получайте рекомендации по улучшению финансовых привычек.",
    },
    {
      icon: "/search.svg",
      text: "Финансовые цели и мотивация",
      description:
        "Устанавливайте цели — например, «накопить на отпуск» или «погасить долг» — и FinMind подскажет, как быстрее достичь их с учетом вашего бюджета.",
    },
    {
      icon: "/search.svg",
      text: "Аналитика и отчеты",
      description:
        "Получайте еженедельные и ежемесячные отчеты о своих расходах, с графиками, метками и анализом, что помогает понять, куда уходят деньги.",
    },
    {
      icon: "/search.svg",
      text: "Обучение финансам на простом языке",
      description:
        "Краткие курсы, советы и тесты, чтобы понять, как работает кредит, сбережения, инвестиции — без сложной терминологии.",
    },
  ];

  return (
    <div className={`py-40 md:py-auto px-6 bg-emerald-200/70 min-h-screen`}>
      <div className={`container max-w-6xl mx-auto ${mounted ? "fade-in-start" : ""}`}>
        <div className="text-center pt-8">
          <span className="bg-neutral-900 text-white rounded-full text-xl px-7 py-3 uppercase">
            Функции
          </span>
          <h2 className="text-3xl sm:text-5xl  text-emerald-600 lg:text-6xl mt-12 tracking-wide font-bold">
            Специально <span className="text-gray-900">для вас</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-16 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start bg-emerald-600/40 p-6 rounded-xl hover:-translate-y-4 hover:shadow-2xl hover:shadow-emerald-300 ease-out duration-700"
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;