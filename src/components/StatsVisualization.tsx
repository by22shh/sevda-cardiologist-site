"use client";

import { useEffect, useState } from "react";

const stats = [
  {
    label: "Лет практики",
    end: 17,
    suffix: "+",
    description: "Более 17 лет в кардиологии",
    accent: "from-emerald-600 to-teal-600",
  },
  {
    label: "Рейтинг",
    end: 5,
    suffix: ".0",
    description: "Средняя оценка пациентов",
    accent: "from-sky-600 to-cyan-600",
  },
  {
    label: "Отзывов",
    end: 35,
    suffix: "+",
    description: "На независимых площадках",
    accent: "from-teal-600 to-emerald-600",
  },
  {
    label: "Возраст пациентов",
    end: 18,
    suffix: "+",
    description: "Прием взрослых",
    accent: "from-emerald-600 to-green-600",
  },
];

function AnimatedNumber({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / 1800, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function StatsVisualization() {
  return (
    <section className="py-24 bg-gradient-to-b from-emerald-50/40 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute top-20 left-20 text-8xl font-serif text-emerald-900/30">❤</div>
        <div className="absolute bottom-20 right-20 text-7xl font-serif text-emerald-900/30">⎯</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Опыт и доверие
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ключевые факты, которые помогают пациентам принимать решение о консультации
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.accent} bg-clip-text text-transparent mb-2`}>
                  <AnimatedNumber end={stat.end} suffix={stat.suffix} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{stat.label}</h3>
                <p className="text-sm text-slate-600">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 border border-emerald-100 shadow-lg">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-700 mb-2">До 60 минут</div>
                <div className="text-slate-700 font-medium">Продолжительность приема</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-700 mb-2">Консервативный подход</div>
                <div className="text-slate-700 font-medium">Подбор терапии и наблюдение</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-700 mb-2">Комплексный подход</div>
                <div className="text-slate-700 font-medium">Диагностика, лечение и наблюдение</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
