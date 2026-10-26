import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({
  variable: "--font-body",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "Espaço para Eventos | Área externa com vista para o rio em São Leopoldo/RS",
  description:
    "Espaço amplo ao ar livre no centro de São Leopoldo/RS, pertinho da rodoviária. Churrasqueira, piscina, mesas e cadeiras para 40 pessoas, Wi-Fi, estacionamento e som liberado. Espaço para até 100 convidados. Reserve sua data pelo WhatsApp.",
  keywords: [
    "espaço para eventos",
    "locação para festas",
    "São Leopoldo",
    "centro de São Leopoldo",
    "rodoviária São Leopoldo",
    "churrasqueira",
    "piscina",
    "eventos ao ar livre",
  ],
  openGraph: {
    title: "Espaço para Eventos | São Leopoldo/RS",
    description:
      "Área externa ampla em meio à natureza com vista para o rio. Churrasqueira, piscina, Wi-Fi e espaço para até 100 convidados.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${karla.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
