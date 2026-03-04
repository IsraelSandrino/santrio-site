"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, XCircle } from "@phosphor-icons/react";

const goodFit = [
  {
    title: "Atendimento é gargalo",
    description:
      "Mais oportunidades tratadas no tempo certo e um funil mais previsível para o time comercial.",
  },
  {
    title: "Existe volume real",
    description:
      "Você lida com pedidos, dúvidas, orçamentos ou agendamentos todos os dias.",
  },
  {
    title: "Processo já existe, mas é manual",
    description: "A equipe faz o trabalho certo, só que no braço e sem padrão.",
  },
  {
    title: "Você precisa de previsibilidade",
    description:
      "Quer controlar o funil e a execução com rotina, SLAs e acompanhamento.",
  },
  {
    title: "Integrações são parte da solução",
    description:
      "Seus sistemas não conversam entre si e isso gera retrabalho e ruído.",
  },
  {
    title: "Quer escalar sem virar refém",
    description:
      "O crescimento não pode depender de uma ou duas pessoas-chave.",
  },
];

const badFit = [
  {
    title: "Sem volume de demanda",
    description:
      "Se chegam poucos contatos, primeiro é aquisição e oferta, não automação.",
  },
  {
    title: 'Você quer "só um chatbot"',
    description:
      "Aqui é operação: fluxo, integração, padronização e acompanhamento.",
  },
  {
    title: "Sem dono do processo",
    description:
      "Se ninguém lidera execução e rotina, o sistema não se sustenta.",
  },
  {
    title: "Resistência total a mudança",
    description:
      "Se o time não topa ajustar rotina, nada escala com consistência.",
  },
  {
    title: "Busca resultado sem base",
    description:
      "Sem diagnóstico e desenho do sistema, vira remendo e retrabalho.",
  },
  {
    title: 'Precisa de algo "genérico"',
    description: "Se você quer algo pronto sem adaptação à sua operação.",
  },
];

export default function Qualification() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="adesao" className="py-28 px-6 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[rgba(26,255,117,0.02)] blur-[120px]" />
      </div>

      <div className="max-w-[1100px] mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-[620px] mx-auto"
        >
          <p
            className="text-xs uppercase tracking-widest text-[rgba(26,255,117,0.7)] mb-4"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Adesão
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#F9F9F9] leading-tight mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            O momento certo para{" "}
            <span className="italic text-[rgba(26,255,117,0.85)]">
              estruturar a operação
            </span>
          </h2>
          <p
            className="text-[#ABABAB] text-base"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Se você reconhece estes sinais, sua operação está pronta para
            organizar, automatizar e escalar.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Good fit */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-6 rounded-full bg-[rgba(26,255,117,0.15)] flex items-center justify-center">
                <CheckCircle size={14} weight="fill" className="text-[#1AFF75]" />
              </div>
              <h3
                className="text-[#F9F9F9] font-semibold text-base"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Faz sentido se ...
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              {goodFit.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-[rgba(26,255,117,0.1)] bg-[rgba(26,255,117,0.03)]"
                >
                  <CheckCircle
                    size={16}
                    weight="fill"
                    className="text-[rgba(26,255,117,0.7)] mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <p
                      className="text-[#F9F9F9] text-sm font-medium mb-0.5"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="text-[#ABABAB] text-xs leading-relaxed"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bad fit */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-6 rounded-full bg-[rgba(255,100,100,0.1)] flex items-center justify-center">
                <XCircle size={14} weight="fill" className="text-[rgba(255,100,100,0.7)]" />
              </div>
              <h3
                className="text-[#F9F9F9] font-semibold text-base"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Não faz sentido se ...
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              {badFit.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.05] bg-white/[0.015]"
                >
                  <XCircle
                    size={16}
                    weight="fill"
                    className="text-[rgba(255,100,100,0.5)] mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <p
                      className="text-[#C7C7C7] text-sm font-medium mb-0.5"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="text-[#ABABAB] text-xs leading-relaxed"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}