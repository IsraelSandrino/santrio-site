"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Briefcase,
  Headset,
  Gear,
} from "@phosphor-icons/react";

const cases = [
  {
    label: "Comercial",
    icon: Briefcase,
    scenario:
      "Leads chegam por diferentes canais e o time perde timing, contexto e previsibilidade no avanço do funil.",
    result:
      "Mais oportunidades tratadas no tempo certo e um funil mais previsível para o time comercial.",
    automations: [
      "Entrada e qualificação",
      "Agendamento Inteligente",
      "Follow-up e retomada",
    ],
  },
  {
    label: "Atendimento",
    icon: Headset,
    scenario:
      "Equipe sobrecarregada respondendo as mesmas dúvidas manualmente, sem padrão e sem histórico.",
    result:
      "Atendimento automatizado para casos recorrentes, com escalonamento inteligente para a equipe humana.",
    automations: [
      "Triagem automática",
      "Respostas inteligentes",
      "Escalonamento por contexto",
    ],
  },
  {
    label: "Operações Comerciais",
    icon: Gear,
    scenario:
      "Fechamento da venda não conecta com o time de execução — cada handoff é manual, lento e sujeito a erro.",
    result:
      "Handoff automatizado entre comercial e operações, com dados completos e SLAs definidos.",
    automations: [
      "Handoff comercial→ops",
      "Criação de tarefas automática",
      "Acompanhamento de SLA",
    ],
  },
];

export default function Application() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <section id="aplicacao" className="py-28 px-6 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[400px] rounded-full bg-[rgba(79,26,214,0.04)] blur-[120px]" />
      </div>

      <div className="max-w-[1100px] mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-[580px]"
        >
          <p
            className="text-xs uppercase tracking-widest text-[rgba(26,255,117,0.7)] mb-4"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Aplicação
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#F9F9F9] leading-tight mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Como isso se aplica em{" "}
            <span className="italic text-[rgba(26,255,117,0.85)]">
              operações reais
            </span>
          </h2>
          <p
            className="text-[#ABABAB] text-base leading-relaxed"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Exemplos práticos de como a automação se encaixa na rotina da sua
            empresa sem criar complexidade.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-2 mb-8 flex-wrap"
        >
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active === i
                    ? "bg-[rgba(26,255,117,0.1)] border border-[rgba(26,255,117,0.25)] text-[#1AFF75]"
                    : "border border-white/[0.06] text-[#ABABAB] hover:text-[#F9F9F9] hover:border-white/12"
                }`}
                style={{ fontFamily: "var(--font-sans)" }}
              >
                <Icon size={15} weight="duotone" />
                {c.label}
              </button>
            );
          })}
        </motion.div>

        {/* Content */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Scenario */}
          <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
            <p
              className="text-xs uppercase tracking-widest text-[#ABABAB] mb-3"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Cenário
            </p>
            <p
              className="text-[#C7C7C7] text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {cases[active].scenario}
            </p>
          </div>

          {/* Result */}
          <div className="p-6 rounded-2xl border border-[rgba(26,255,117,0.12)] bg-[rgba(26,255,117,0.03)]">
            <p
              className="text-xs uppercase tracking-widest text-[rgba(26,255,117,0.6)] mb-3"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Resultado
            </p>
            <p
              className="text-[#F9F9F9] text-sm leading-relaxed mb-4"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {cases[active].result}
            </p>
            <div className="flex flex-wrap gap-2">
              {cases[active].automations.map((a, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs text-[rgba(26,255,117,0.8)] border border-[rgba(26,255,117,0.2)] bg-[rgba(26,255,117,0.05)]"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <a
            href="#metodologia"
            className="inline-flex items-center gap-2 text-sm text-[#ABABAB] hover:text-[#F9F9F9] transition-colors"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Entenda o método completo e o que muda na prática dentro da sua
            operação.{" "}
            <span className="text-[#1AFF75]">Ver como funciona →</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}