"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute top-16 right-20 text-8xl font-serif text-emerald-900/40">₽</div>
        <div className="absolute bottom-16 left-20 text-7xl font-serif text-emerald-900/30">⎯</div>
        <div className="absolute top-1/3 left-1/4 text-6xl font-serif text-emerald-600/30">♥</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Стоимость онлайн-консультации
            </h2>
            <p className="text-xl text-slate-600">
              Стоимость зависит от объема консультации. Точную стоимость уточняйте при записи.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200/50 to-transparent rounded-bl-full" />

              <div className="text-center mb-6 relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Первичная онлайн-консультация</h3>
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-700 to-teal-600 mb-2">
                  от 3000 ₽
                </div>
                <p className="text-slate-600">Подробная консультация до 60 минут</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Сбор анамнеза и анализ документов</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Оценка симптомов и рисков</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">План лечения и рекомендации</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Направления на дообследования</span>
                </li>
              </ul>

              <Button
                onClick={scrollToBooking}
                variant="outline"
                className="w-full py-6 text-lg border-2 border-emerald-300 hover:bg-emerald-50"
              >
                Записаться
              </Button>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-sky-600 rounded-2xl p-8 border border-emerald-400 shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 to-sky-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg border border-white/40">
                Популярно
              </div>

              <div className="text-center mb-6 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Повторная консультация</h3>
                <div className="text-4xl font-bold text-white drop-shadow-2xl mb-2">Индивидуально</div>
                <p className="text-white/95 drop-shadow">Контроль динамики и коррекция терапии</p>
              </div>

              <ul className="space-y-3 mb-8 relative z-10">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Оценка эффективности лечения</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Коррекция дозировок и схем</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Контроль ЧСС и АД</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Рекомендации по образу жизни</span>
                </li>
              </ul>

              <Button
                onClick={scrollToBooking}
                className="w-full py-6 text-lg bg-white text-emerald-700 hover:bg-slate-50 relative z-10"
              >
                Записаться
              </Button>

              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            </div>

            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-emerald-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="text-center mb-6 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                  Аритмология и устройства
                </h3>
                <div className="text-4xl font-bold text-white drop-shadow-2xl mb-2">Индивидуально</div>
                <p className="text-white/95 drop-shadow">ЭКС/ИКД, подготовка к РЧА</p>
              </div>

              <ul className="space-y-3 mb-8 relative z-10">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-300 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Показания к имплантации ЭКС/ИКД</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-300 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Разбор данных устройств</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-300 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Подготовка и контроль после РЧА</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-300 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Ведение сложных случаев аритмий</span>
                </li>
              </ul>

              <Button
                onClick={scrollToBooking}
                className="w-full py-6 text-lg bg-emerald-500 text-white hover:bg-emerald-400 relative z-10"
              >
                Записаться
              </Button>

              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl" />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl" />
            </div>
          </div>

          <div className="mt-12 text-center text-slate-600">
            <p className="text-sm">
              * Прием платный, ДМС не принимается. Стоимость и доступность услуг уточняйте при записи.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
