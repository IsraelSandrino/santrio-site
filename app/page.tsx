export default function Home() {
  return (
    <main className="min-h-screen bg-santrio-bg">
      {/* Container centralizado */}
      <div className="max-w-container mx-auto px-container-px py-section">

        {/* Teste de tipografia */}
        <h1 className="font-heading text-display-lg font-bold text-santrio-dark mb-4">
          Santrio Operations Lab
        </h1>

        <p className="font-body text-body-lg text-santrio-text-secondary mb-8 max-w-content">
          Seu laboratório fatura, mas não lucra? Diagnosticamos e corrigimos
          os gargalos operacionais que drenam a rentabilidade do seu laboratório.
        </p>

        {/* Teste de botões */}
        <div className="flex gap-4 mb-12">
          <button className="bg-santrio-primary hover:bg-santrio-primary-hover text-white font-semibold px-8 py-4 rounded-2xl shadow-button-primary transition-all duration-300 hover:scale-105">
            Agendar Diagnóstico
          </button>

          <button className="bg-santrio-white text-santrio-dark font-semibold px-8 py-4 rounded-2xl border border-santrio-border shadow-button hover:shadow-card-hover transition-all duration-300">
            Saiba Mais
          </button>
        </div>

        {/* Teste de cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Diagnóstico",
              description: "Mapeamos todos os gargalos operacionais do seu laboratório.",
              color: "text-santrio-primary",
            },
            {
              title: "Estratégia",
              description: "Desenvolvemos um plano de ação personalizado e priorizado.",
              color: "text-santrio-success",
            },
            {
              title: "Implementação",
              description: "Executamos junto com sua equipe para garantir resultados.",
              color: "text-santrio-warning",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-santrio-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-santrio-border-light"
            >
              <h3 className={`font-heading text-heading-md font-bold mb-3 ${card.color}`}>
                {card.title}
              </h3>
              <p className="text-body-md text-santrio-text-secondary">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Teste de cores */}
        <div className="space-y-4">
          <h2 className="font-heading text-heading-lg font-bold text-santrio-dark">
            Paleta de Cores
          </h2>

          <div className="flex flex-wrap gap-3">
            <div className="w-20 h-20 rounded-xl bg-santrio-primary flex items-center justify-center text-white text-caption font-medium">
              Primary
            </div>
            <div className="w-20 h-20 rounded-xl bg-santrio-primary-hover flex items-center justify-center text-white text-caption font-medium">
              Hover
            </div>
            <div className="w-20 h-20 rounded-xl bg-santrio-primary-light flex items-center justify-center text-santrio-dark text-caption font-medium">
              Light
            </div>
            <div className="w-20 h-20 rounded-xl bg-santrio-primary-muted flex items-center justify-center text-santrio-dark text-caption font-medium">
              Muted
            </div>
            <div className="w-20 h-20 rounded-xl bg-santrio-primary-subtle flex items-center justify-center text-santrio-dark text-caption font-medium">
              Subtle
            </div>
            <div className="w-20 h-20 rounded-xl bg-santrio-dark flex items-center justify-center text-white text-caption font-medium">
              Dark
            </div>
            <div className="w-20 h-20 rounded-xl bg-santrio-success flex items-center justify-center text-white text-caption font-medium">
              Success
            </div>
            <div className="w-20 h-20 rounded-xl bg-santrio-warning flex items-center justify-center text-white text-caption font-medium">
              Warning
            </div>
            <div className="w-20 h-20 rounded-xl bg-santrio-error flex items-center justify-center text-white text-caption font-medium">
              Error
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}