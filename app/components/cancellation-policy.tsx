const rules = [
  {
    title: "Desistência dentro de 7 dias após o pagamento do sinal",
    description:
      "O valor pago será devolvido integralmente (100%), desde que o cancelamento seja solicitado com no mínimo 48 horas de antecedência da data do evento.",
  },
  {
    title: "Desistência após os 7 dias do pagamento do sinal",
    description:
      "Será retido 30% do valor total do aluguel como compensação pela reserva da data. O restante do valor já pago será devolvido.",
  },
  {
    title: "Cancelamento com menos de 48 horas de antecedência",
    description:
      "Não haverá devolução integral, ainda que o cancelamento ocorra dentro dos 7 dias do pagamento do sinal.",
  },
  {
    title: "Troca de data",
    description:
      "Poderá ser solicitada com no mínimo 15 dias de antecedência, mediante disponibilidade de outra data na agenda.",
  },
];

export function CancellationPolicy() {
  return (
    <section id="politica" className="scroll-mt-20 bg-cream-50 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-3xl border border-forest-950/10 bg-white p-6 shadow-sm sm:p-10">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-forest-600">
            Política
          </p>
          <h2 className="mt-2 text-center font-display text-2xl font-bold text-forest-950 sm:text-3xl">
            Política de cancelamento
          </h2>

          <div className="mt-8 space-y-6">
            {rules.map((rule, index) => (
              <div key={rule.title} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest-700/10 text-sm font-bold text-forest-700">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-forest-950">
                    {rule.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-forest-950/65">
                    {rule.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 border-t border-forest-950/10 pt-6 text-center text-sm font-medium text-forest-950/70">
            A confirmação do pagamento do sinal implica a concordância com
            estas condições.
          </p>
        </div>
      </div>
    </section>
  );
}
