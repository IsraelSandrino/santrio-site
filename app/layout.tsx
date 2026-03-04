import type { Metadata } from "next";
import { Open_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Santrio Operations Lab",
  description:
    "Estruturamos e automatizamos processos entre pré-vendas, vendas, financeiro, jurídico, serviços e pós-venda usando tecnologia e IA aplicada.",
  keywords: [
    "automação de processos",
    "inteligência artificial",
    "operações empresariais",
    "integração de sistemas",
    "agentes de IA",
    "Santrio",
  ],
  authors: [{ name: "Santrio Operations Lab" }],
  openGraph: {
    title: "Santrio Operations Lab",
    description:
      "Automatize a sua operação e escale suas vendas com inteligência artificial.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${openSans.variable} ${instrumentSerif.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}