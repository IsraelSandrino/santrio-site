"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkle } from "@phosphor-icons/react";

const integrations = [
  "Zapier", "Pipedrive", "n8n", "Mailchimp", "WhatsApp", "HubSpot",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[rgba(26,255,117,0.04)] blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-[rgba(79,26,214,0.06)] blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 text-center flex flex-col items-center">
        {/* Announcement pill */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(26,255,117,0.2)] bg-[rgba(26,255,117,0.06)] text-[#1AFF75] text-xs font-medium"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <Sparkle size={13} weight="fill" />
          Novo: Assistente de IA com memória contextual
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          <span className="text-[#F9F9F9]">Estruturamos e</span>
          <br />
          <span className="italic text-[rgba(26,255,117,0.85)]">
            automatizamos
          </span>{" "}
          <span className="text-[#F9F9F9]">sua</span>
          <br />
          <span className="text-[#F9F9F9]">operação</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="max-w-[600px] text-base md:text-lg text-[#ABABAB] leading-relaxed mb-10"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Conectamos pré-vendas, vendas, financeiro, jurídico, serviços e
          pós-venda com tecnologia e IA aplicada — para que sua empresa escale
          sem virar refém de processos manuais.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="flex flex-col sm:flex-row gap-3 items-center mb-16"
        >
          <a
            href="#diagnostico"
            className="group flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#020202] bg-[#1AFF75] hover:bg-[#0de864] transition-all duration-200 shadow-[0_0_24px_rgba(26,255,117,0.3)]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Mapear minha operação
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
          <a
            href="#metodologia"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-[#C7C7C7] border border-white/10 hover:border-white/20 hover:text-[#F9F9F9] transition-all duration-200 bg-white/[0.03]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Ver como funciona
          </a>
        </motion.div>

        {/* Integrations strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="flex flex-col items-center gap-4"
        >
          <p
            className="text-xs text-[#ABABAB] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Integrado com potências globais como
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {integrations.map((name) => (
              <span
                key={name}
                className="px-3 py-1.5 rounded-lg text-xs text-[#ABABAB] border border-white/8 bg-white/[0.02]"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020202] to-transparent" />
    </section>
  );
}