"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FunnelSimple,
  ChatCircleDots,
  GitMerge,
  CalendarCheck,
  CheckCircle,
  ChartLine,
} from "@phosphor-icons/react";

const solutions = [
  {
    step: "01",
    label: "Entrada",
    title: "Entrada e qualificação de leads",
    description:
      "Da captação ao primeiro contato, organizamos e priorizamos oportunidades automaticamente.",
    icon: FunnelSimple,
  },
  {
    step: "02",
    label: "Follow-up",
    title: "Follow-up e retomada de negociações",
    description:
      "Fluxos automáticos que mantêm o contato ativo e recuperam oportunidades perdidas.",
    icon: ChatCircleDots,
  },
  {
    step: "03",
    label: "Integração",
    title: "Integração entre sistemas e equipes",
    description:
      "Eliminamos silos de informação e garantimos fluidez entre setores e ferramentas.",
    icon: GitMerge,
  },
  {
    step: "04",
    label: "Agendamento",
    title: "Agendamento inteligente",
    description:
      "Automatizamos marcações, confirmações e reagendamentos integrados à agenda da operação.",
    icon: CalendarCheck,
  },
  {
    step: "05",
    label: "Execução",
    title: "Execução pós-venda",
    description:
      "Transformamos vendas em ações operacionais claras, conectando áreas e responsabilidades.",
    icon: CheckCircle,
  },
  {
    step: "06",
    label: "Controle",
    title: "Controle e visibilidade operacional",
    description:
      "Centralizamos dados e eventos para acompanhamento contínuo da operação.",
    icon: ChartLine,
  },
];

export default function Solutions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <section id="solucoes" className="py-28 px-6 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[rgba(26,255,117,0.03)] blur-[120px]" />
      </div>

      <div className="max-w-[1100px] mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-[600px] mx-auto"
        >
          <p
            className="text-xs uppercase tracking-widest text-[rgba(26,255,117,0.7)] mb-4"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Soluções
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#F9F9F9] leading-tight mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Processos que{" "}
            <span className="italic text-[rgba(26,255,117,0.85)]">
              automatizamos
            </span>{" "}
            para organizar e escalar sua operação
          </h2>
          <p
            className="text-[#ABABAB] text-sm"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Timeline de maturidade operacional
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: steps list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-2"
          >
            {solutions.map((sol, i) => {
              const Icon = sol.icon;
              const isActive = active === i;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`text-left p-4 rounded-xl border transition-all duration-250 ${
                    isActive
                      ? "border-[rgba(26,255,117,0.25)] bg-[rgba(26,255,117,0.05)]"
                      : "border-white/[0.05] bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive
                          ? "bg-[rgba(26,255,117,0.15)] text-[#1AFF75]"
                          : "bg-white/[0.05] text-[#ABABAB]"
                      }`}
                    >
                      <Icon size={18} weight="duotone" />
                    </div>
                    <div>
                      <span
                        className={`text-xs font-medium uppercase tracking-wide block mb-0.5 ${
                          isActive
                            ? "text-[rgba(26,255,117,0.7)]"
                            : "text-[#ABABAB]"
                        }`}
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {sol.label}
                      </span>
                      <span
                        className={`text-sm font-semibold ${
                          isActive ? "text-[#F9F9F9]" : "text-[#C7C7C7]"
                        }`}
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {sol.title}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* Right: detail card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:sticky lg:top-24 self-start"
          >
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="p-8 rounded-2xl border border-white/[0.08] bg-[#0D0D0D] min-h-[280px] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[rgba(26,255,117,0.1)] border border-[rgba(26,255,117,0.15)] flex items-center justify-center">
                    {(() => {
                      const Icon = solutions[active].icon;
                      return (
                        <Icon
                          size={24}
                          weight="duotone"
                          className="text-[#1AFF75]"
                        />
                      );
                    })()}
                  </div>
                  <span
                    className="text-5xl font-light text-white/5"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {solutions[active].step}
                  </span>
                </div>
                <h3
                  className="text-xl font-semibold text-[#F9F9F9] mb-3"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {solutions[active].title}
                </h3>
                <p
                  className="text-[#ABABAB] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {solutions[active].description}
                </p>
              </div>

              {/* Progress dots */}
              <div className="flex gap-1.5 mt-8">
                {solutions.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === active
                        ? "w-6 bg-[#1AFF75]"
                        : "w-1.5 bg-white/15 hover:bg-white/25"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}