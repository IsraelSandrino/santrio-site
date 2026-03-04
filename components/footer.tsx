export default function Footer() {
  const columns = [
    {
      title: "Santrio",
      links: [
        { label: "Sobre nós", href: "#" },
        { label: "Carreiras", href: "#" },
        { label: "Contato", href: "#" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      title: "Soluções",
      links: [
        { label: "Atendentes IA", href: "#" },
        { label: "Qualificação de Leads", href: "#" },
        { label: "Automação WhatsApp", href: "#" },
        { label: "Integrações", href: "#" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { label: "Central de Ajuda", href: "#" },
        { label: "Status", href: "#" },
        { label: "Segurança", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Termos de Uso", href: "#" },
        { label: "Privacidade", href: "#" },
        { label: "LGPD", href: "#" },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-white/[0.05] bg-[#020202]">
      <div className="max-w-[1100px] mx-auto px-6 py-16">
        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-[rgba(26,255,117,0.15)] border border-[rgba(26,255,117,0.3)] flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-sm bg-[#1AFF75]" />
              </div>
              <span
                className="text-[#F9F9F9] font-semibold text-sm"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Santrio
              </span>
            </div>
            <p
              className="text-[#ABABAB] text-xs leading-relaxed max-w-[200px]"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Automatize a sua operação e escale suas vendas com inteligência
              artificial.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <p
                className="text-[#F9F9F9] text-xs font-semibold uppercase tracking-wider mb-4"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {col.title}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#ABABAB] text-xs hover:text-[#F9F9F9] transition-colors"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.05] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-[#ABABAB] text-xs"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            © 2025 Santrio Operations Lab. Todos os direitos reservados.
          </p>
          <p
            className="text-[#ABABAB] text-xs"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Created by{" "}
            <span className="text-[rgba(26,255,117,0.7)]">Israel Sandrino</span>
          </p>
        </div>
      </div>
    </footer>
  );
}