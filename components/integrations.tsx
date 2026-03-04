"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";

const integrations = [
  { name: "n8n", description: "Automação de fluxos" },
  { name: "Zapier", description: "Conexão de apps" },
  { name: "Pipedrive", description: "CRM de vendas" },
  { name: "HubSpot", description: "Marketing & CRM" },
  { name: "Mailchimp", description: "Email marketing" },
  { name: "WhatsApp", description: "Comunicação" },
  { name: "Google Sheets", description: "Planilhas" },
  { name: "Notion", description: "Documentação" },
  { name: "Slack", description: "Time interno" },
  { name: "Typeform", description: "Formulários" },
  { name: "Stripe", description: "Pagamentos" },
  { name: "Webhooks", description: "APIs REST" },
];

export default function Integrations() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 right-0 w-[500px] h-[400px] rounded-full bg-[rgba(26,255,117,0.03)] blur-[100px]" />
      </div>

      <div className="max-w-[1100px] mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Right: grid of integrations */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-3 gap-3">
              {integrations.map((int, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                  className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-[rgba(26,255,117,0.15)] hover:bg-[rgba(26,255,117,0.03)] transition-all duration-200 text-center cursor-default"
                >
                  <p
                    className="text-[#F9F9F9] text-xs font-semibold mb-0.5"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {int.name}
                  </p>
                  <p
                    className="text-[#ABABAB] text-[10px]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {int.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <p
              className="text-xs uppercase tracking-widest text-[rgba(26,255,117,0.7)] mb-4"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Integrações
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#F9F9F9] leading-tight mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Integre-se{" "}
              <span className="italic text-[rgba(26,255,117,0.85)]">
                perfeitamente.
              </span>
            </h2>
            <p
              className="text-[#ABABAB] text-base leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Conecte-se facilmente às suas ferramentas favoritas. Seja seu
              CRM, plataforma de e-mail marketing ou ferramenta de
              gerenciamento de projetos, nós temos a solução ideal para você.
            </p>
            <a
              href="#diagnostico"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#1AFF75] hover:text-[#F9F9F9] transition-colors group"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Saber mais
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}