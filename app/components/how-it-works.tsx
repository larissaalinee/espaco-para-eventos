import { whatsappUrl } from "@/app/lib/site";
import {
  BroomIcon,
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  MoneyIcon,
  MusicIcon,
  RainIcon,
  SparklesIcon,
  WhatsappIcon,
} from "./icons";

const plans = [
  {
    icon: ClockIcon,
    name: "Diária de 4 horas",
    description: "Perfeita para aniversários e confraternizações com horário marcado.",
    price: "A partir de R$ 350",
    message:
      "Olá! Quero saber os valores da diária de 4 horas do espaço para eventos.",
  },
  {
    icon: ClockIcon,
    name: "Diária de 8 horas",
    description: "O dia inteiro para curtir piscina, churrasco e boa companhia.",
    price: "Consulte valores",
    message:
      "Olá! Quero saber os valores da diária de 8 horas do espaço para eventos.",
  },
  {
    icon: MusicIcon,
    name: "Festas à noite",
    description: "A festa continua depois do pôr do sol, com som liberado.",
    price: "Valores diferenciados",
    message:
      "Olá! Quero informações sobre festas à noite no espaço para eventos.",
  },
];

const policies = [
  {
    icon: CalendarIcon,
    title: "Reserve com 30%",
    description:
      "Pedimos 30% do valor do evento para garantir e reservar a sua data.",
  },
  {
    icon: MoneyIcon,
    title: "Pagamento facilitado",
    description: "O restante do valor pode ser pago até um dia antes do evento.",
  },
  {
    icon: RainIcon,
    title: "Chuva? Sem estresse",
    description:
      "Em caso de chuva, transferimos a data do seu evento sem burocracia.",
  },
  {
    icon: BroomIcon,
    title: "Sem taxa de limpeza",
    description:
      "Não cobramos taxa de limpeza: pedimos apenas a entrega do espaço limpo e organizado.",
  },
  {
    icon: SparklesIcon,
    title: "Limpeza por nossa conta",
    description:
      "Não quer se preocupar com isso no dia da festa? Deixe com a gente — consulte o valor no orçamento.",
  },
  {
    icon: CheckIcon,
    title: "Tudo pronto no seu dia",
    description:
      "No dia do evento você recebe o espaço limpo e organizado, pronto para aproveitar.",
  },
];

export function HowItWorks() {
  return (
    <section id="valores" className="scroll-mt-20 bg-cream-100 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-forest-600">
            Como funciona
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-forest-950 sm:text-4xl">
            Simples do início ao fim
          </h2>
          <p className="mt-4 text-base text-forest-950/70">
            Trabalhamos com diárias de 4 horas ou de 8 horas. Você escolhe,
            reserva e só se preocupa em curtir.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col rounded-2xl border border-forest-950/5 bg-white p-7 shadow-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-700/10 text-forest-700">
                <plan.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-forest-950">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-forest-950/60">
                {plan.description}
              </p>
              <p className="mt-4 font-display text-2xl font-bold text-forest-800">
                {plan.price}
              </p>
              <a
                href={whatsappUrl(plan.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-forest-700/30 px-5 py-2.5 text-sm font-semibold text-forest-800 transition hover:border-forest-700 hover:bg-forest-700 hover:text-cream-50 mt-auto"
              >
                <WhatsappIcon className="h-4 w-4" />
                Consultar
              </a>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-forest-950/50">
          Valores variam conforme data, horário e tipo de evento. Fale com a
          gente para uma cotação personalizada.
        </p>

        <div className="mt-16">
          <h3 className="text-center font-display text-2xl font-bold text-forest-950">
            Bom saber
          </h3>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {policies.map((policy) => (
              <div
                key={policy.title}
                className="rounded-2xl bg-forest-900 p-6 text-cream-50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-sun-400">
                  <policy.icon className="h-5 w-5" />
                </span>
                <h4 className="mt-4 text-base font-semibold">
                  {policy.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-cream-100/70">
                  {policy.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
