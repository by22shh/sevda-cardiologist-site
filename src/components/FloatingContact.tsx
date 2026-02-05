"use client";

import { Calendar } from "lucide-react";

export default function FloatingContact() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-24 right-8 z-50">
      <button
        onClick={scrollToBooking}
        className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        aria-label="Записаться на консультацию"
      >
        <Calendar className="w-7 h-7" />
      </button>
    </div>
  );
}
