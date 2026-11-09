import {
  AccessibilityIcon,
  BathroomIcon,
  FreezerIcon,
  GrillIcon,
  MusicIcon,
  PoolIcon,
  SinkIcon,
  TablesIcon,
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
    icon: FreezerIcon,
    title: "Freezer",
    description: "Para guardar itens e gelar as bebidas da festa.",
  },
  {
    icon: BathroomIcon,
    title: "Banheiro",
    description: "Estrutura de higiene disponível durante todo o evento.",
  },
  {
    icon: TablesIcon,
    title: "Mesas e cadeiras",
    description: `Acomoda ${site.capacity} pessoas.`,
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

        <div className="mt-6 flex flex-col items-start gap-4 rounded-2xl bg-forest-900 p-7 text-cream-50 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sun-400">
              <MusicIcon className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-base font-semibold">Som alto o evento todo</h3>
              <p className="mt-1 text-sm leading-relaxed text-cream-100/70">
                Curta sua playlist no volume máximo, do início ao fim da festa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
