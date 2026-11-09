import { whatsappUrl } from "@/app/lib/site";
import {
  BroomIcon,
  CalendarIcon,
  MoneyIcon,
  RainIcon,
  WhatsappIcon,
} from "./icons";

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
    title: "Limpeza sem preocupação",
    description:
      "Não cobramos taxa se você entregar o espaço limpo e organizado. Se preferir deixar a limpeza com a gente, cobramos uma taxa de limpeza — consulte o valor.",
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
          <p className="mt-4 font-display text-xl text-forest-800 sm:text-2xl">
            Você decide o horário de início e fim do seu evento!
          </p>
          <p className="mt-3 text-base text-forest-950/70">
            Reservas a partir de R$ 350,00. Você escolhe o período da sua festa,
            a gente faz o orçamento personalizado e combina os horários certinho
            com você.
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-whatsapp px-6 py-3.5 text-base font-bold text-forest-950 shadow-lg shadow-whatsapp/20 transition hover:bg-whatsapp-dark hover:text-white sm:w-auto sm:px-8 sm:py-4"
          >
            <WhatsappIcon className="h-5 w-5" />
            Consultar valores
          </a>
        </div>

        <div className="mt-16">
          <h3 className="text-center font-display text-2xl font-bold text-forest-950">
            Bom saber
          </h3>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {policies.map((policy) => (
              <div
                key={policy.title}
                className="rounded-2xl bg-forest-900 p-6 text-cream-50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-sun-400">
                  <policy.icon className="h-5 w-5" />
                </span>
                <h4 className="mt-4 text-base font-semibold">{policy.title}</h4>
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
