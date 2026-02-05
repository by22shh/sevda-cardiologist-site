"use client";

import { MessageCircle, Phone, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const phone = "+79039974183";
const phoneDisplay = "+7 903 997-41-83";
const whatsappLink = "https://wa.me/79039974183";
const telegramLink = "https://t.me/+79039974183";

export default function Contact() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Связаться со мной</h2>
          <p className="text-xl text-slate-300 mb-12">
            Онлайн-консультации. Выберите удобный способ связи
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 min-h-[220px] h-full flex flex-col items-center justify-center text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-emerald-300 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">Telegram</h3>
                <p className="text-slate-300 text-sm">по номеру телефона</p>
                <p className="text-slate-100 text-sm mt-1">{phoneDisplay}</p>
              </div>
            </a>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 min-h-[220px] h-full flex flex-col items-center justify-center text-center">
                <Phone className="w-12 h-12 mx-auto mb-4 text-green-400 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                <p className="text-slate-300 text-sm">по номеру телефона</p>
                <p className="text-slate-100 text-sm mt-1">{phoneDisplay}</p>
              </div>
            </a>

            <a href={`tel:${phone}`} className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 min-h-[220px] h-full flex flex-col items-center justify-center text-center">
                <PhoneCall className="w-12 h-12 mx-auto mb-4 text-sky-300 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">Позвонить</h3>
                <p className="text-slate-300 text-sm">по номеру телефона</p>
                <p className="text-slate-100 text-sm">{phoneDisplay}</p>
              </div>
            </a>
          </div>

          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Запишитесь на консультацию</h3>
            <p className="text-lg mb-8 opacity-90">
              Мы согласуем формат и время онлайн-приема, а также подскажем, какие документы подготовить.
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
