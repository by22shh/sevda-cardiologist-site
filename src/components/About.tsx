"use client";

import { BadgeCheck, Building2, GraduationCap, HeartPulse } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const education = [
  {
    year: "2008",
    title: "НГМУ, лечебное дело",
  },
  {
    year: "2009",
    title: "Интернатура по терапии (Новосибирск)",
  },
  {
    year: "2011",
    title: "Ординатура по кардиологии, НМИЦ им. ак. Е.Н. Мешалкина",
  },
  {
    year: "2015",
    title: "Аспирантура по кардиологии, НМИЦ им. ак. Е.Н. Мешалкина",
  },
  {
    year: "2016",
    title: "Повышение квалификации по кардиологии, НГМУ",
  },
];

const experience = [
  {
    period: "Более 17 лет",
    title: "Практика в кардиологии и аритмологии",
  },
  {
    period: "2011–2021",
    title: "НМИЦ им. ак. Е.Н. Мешалкина — врач-аритмолог, младший научный сотрудник",
  },
  {
    period: "Опыт работы",
    title: "Клиника «Санитас» (Новосибирск)",
  },
  {
    period: "Опыт работы",
    title: "Центр новых медицинских технологий (ЦНМТ), Новосибирск",
  },
];

const expertise = [
  "Диагностика и лечение всех видов аритмий",
  "Подбор и коррекция антиаритмической терапии",
  "Подготовка к РЧА и имплантации ЭКС/ИКД",
  "Консультации по ведению пациентов после операций на сердце",
  "Кардиомиопатии, сердечная недостаточность, ИБС",
  "Разбор обследований и рекомендаций",
];

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Soft background elements */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image section */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-300 to-sky-300 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-200 to-sky-200 rounded-2xl opacity-30" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <div className="aspect-[4/5] bg-gradient-to-br from-emerald-50 via-white to-sky-50 flex items-center justify-center relative overflow-hidden">
                  {!imageError ? (
                    <div className="absolute inset-0">
                      <Image
                        src="/images/sevda-photo.jpg"
                        alt="Байрамова Севда Афгановна"
                        fill
                        className="object-cover object-center"
                        priority
                        onError={() => setImageError(true)}
                      />
                    </div>
                  ) : (
                    <div className="text-center p-8 relative z-10">
                      <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-500 via-teal-500 to-sky-500 flex items-center justify-center shadow-2xl ring-4 ring-white ring-offset-4 ring-offset-emerald-50">
                        <span className="text-6xl font-bold text-white drop-shadow-lg">СБ</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">
                        Байрамова Севда Афгановна
                      </h3>
                      <p className="text-slate-600 font-medium">Кардиолог-аритмолог</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="absolute -z-10 top-0 -right-8 w-24 h-24 bg-gradient-to-br from-emerald-300 to-sky-300 rounded-full blur-2xl opacity-40" />
              <div className="absolute -z-10 bottom-0 -left-8 w-32 h-32 bg-gradient-to-br from-sky-300 to-emerald-300 rounded-full blur-2xl opacity-40" />
            </div>

            {/* Content section */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                О враче
              </h2>
              <div className="space-y-4 text-lg text-slate-600 mb-8">
                <p>
                  <strong className="text-slate-800">Байрамова Севда Афгановна</strong> —
                  врач-кардиолог и аритмолог с опытом более 17 лет, кандидат медицинских наук.
                  Специализируется на диагностике и лечении нарушений ритма сердца у взрослых
                  пациентов, в том числе сложных случаев без хирургического вмешательства.
                </p>
                <p>
                  Проводит онлайн-консультации для взрослых пациентов. Комплексно оценивает
                  состояние, анализирует медицинские документы и выстраивает индивидуальный
                  план лечения и профилактики.
                </p>
                <p className="text-slate-500">
                  В документах может встречаться девичья фамилия <strong>Колотовкина</strong>.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="w-6 h-6 text-emerald-700" />
                    <h3 className="text-lg font-semibold text-slate-900">Образование</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {education.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-emerald-700 font-semibold">{item.year}</span>
                        <span>{item.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="w-6 h-6 text-emerald-700" />
                    <h3 className="text-lg font-semibold text-slate-900">Опыт работы</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {experience.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-emerald-700 font-semibold">{item.period}</span>
                        <span>{item.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-100 bg-gradient-to-r from-emerald-50 to-sky-50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <HeartPulse className="w-6 h-6 text-emerald-700" />
                  <h3 className="text-lg font-semibold text-slate-900">Ключевые компетенции</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
                  {expertise.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <BadgeCheck className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  Аккредитация по специальности «Кардиология» действительна до 10 декабря 2030 года.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
