import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Santrio Operations Lab",
  description:
    "Consultoria operacional para laboratórios clínicos. Diagnóstico, estratégia e implementação para maximizar a rentabilidade do seu laboratório.",
  keywords: [
    "consultoria laboratório",
    "gestão laboratorial",
    "faturamento laboratorial",
    "glosas laboratório",
    "operações laboratoriais",
    "rentabilidade laboratório",
  ],
  authors: [{ name: "Santrio Operations Lab" }],
  openGraph: {
    title: "Santrio Operations Lab",
    description:
      "Seu laboratório fatura, mas não lucra? Diagnosticamos e corrigimos os gargalos operacionais.",
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
    <html lang="pt-BR" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-santrio-bg text-santrio-dark">
        {children}
      </body>
    </html>
  );
}