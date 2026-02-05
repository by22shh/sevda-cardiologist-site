"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Кого вы принимаете?",
    answer: "Прием ведется для взрослых пациентов (18+).",
  },
  {
    question: "Сколько длится консультация?",
    answer: "Обычно прием занимает до 60 минут, чтобы подробно разобрать симптомы и документы.",
  },
  {
    question: "Какие документы и обследования стоит взять с собой?",
    answer: "Желательно иметь результаты ЭКГ, УЗИ сердца, анализы крови, список принимаемых препаратов и прошлые заключения.",
  },
  {
    question: "С какими симптомами стоит обратиться?",
    answer: "Перебои в работе сердца, учащенное сердцебиение, замирания, головокружения, обмороки, редкий или частый пульс, одышка.",
  },
  {
    question: "Принимаете ли по ДМС?",
    answer: "Нет, прием платный. Стоимость уточняйте при записи.",
  },
  {
    question: "Где проходит прием?",
    answer: "Консультации проходят онлайн по видеосвязи. Ссылку и формат подтверждаем после записи.",
  },
  {
    question: "Можно ли пройти программирование ЭКС или ИКД?",
    answer: "Онлайн возможен разбор данных и рекомендаций. Программирование устройств выполняется очно в профильном учреждении.",
  },
  {
    question: "Как записаться на прием?",
    answer: "Оставьте заявку на сайте — мы свяжемся и согласуем удобное время онлайн-консультации.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute top-10 right-10 text-8xl font-serif text-emerald-900/30">?</div>
        <div className="absolute bottom-10 left-10 text-7xl font-serif text-emerald-900/30">!</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Частые вопросы
            </h2>
            <p className="text-xl text-slate-600">
              Ответы на популярные вопросы о консультации
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-white rounded-xl border border-emerald-100 hover:border-emerald-200 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left group"
                >
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-emerald-600 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl p-8 border border-emerald-100">
            <p className="text-lg text-slate-700 mb-4">Не нашли ответ на свой вопрос?</p>
            <p className="text-slate-600">
              Позвоните по номеру <span className="font-semibold">+7 903 997-41-83</span> или
              напишите в WhatsApp/Telegram по этому же номеру.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
