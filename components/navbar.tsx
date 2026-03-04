"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Como Funciona", href: "#metodologia" },
  { label: "Para Quem", href: "#adesao" },
  { label: "Casos", href: "#aplicacao" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(2,2,2,0.85)] backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-[rgba(26,255,117,0.15)] border border-[rgba(26,255,117,0.3)] flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-sm bg-[#1AFF75]" />
            </div>
            <span
              style={{ fontFamily: "var(--font-sans)" }}
              className="text-[#F9F9F9] font-semibold text-sm tracking-tight"
            >
              Santrio
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#ABABAB] hover:text-[#F9F9F9] text-sm transition-colors duration-200"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#diagnostico"
              className="px-4 py-2 rounded-lg text-sm font-medium text-[#020202] bg-[#1AFF75] hover:bg-[#0de864] transition-colors duration-200"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Solicitar Diagnóstico
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#F9F9F9] p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0D0D0D] border-b border-white/5 px-6 py-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[#C7C7C7] hover:text-[#F9F9F9] text-base py-1"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#diagnostico"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-4 py-3 rounded-lg text-sm font-semibold text-center text-[#020202] bg-[#1AFF75]"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Solicitar Diagnóstico
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}