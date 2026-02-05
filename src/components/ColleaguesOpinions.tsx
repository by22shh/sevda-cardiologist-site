"use client";

import { Quote } from "lucide-react";

const colleagues = [
  {
    name: "Прохорова Д. С.",
    role: "Функциональный диагност",
    date: "14.09.2021",
    text:
      "Рекомендует как грамотного и внимательного кардиолога; рекомендации понятны и корректны.",
  },
  {
    name: "Калинина И. Э.",
    role: "Детский кардиолог",
    date: "25.12.2021",
    text:
      "Отмечает совместную работу и взвешенную тактику ведения, высокий уровень знаний.",
  },
  {
    name: "Нижегородцева Г. В.",
    role: "Гастроэнтеролог",
    date: "28.12.2021",
    text:
      "Подчеркивает высокий профессионализм и эффективную терапию при сложных случаях.",
  },
  {
    name: "Филимонова Е. С.",
    role: "Инфекционист",
    date: "30.12.2021",
    text:
      "Рекомендует как сильного аритмолога с внимательным отношением и вовлеченностью.",
  },
];

export default function ColleaguesOpinions() {
  return (
    <section className="py-24 bg-gradient-to-b from-emerald-50/40 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute top-16 left-16 w-64 h-64 bg-emerald-200/40 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl animate-float-slower" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 reveal" data-reveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Мнение коллег
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Короткие рекомендации от специалистов смежных направлений
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {colleagues.map((item, index) => (
              <div
                key={item.name}
                className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300 reveal"
                data-reveal
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <Quote className="w-8 h-8 text-emerald-200 mb-4" />
                <p className="text-slate-700 leading-relaxed mb-4">“{item.text}”</p>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span className="font-semibold text-slate-700">{item.name}</span>
                  <span>{item.role} · {item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
