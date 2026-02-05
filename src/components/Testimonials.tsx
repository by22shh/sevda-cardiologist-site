"use client";

import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Пациент +7 913 94XXXX",
    role: "02.10.2025",
    text: "Очень внимательная и грамотная. Подробно изучила обследования, объяснила план лечения и дала рекомендации по образу жизни.",
    rating: 5,
    verified: true,
  },
  {
    name: "Пациент +7 913 75XXXX",
    role: "08.08.2025",
    text: "Полностью разобрала ситуацию, объяснила диагноз и назначила терапию. Очень высокий уровень компетенций.",
    rating: 5,
    verified: true,
  },
  {
    name: "Пациент +7 913 48XXXX",
    role: "14.02.2024",
    text: "Помогла разобраться в сложной ситуации с аритмией и корректно скорректировала лечение. Спасибо за поддержку.",
    rating: 5,
    verified: true,
  },
  {
    name: "Пациент +7 983 28XXXX",
    role: "20.04.2023",
    text: "Внимательно выслушала, всё доходчиво объяснила и дала четкие рекомендации. Осталась очень довольна.",
    rating: 5,
    verified: true,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-emerald-50/40 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute top-20 left-20 text-8xl font-serif text-emerald-900/30">♥</div>
        <div className="absolute bottom-20 right-20 text-7xl font-serif text-emerald-900/30">⎯</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal" data-reveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Отзывы пациентов
            </h2>
            <p className="text-xl text-slate-600">
              Реальные впечатления после консультаций
            </p>
          </div>

          <div className="relative mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-emerald-100 relative overflow-hidden transition-all duration-500 hover:shadow-2xl reveal" data-reveal style={{ transitionDelay: "120ms" }}>
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-100 to-transparent rounded-bl-full opacity-60" />

                <div className="relative z-10">
                  <Quote className="w-12 h-12 text-emerald-200 mb-6" />

                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-emerald-400 text-emerald-400"
                      />
                    ))}
                  </div>

                  <p className="text-slate-700 leading-relaxed mb-8 text-lg md:text-xl italic">
                    "{testimonials[currentIndex].text}"
                  </p>

                  <div className="border-t border-slate-200 pt-6 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-slate-900 text-lg">
                          {testimonials[currentIndex].name}
                        </p>
                        {testimonials[currentIndex].verified && (
                          <div className="flex items-center gap-1 px-2 py-0.5 bg-emerald-100 rounded-full">
                            <CheckCircle className="w-3 h-3 text-emerald-600" />
                            <span className="text-xs font-medium text-emerald-700">Проверено</span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-slate-600">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl border border-emerald-200 hover:border-emerald-300 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="w-6 h-6 text-slate-600 group-hover:text-emerald-600 transition-colors" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl border border-emerald-200 hover:border-emerald-300 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label="Следующий отзыв"
            >
              <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-emerald-600 transition-colors" />
            </button>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-gradient-to-r from-emerald-600 to-teal-600"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Перейти к отзыву ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center reveal" data-reveal style={{ transitionDelay: "120ms" }}>
              <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 mb-2">
                5.0/5
              </div>
              <div className="text-slate-600 font-medium">Средняя оценка</div>
            </div>
            <div className="text-center reveal" data-reveal style={{ transitionDelay: "180ms" }}>
              <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 mb-2">
                35+
              </div>
              <div className="text-slate-600 font-medium">Отзывов пациентов</div>
            </div>
            <div className="text-center reveal" data-reveal style={{ transitionDelay: "240ms" }}>
              <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 mb-2">
                до 60 мин
              </div>
              <div className="text-slate-600 font-medium">Длительность приема</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
