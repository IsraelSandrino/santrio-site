"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="diagnostico" className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden border border-[rgba(26,255,117,0.12)] bg-[#0A0A0A] p-10 md:p-16 text-center"
        >
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[rgba(26,255,117,0.06)] blur-[100px]" />
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[rgba(79,26,214,0.06)] blur-[80px]" />
            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10 max-w-[680px] mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(26,255,117,0.2)] bg-[rgba(26,255,117,0.07)] text-[#1AFF75] text-xs font-medium mb-6"
              style={{ fontFamily: "var(--font-sans)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1AFF75] animate-pulse" />
              Santrio Operations Lab
            </div>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#F9F9F9] leading-tight mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Entenda sua operação{" "}
              <span className="italic text-[rgba(26,255,117,0.85)]">
                com clareza real.
              </span>
            </h2>

            <p
              className="text-[#ABABAB] text-base md:text-lg leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Um diagnóstico claro para organizar, integrar e escalar sua
              operação com método.
            </p>

            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-[#020202] bg-[#1AFF75] hover:bg-[#0de864] transition-all duration-200 shadow-[0_0_40px_rgba(26,255,117,0.35)]"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Agendar diagnóstico
              <ArrowRight
                size={18}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}