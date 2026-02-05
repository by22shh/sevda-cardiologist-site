import {
  Activity,
  BadgeCheck,
  ClipboardList,
  Heart,
  HeartPulse,
  LineChart,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const services = [
  {
    icon: HeartPulse,
    title: "Диагностика аритмий",
    description: "Комплексная оценка симптомов, ЭКГ, документов и выявление причин нарушений ритма.",
  },
  {
    icon: Activity,
    title: "Тахикардии и фибрилляция",
    description: "Пароксизмальные наджелудочковые и желудочковые тахикардии, ФП/ТП, WPW.",
  },
  {
    icon: Heart,
    title: "Брадикардии и блокады",
    description: "Синусовая брадикардия, AV и SA блокады, синдром слабости синусового узла.",
  },
  {
    icon: ClipboardList,
    title: "Подбор терапии",
    description: "Коррекция антиаритмических препаратов с учетом сопутствующих заболеваний.",
  },
  {
    icon: ShieldCheck,
    title: "Подготовка к РЧА",
    description: "Отбор пациентов, подготовка к радиочастотной аблации и контроль результата.",
  },
  {
    icon: BadgeCheck,
    title: "ЭКС и ИКД",
    description: "Показания, подготовка и последующее программирование устройств.",
  },
  {
    icon: LineChart,
    title: "Сердечная недостаточность",
    description: "Ведение при кардиомиопатиях, ИБС, восстановление после операций на сердце.",
  },
  {
    icon: Stethoscope,
    title: "Комплексная консультация",
    description: "Сбор анамнеза, анализ обследований, рекомендации по образу жизни и наблюдению.",
  },
];

export default function Benefits() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-emerald-50/40 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute top-1/4 left-10 text-7xl font-serif text-emerald-900/60">♥</div>
        <div className="absolute bottom-1/4 right-10 text-6xl font-serif text-emerald-900/40">+</div>
        <div className="absolute top-10 right-1/3 text-7xl font-serif text-emerald-600/30">⎯</div>
        <div className="absolute bottom-10 left-1/3 text-6xl font-serif text-slate-800/30">⎯</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Направления и услуги
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Диагностика и лечение нарушений ритма сердца и сопутствующих сердечно-сосудистых заболеваний
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-emerald-100 hover:border-emerald-300 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-sky-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-emerald-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                    {service.description}
                  </p>
                </div>

                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-emerald-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 rounded-2xl p-8 sm:p-12 text-white text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-sky-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 drop-shadow-lg">
                Комплексный подход к лечению
              </h3>
              <p className="text-lg sm:text-xl opacity-95 max-w-3xl mx-auto leading-relaxed">
                Сбор анамнеза, анализ документов, назначение терапии, коррекция образа жизни и направление
                на дообследования: ЭКГ, УЗИ сердца, анализы крови, гормоны щитовидной железы.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
