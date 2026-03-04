"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "@phosphor-icons/react";

const faqs = [
  {
    question: "A Santrio é um software ou um serviço?",
    answer:
      "A Santrio é uma metodologia aplicada. Utilizamos tecnologia, automações e IA para estruturar processos reais da sua operação, não apenas fornecer uma ferramenta isolada.",
  },
  {
    question: "Isso serve para qualquer tipo de empresa?",
    answer:
      "Atendemos empresas com volume real de operação — seja no comercial, atendimento ou execução. Funciona bem para serviços, saúde, tecnologia e operações B2B. Se você tem processo manual repetível, provavelmente há automação a aplicar.",
  },
  {
    question: "Vocês substituem minha equipe?",
    answer:
      "Não. A Santrio estrutura e automatiza processos para que sua equipe seja mais produtiva e previsível — não para substituí-la. O objetivo é libertar pessoas de tarefas manuais e repetitivas.",
  },
  {
    question: "Quanto tempo leva para começar a ver resultado?",
    answer:
      "Depende da complexidade e do escopo. Em geral, o diagnóstico acontece nas primeiras semanas, e as primeiras automações entram em produção entre 30 e 60 dias após o início.",
  },
  {
    question: "Vocês trabalham com as ferramentas que eu já uso?",
    answer:
      "Sim. Nossa abordagem é integrativa — trabalhamos com o que você já tem e só sugerimos mudança quando faz sentido real para a operação.",
  },
  {
    question: "Existe um modelo pronto ou tudo é personalizado?",
    answer:
      "Temos frameworks e padrões que aceleramos a implementação, mas toda solução é adaptada ao contexto real da sua operação. Não entregamos templates genéricos.",
  },
];

function FAQItem({
  faq,
  index,
  isOpen,
  toggle,
}: {
  faq: { question: string; answer: string };
  index: number;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span
          className={`text-sm font-medium transition-colors ${
            isOpen ? "text-[#F9F9F9]" : "text-[#C7C7C7] group-hover:text-[#F9F9F9]"
          }`}
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {faq.question}
        </span>
        <div
          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
            isOpen
              ? "bg-[rgba(26,255,117,0.15)] text-[#1AFF75]"
              : "bg-white/[0.05] text-[#ABABAB]"
          }`}
        >
          {isOpen ? <Minus size={12} weight="bold" /> : <Plus size={12} weight="bold" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="text-[#ABABAB] text-sm leading-relaxed pb-5"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-[rgba(79,26,214,0.04)] blur-[120px]" />
      </div>

      <div className="max-w-[1100px] mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-xs uppercase tracking-widest text-[rgba(26,255,117,0.7)] mb-4"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              FAQs
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#F9F9F9] leading-tight mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Você perguntou,{" "}
              <span className="italic text-[rgba(26,255,117,0.85)]">
                nós respondemos
              </span>
            </h2>
            <p
              className="text-[#ABABAB] text-base leading-relaxed"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Ainda tem dúvidas? Entre em contato com nossa equipe de suporte,
              disponível 7 dias por semana.
            </p>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                toggle={() => toggle(i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}