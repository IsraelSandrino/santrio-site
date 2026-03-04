"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Wrench,
  UserMinus,
  ArrowsLeftRight,
  XCircle,
} from "@phosphor-icons/react";

const problems = [
  {
    icon: Wrench,
    title: "Tarefas manuais, atrasos e retrabalhos",
    description:
      "Operação travada por trabalho manual. Atividades repetitivas consomem tempo e geram erros desnecessários.",
  },
  {
    icon: UserMinus,
    title: "Dependência excessiva de pessoas-chave",
    description:
      "Processos presos a indivíduos. Quando alguém sai ou falha, a operação inteira desacelera.",
  },
  {
    icon: ArrowsLeftRight,
    title: "Informações quebradas entre setores",
    description:
      "Dados não fluem entre equipes. Cada área opera isolada, criando ruído e decisões desalinhadas.",
  },
  {
    icon: XCircle,
    title: "Vendas fecham, mas a execução se perde",
    description:
      "Processos quebram após o fechamento. O comercial vende, mas a operação não acompanha e o cliente sente.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Problems() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre" className="py-28 px-6 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full bg-[rgba(79,26,214,0.04)] blur-[100px]" />
      </div>

      <div className="max-w-[1100px] mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-[640px]"
        >
          <p
            className="text-xs uppercase tracking-widest text-[rgba(26,255,117,0.7)] mb-4"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Dores
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#F9F9F9] leading-tight mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            O problema não é falta de vendas.{" "}
            <span className="italic text-[#ABABAB]">
              É falta de operação.
            </span>
          </h2>
          <p
            className="text-[#ABABAB] text-base leading-relaxed"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Quantas vendas você perdeu este mês por falha de execução?
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {problems.map((prob, i) => {
            const Icon = prob.icon;
            return (
              <motion.div
                key={i}
                variants={item}
                className="group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-[rgba(26,255,117,0.07)] border border-[rgba(26,255,117,0.1)] group-hover:bg-[rgba(26,255,117,0.12)] transition-colors">
                    <Icon
                      size={20}
                      weight="duotone"
                      className="text-[rgba(26,255,117,0.8)]"
                    />
                  </div>
                  <div>
                    <h3
                      className="text-[#F9F9F9] font-semibold text-base mb-2"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {prob.title}
                    </h3>
                    <p
                      className="text-[#ABABAB] text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {prob.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}