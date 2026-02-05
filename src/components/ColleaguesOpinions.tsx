"use client";

import { Quote } from "lucide-react";

const colleagues = [
  {
    name: "Прохорова Д. С.",
    role: "Функциональный диагност",
    date: "14.09.2021",
    full:
      "Могу ответственно рекомендовать врача кардиолога-аритмолога Байрамову Севду Афгановну как грамотного специалиста, внимательного доктора и отзывчивого человека. Так получалось, что кого-бы я не отправляла к ней на консультацию, все пациенты были удовлетворены, рекомендации и назначения были понятны, дальнейший план наблюдения и обследования корректен и не избыточен, многие пациенты наблюдались у Севды Афгановны и далее. Кроме того, она обладает даром убеждения, пациенты меняют свои привычки, выбирая здоровый или близкий к здоровому образ жизни, пересматривают пищевое поведение.",
  },
  {
    name: "Калинина И. Э.",
    role: "Детский кардиолог",
    date: "25.12.2021",
    full:
      "С Севдой Афгановной уже не раз вели пациентов совместно. И порой мы вместе вырабатываем тактику ведения, и мне такой подход очень импонирует. Грамотная и квалифицированная доктор с большой базой научных и практических знаний.",
  },
  {
    name: "Нижегородцева Г. В.",
    role: "Гастроэнтеролог",
    date: "28.12.2021",
    full:
      "Большой профессионал! Севда Афгановна в своём достаточно молодом возрасте уже добилась невероятных успехов в научной деятельности и врачебной практике. Тысячи пациентов со сложной патологией сердечно-сосудистой системы нашли спасение без оперативного вмешательства благодаря грамотно подобранной и вовремя скорректированной терапии. Не побоюсь сказать, что это лучший врач аритмолог в Новосибирске.",
  },
  {
    name: "Филимонова Е. С.",
    role: "Инфекционист",
    date: "30.12.2021",
    full:
      "Севда Афгановна невероятный врач аритмолог. Погружена на 100 % в вопросы аритмологии. Думаю, все пациенты, столкнувшиеся с проблемой, тоже о ней слышали из многих источников. Самые лучшие отзывы от коллег и благодарности от людей, кому она помогла. Она постоянно развивается в профессиональном отношении и при этом не черствеет. Находит нужные слова воздействия, чтобы пациент оставался привержен к лечению.",
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
              Рекомендации от специалистов смежных направлений
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
                <div className="text-slate-700 leading-relaxed mb-4">
                  {item.full.split("\n").map((paragraph, idx) => (
                    <div key={idx} className={idx === 0 ? "" : "mt-5"}>
                      {idx > 0 && (
                        <div className="h-px w-16 bg-emerald-200/70 mb-4" />
                      )}
                      <p>{paragraph}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span className="font-semibold text-slate-700">{item.name}</span>
                  <span>
                    {item.role} · {item.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
