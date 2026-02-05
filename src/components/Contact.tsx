"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Контакты и адреса</h2>
          <p className="text-xl text-slate-300 mb-12">
            Запись доступна по телефону и через онлайн-форму
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-left">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-emerald-300" />
                <h3 className="text-xl font-semibold">Клиника «Санитас»</h3>
              </div>
              <p className="text-slate-200 mb-4">Новосибирск, ул. Восход, 28</p>
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-5 h-5 text-emerald-300" />
                <a href="tel:+73833730003" className="text-white hover:text-emerald-200">
                  +7 (383) 373-00-03
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Clock className="w-5 h-5 text-emerald-300" />
                <span>Ежедневно 8:00–20:00</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-left">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-sky-300" />
                <h3 className="text-xl font-semibold">ЦНМТ</h3>
              </div>
              <p className="text-slate-200 mb-4">Новосибирск, ул. Пирогова, 25/4</p>
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-5 h-5 text-sky-300" />
                <a href="tel:+73833630183" className="text-white hover:text-sky-200">
                  +7 (383) 363-01-83
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-5 h-5 text-sky-300" />
                <a href="mailto:info@cnmt.ru" className="text-white hover:text-sky-200">
                  info@cnmt.ru
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Запишитесь на прием</h3>
            <p className="text-lg mb-8 opacity-90">
              Оставьте заявку и мы подберем удобное время консультации
            </p>
            <Button
              onClick={() => {
                document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              className="bg-white text-emerald-700 hover:bg-slate-100 px-8 py-6 text-lg rounded-xl shadow-lg"
            >
              Оставить заявку
            </Button>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-slate-400">
              © 2026 Байрамова Севда Афгановна. Кардиолог-аритмолог
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
