"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const WORKER_URL = "https://dawn-dew-f1eb.by22shh.workers.dev";

      const response = await fetch(WORKER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        const data = await response.json();
        setStatus("error");
        setErrorMessage(data.error || "Произошла ошибка при отправке");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Произошла ошибка при отправке. Попробуйте позже.");
    }
  };

  return (
    <section id="booking" className="py-24 bg-gradient-to-b from-emerald-50/40 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute top-10 right-10 text-7xl font-serif text-emerald-900/40">♥</div>
        <div className="absolute bottom-10 left-10 text-6xl font-serif text-emerald-900/30">⎯</div>
        <div className="absolute top-1/2 left-1/4 text-6xl font-serif text-emerald-600/30">+</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Записаться на онлайн-консультацию
            </h2>
            <p className="text-xl text-slate-600">
              Оставьте заявку, и мы свяжемся с вами для подтверждения времени видеоконсультации
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-emerald-100">
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Заявка отправлена!</h3>
                <p className="text-slate-600 text-lg">
                  Спасибо за обращение! Мы свяжемся с вами в ближайшее время.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    ФИО <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 text-base"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Номер телефона <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 text-base"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 text-base"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Сообщение <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Опишите жалобы, удобное время и формат связи (Zoom/Meet/WhatsApp)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="text-base resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                    {errorMessage}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      Отправить заявку
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>

                <p className="text-sm text-slate-500 text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
                <p className="text-xs text-slate-400 text-center">
                  Принимаются пациенты 18+. При острых состояниях обращайтесь в скорую помощь.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
