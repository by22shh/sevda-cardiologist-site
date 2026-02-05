"use client";

import { Calendar, ClipboardList, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Запись на прием",
    description: "Вы выбираете удобную клинику и время. Можно записаться по телефону или онлайн.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Stethoscope,
    title: "Сбор анамнеза",
    description: "Подробно обсуждаем жалобы, симптомы, образ жизни и историю заболевания.",
    color: "from-sky-500 to-cyan-500",
  },
  {
    icon: ClipboardList,
    title: "Анализ документов",
    description: "Изучаем ЭКГ, УЗИ сердца, анализы, список препаратов и предыдущие заключения.",
    color: "from-teal-500 to-emerald-500",
  },
  {
    icon: HeartPulse,
    title: "План лечения",
    description: "Подбираем терапию, определяем тактику наблюдения и необходимости дообследований.",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: ShieldCheck,
    title: "Контроль и сопровождение",
    description: "Оцениваем динамику, при необходимости корректируем лечение и программируем устройства.",
    color: "from-sky-500 to-emerald-500",
  },
];

export default function LearningProcess() {
  return (
    <section id="process" className="py-24 bg-gradient-to-b from-white to-emerald-50/40 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute top-20 right-20 text-8xl font-serif text-emerald-900/40">❤</div>
        <div className="absolute bottom-20 left-20 text-7xl font-serif text-emerald-900/30">⎯</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Как проходит консультация
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Прозрачный и понятный процесс от первого обращения до контроля результатов
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-200 via-emerald-300 to-emerald-200 md:transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-emerald-500 rounded-full md:transform md:-translate-x-1/2 shadow-lg z-10" />

                  <div
                    className={`flex-1 ml-20 md:ml-0 ${
                      index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-200 group">
                      <div
                        className={`flex items-center gap-4 ${
                          index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                          <p className="text-slate-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
