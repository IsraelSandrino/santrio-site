"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MagnifyingGlass,
  Blueprint,
  Hammer,
  TrendUp,
} from "@phosphor-icons/react";

const steps = [
  {
    number: "01",
    icon: MagnifyingGlass,
    title: "Diagnóstico",
    description:
      "Identificação de processos, gargalos e oportunidades de automação na sua operação real.",
  },
  {
    number: "02",
    icon: Blueprint,
    title: "Desenho da solução",
    description:
      "Definição da arquitetura do fluxo e dos agentes de IA adequados ao seu contexto.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Implementação",
    description:
      "Construção técnica, integrações, testes e validação com sua equipe.",
  },
  {
    number: "04",
    icon: TrendUp,
    title: "Otimização contínua",
    description:
      "Ajustes e evolução conforme métricas e crescimento do negócio.",
  },
];

export default function Methodology() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="metodologia" className="py-28 px-6 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full bg-[rgba(79,26,214,0.05)] blur-[120px]" />
      </div>

      <div className="max-w-[1100px] mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-xs uppercase tracking-widest text-[rgba(26,255,117,0.7)] mb-4"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Metodologia
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#F9F9F9] leading-tight mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Nossa metodologia para estruturar operações{" "}
              <span className="italic text-[rgba(26,255,117,0.85)]">
                eficientes
              </span>
            </h2>
            <p
              className="text-[#ABABAB] text-base leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              A metodologia Santrio não se limita a tecnologia. Ela existe para
              transformar a operação na prática — com processo, disciplina e
              resultado mensurável.
            </p>
            <a
              href="#diagnostico"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#1AFF75] hover:text-[#F9F9F9] transition-colors"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Saber mais →
            </a>
          </motion.div>

          {/* Right: Steps */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Connector line */}
            <div className="absolute left-[22px] top-10 bottom-10 w-px bg-gradient-to-b from-[rgba(26,255,117,0.3)] via-[rgba(79,26,214,0.2)] to-transparent" />

            <div className="flex flex-col gap-8">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-5"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#0D0D0D] border border-[rgba(26,255,117,0.2)] flex items-center justify-center z-10">
                      <Icon
                        size={20}
                        weight="duotone"
                        className="text-[rgba(26,255,117,0.8)]"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-xs font-mono text-[rgba(26,255,117,0.5)]"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          {step.number}
                        </span>
                        <h3
                          className="text-[#F9F9F9] font-semibold text-base"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <p
                        className="text-[#ABABAB] text-sm leading-relaxed"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}