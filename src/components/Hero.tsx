"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-emerald-50/60 to-sky-50">
      {/* Soft atmospheric blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-emerald-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-sky-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[360px] h-[360px] bg-teal-200/30 rounded-full blur-3xl" />
      </div>

      {/* EKG line */}
      <div className="absolute inset-x-0 top-16 opacity-30">
        <svg viewBox="0 0 1200 120" className="w-full h-24">
          <path
            d="M0 60h180l40-20 40 40 40-60 40 80 40-40h120l40 20 40-40 40 60 40-80 40 40h220"
            fill="none"
            stroke="#0f766e"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          {/* Text block */}
          <div>
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-emerald-200/70 shadow-sm mb-8 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
            >
              <HeartPulse className="w-4 h-4 text-emerald-700" />
              <span className="text-sm font-medium text-slate-700">
                Кардиолог • Аритмолог • Прием взрослых пациентов
              </span>
            </div>

            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 transition-all duration-700 delay-100 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-slate-900">Байрамова Севда Афгановна</span>
              <br />
              <span className="text-emerald-800">Кардиолог-аритмолог</span>
            </h1>

            <p
              className={`text-xl sm:text-2xl text-slate-600 mb-8 max-w-2xl leading-relaxed transition-all duration-700 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Диагностика и лечение нарушений ритма сердца, подбор антиаритмической терапии,
              подготовка к РЧА и имплантации ЭКС/ИКД. Прием в Новосибирске.
            </p>

            <div
              className={`flex flex-wrap gap-3 mb-10 transition-all duration-700 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-xl border border-emerald-200/60 shadow-sm">
                <Stethoscope className="w-4 h-4 text-emerald-700" />
                <span className="text-slate-700 font-medium">17+ лет практики</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-xl border border-emerald-200/60 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span className="text-slate-700 font-medium">Кандидат мед. наук</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-xl border border-emerald-200/60 shadow-sm">
                <HeartPulse className="w-4 h-4 text-emerald-700" />
                <span className="text-slate-700 font-medium">Аритмология</span>
              </div>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Button
                onClick={scrollToBooking}
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6 rounded-xl group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Записаться на прием
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToServices}
                className="bg-white/80 backdrop-blur-sm hover:bg-white border-2 border-slate-300 hover:border-emerald-400 text-slate-700 text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                Специализация и услуги
              </Button>
            </div>

            <div
              className={`grid grid-cols-3 gap-6 mt-12 max-w-lg transition-all duration-700 delay-500 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="text-left">
                <div className="text-3xl font-bold text-emerald-700">
                  <AnimatedCounter end={17} duration={2000} suffix="+" />
                </div>
                <div className="text-sm text-slate-600">лет опыта</div>
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-emerald-700">
                  <AnimatedCounter end={5} duration={2000} suffix=".0" />
                </div>
                <div className="text-sm text-slate-600">рейтинг</div>
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-emerald-700">
                  <AnimatedCounter end={35} duration={2000} suffix="+" />
                </div>
                <div className="text-sm text-slate-600">отзывов</div>
              </div>
            </div>
          </div>

          {/* Profile card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-200/60 to-sky-200/60 blur-2xl rounded-[40px]" />
            <div className="relative bg-white/85 backdrop-blur-sm border border-emerald-100 rounded-[32px] p-8 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-2xl font-semibold shadow-lg">
                  СБ
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">Севда Байрамова</p>
                  <p className="text-sm text-slate-600">Кардиолог-аритмолог</p>
                  <p className="text-sm text-emerald-700 font-medium">Кандидат мед. наук</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-emerald-100 p-4 bg-gradient-to-br from-white to-emerald-50">
                  <p className="text-sm text-slate-500">Возраст пациентов</p>
                  <p className="text-base font-semibold text-slate-900">18+</p>
                </div>
                <div className="rounded-2xl border border-emerald-100 p-4 bg-gradient-to-br from-white to-emerald-50">
                  <p className="text-sm text-slate-500">Первичный прием</p>
                  <p className="text-base font-semibold text-slate-900">от 3000 ₽</p>
                </div>
                <div className="rounded-2xl border border-emerald-100 p-4 bg-gradient-to-br from-white to-emerald-50">
                  <p className="text-sm text-slate-500">Клиники</p>
                  <p className="text-base font-semibold text-slate-900">Санитас, ЦНМТ</p>
                </div>
                <div className="rounded-2xl border border-emerald-100 p-4 bg-gradient-to-br from-white to-emerald-50">
                  <p className="text-sm text-slate-500">Направления</p>
                  <p className="text-base font-semibold text-slate-900">Аритмии, СН, ИБС</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl p-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                <p className="text-sm opacity-90">Аккредитация по кардиологии</p>
                <p className="text-lg font-semibold">действительна до 10 декабря 2030 года</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ end, duration, suffix = "" }: { end: number; duration: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}
