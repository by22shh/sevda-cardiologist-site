"use client";

const profile = [
  { value: 22, label: "Аритмия" },
  { value: 10, label: "Мерцательная аритмия" },
  { value: 8, label: "Атриовентрикулярная блокада" },
  { value: 11, label: "Блокада ножек пучка Гиса" },
  { value: 10, label: "Брадикардия" },
  { value: 8, label: "Наджелудочковая экстрасистолия" },
  { value: 11, label: "Синдром Вольфа — Паркинсона — Уайта (WPW)" },
  { value: 8, label: "Артериальная гипертензия" },
  { value: 8, label: "Желудочковая экстрасистолия" },
  { value: 4, label: "Ишемическая болезнь сердца" },
];

export default function TreatmentProfile() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-200/40 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl animate-float-slower" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 reveal" data-reveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Профиль обращений
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Структура обращений по основным направлениям аритмологии и кардиологии
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {profile.map((item, index) => (
              <div
                key={item.label}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-emerald-100 p-5 shadow-sm hover:shadow-md transition-all duration-300 reveal"
                data-reveal
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="min-w-[56px] px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold text-center">
                    {item.value}%
                  </div>
                  <p className="text-slate-700 font-medium">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-slate-500 mt-6 text-center reveal" data-reveal style={{ transitionDelay: "200ms" }}>
            Данные основаны на профиле обращений и представлены для ориентира.
          </p>
        </div>
      </div>
    </section>
  );
}
