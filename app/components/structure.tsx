import {
  AccessibilityIcon,
  BathroomIcon,
  ClockIcon,
  GrillIcon,
  MusicIcon,
  PoolIcon,
  SinkIcon,
  TablesIcon,
  TreeIcon,
  WifiIcon,
} from "./icons";
import { site } from "@/app/lib/site";

const amenities = [
  {
    icon: GrillIcon,
    title: "Churrasqueira",
    description: "Ideal para o churrasco de domingo ou a confraternização da empresa.",
  },
  {
    icon: PoolIcon,
    title: "Piscina",
    description: "Banho liberado para refrescar nos dias quentes.",
  },
  {
    icon: SinkIcon,
    title: "Bancada com pia",
    description: "Praticidade para preparar e organizar tudo no local.",
  },
  {
    icon: BathroomIcon,
    title: "Banheiro",
    description: "Estrutura de higiene disponível durante todo o evento.",
  },
  {
    icon: TablesIcon,
    title: "Mesas e cadeiras",
    description: `Mesas e cadeiras para ${site.capacity} pessoas sentadas, em um espaço que comporta até ${site.spaceCapacity} convidados.`,
  },
  {
    icon: WifiIcon,
    title: "Wi-Fi",
    description: "Internet disponível para você e seus convidados.",
  },
  {
    icon: AccessibilityIcon,
    title: "Rampas de acesso",
    description:
      "Acesso facilitado para cadeirantes e pessoas com mobilidade reduzida.",
  },
];

const diferenciais = [
  {
    icon: MusicIcon,
    title: "Som alto o evento todo",
    description:
      "Sua playlist pode rolar no volume máximo, do início ao fim da festa.",
  },
  {
    icon: ClockIcon,
    title: "Horário do seu jeito",
    description:
      "Você decide o horário de início e término da festa. É só nos passar certinho e respeitar o combinado.",
  },
  {
    icon: TablesIcon,
    title: "Zero preocupação",
    description:
      "Mesas e cadeiras para até 40 pessoas disponíveis para você não se preocupar com nada no dia do evento.",
  },
  {
    icon: TreeIcon,
    title: "100% ao ar livre",
    description:
      "Evento em contato direto com a natureza, com vista para o rio.",
  },
];

export function Structure() {
  return (
    <section id="estrutura" className="scroll-mt-20 bg-cream-100 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-forest-600">
            Estrutura
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-forest-950 sm:text-4xl">
            Tudo pronto para o seu dia
          </h2>
          <p className="mt-4 text-base text-forest-950/70">
            Você só precisa levar a comida, a bebida e a boa energia. Do resto,
            o espaço cuida.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-forest-950/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-forest-950/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-700/10 text-forest-700 transition group-hover:bg-forest-700 group-hover:text-cream-50">
                <item.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-forest-950">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-forest-950/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <h3 className="mt-20 text-center font-display text-2xl font-bold text-forest-950">
          Nossos diferenciais
        </h3>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-2xl bg-forest-900 p-6 text-cream-50"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sun-400">
                <item.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-cream-100/70">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
