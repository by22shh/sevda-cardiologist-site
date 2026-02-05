"use client";

import { useState } from "react";
import { Phone, X } from "lucide-react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-8 z-50">
      <div
        className={`mb-4 space-y-3 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <a
          href="tel:+73833730003"
          className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Phone className="w-5 h-5" />
          <span className="font-medium whitespace-nowrap">Санитас</span>
        </a>

        <a
          href="tel:+73833630183"
          className="flex items-center gap-3 bg-sky-600 hover:bg-sky-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Phone className="w-5 h-5" />
          <span className="font-medium whitespace-nowrap">ЦНМТ</span>
        </a>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        aria-label={isOpen ? "Закрыть контакты" : "Открыть контакты"}
      >
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <Phone className="w-7 h-7" />
        )}
      </button>
    </div>
  );
}
