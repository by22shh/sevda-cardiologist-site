import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Кардиолог-аритмолог в Новосибирске | Байрамова Севда Афгановна",
  description:
    "Консультации кардиолога и аритмолога для взрослых. Диагностика и лечение нарушений ритма, подбор терапии, подготовка к РЧА и имплантации ЭКС/ИКД. Прием в клиниках Новосибирска.",
  keywords: [
    "кардиолог Новосибирск",
    "аритмолог",
    "нарушения ритма сердца",
    "консультация кардиолога",
    "ЭКС",
    "ИКД",
    "РЧА",
  ],
  authors: [{ name: "Байрамова Севда Афгановна" }],
  creator: "Байрамова Севда Афгановна",
  publisher: "Байрамова Севда Афгановна",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://same-228gzkhba51-latest.netlify.app",
    title: "Кардиолог-аритмолог в Новосибирске | Байрамова Севда Афгановна",
    description:
      "Диагностика и лечение аритмий, подбор антиаритмической терапии, подготовка к РЧА и имплантации ЭКС/ИКД. Прием взрослых пациентов.",
    siteName: "Кардиолог-аритмолог — Севда Байрамова",
  },
  twitter: {
    card: "summary_large_image",
    title: "Кардиолог-аритмолог в Новосибирске | Байрамова Севда Афгановна",
    description:
      "Консультации кардиолога и аритмолога. Диагностика нарушений ритма, подбор терапии, подготовка к РЧА и ЭКС/ИКД.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${playfair.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
