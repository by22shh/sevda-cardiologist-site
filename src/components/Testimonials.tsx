"use client";

import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import PulseDivider from "@/components/PulseDivider";
import { useState } from "react";

const testimonials = [
  {
    name: "Пациент +7 913 94XXXX",
    date: "02.10.2025",
    full:
      "На приём к доктору попала по отзывам пациентов. Осталась очень довольна. Севда Афгановна очень приятная в общении, внимательная, грамотная. Отлично выглядит, а это говорит о том, что врач занимается своим здоровьем и сможет мотивировать своих пациентов. Обратилась к доктору по поводу повышения АД и ЧСС, одышки. Выслушав всю мою историю, изучила анализы и проведённые обследования, провела осмотр, измерила давление. Назначила препараты, прописала диету, дала рекомендации по изменению образа жизни, направила на дообследование, всё подробно пояснила. Доходчиво ответила на все мои вопросы. Повторный приём через месяц. От души рекомендую доктора!",
    rating: 5,
    verified: true,
  },
  {
    name: "Пациент +7 913 75XXXX",
    date: "08.08.2025",
    full:
      "Обращались с дочерью по поводу синкопальных состояний. К доктору пришли по рекомендации. Были проведены обследования. Доктор полностью прояснила ситуацию, поставила диагноз, объяснила патогенез и назначила терапию.\n\nПонравилось:\nОчень высокие компетенции доктора. Собран самый подробный анамнез, проанализирована вся медицинская документация. Доктор владеет знаниями в смежных областях, комплексно подходит к лечению пациента, учитывая сопутствующие патологии. Были даны назначения и по терапии, и по коррекции образа жизни. Все рекомендации обоснованы. Один из самых эффективных приемов.\n\nНе понравилось:\nВсё было безупречно.",
    rating: 5,
    verified: true,
  },
  {
    name: "Пациент +7 913 74XXXX",
    date: "15.12.2023",
    full:
      "Обратилась к врачу Севде Афгановна по записи, 15 декабря 2023 года. Меня очень беспокоили загруженные пульсации. Доктор внимательно выслушала мои жалобы, задавала много уточняющих вопросов, изучила все анализы, которые принесла с собой. Дала направление на дообследование и пригласила на повторный приём. Получила грамотные ответы на все интересующие и тревожащие меня вопросы. Замечательная доктор. Внимательная, общительная, задаёт много вопросов для выявления проблемы и дальнейшего лечения! Рекомендую данного доктора, очень грамотная, не безразличная. Приёмом осталась довольна.\n\nПонравилось:\nОчень понравился профессионализм и внимание к пациенту.",
    rating: 5,
    verified: true,
  },
  {
    name: "Пациент +7 983 28XXXX",
    date: "20.04.2023",
    full:
      "Сегодня была на приеме у Севды Афгановны по поводу экстрасистолии. Сказать, что мне безумно понравился доктор и её отношение к пациенту, не сказать ничего! Севда Афгановна не только безумно грамотный доктор, но и просто прекрасный человек. Внимательно выслушала, всё доходчиво объяснила и рассказала. Если ещё понадобится кардиолог, то только к Севде Афгановне. Рекомендую однозначно. Доктору большое спасибо и низкий поклон!",
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

  const current = testimonials[currentIndex];
  const paragraphs = current.full.split("\n");

  return (
    <section className="py-24 bg-emerald-50/40 relative overflow-hidden">
      <PulseDivider variant="top" color="sky" />
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
                    {[...Array(current.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-emerald-400 text-emerald-400"
                      />
                    ))}
                  </div>

                  <div className="text-slate-700 leading-relaxed mb-6 text-lg md:text-xl">
                    {paragraphs.map((paragraph, idx) => (
                      <div key={idx} className={idx === 0 ? "" : "mt-5"}>
                        {idx > 0 && (
                          <div className="h-px w-16 bg-emerald-200/70 mb-4" />
                        )}
                        <p>{paragraph}</p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-slate-200 pt-6 flex items-center justify-between mt-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-slate-900 text-lg">
                          {current.name}
                        </p>
                        {current.verified && (
                          <div className="flex items-center gap-1 px-2 py-0.5 bg-emerald-100 rounded-full">
                            <CheckCircle className="w-3 h-3 text-emerald-600" />
                            <span className="text-xs font-medium text-emerald-700">Проверено</span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-slate-600">{current.date}</p>
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
