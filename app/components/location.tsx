import Image from "next/image";
import { mapsUrl, site } from "@/app/lib/site";
import {
  ArrowRightIcon,
  ClockIcon,
  MapPinIcon,
  ParkingIcon,
} from "./icons";

const infos = [
  {
    icon: ClockIcon,
    title: "3 minutos do centro",
    description: "Perto de tudo, mas com a sensação de estar longe da cidade.",
  },
  {
    icon: ParkingIcon,
    title: "Estacionamento dentro do espaço",
    description: "Espaço de sobra para os carros dos convidados.",
  },
];

export function Location() {
  return (
    <section id="localizacao" className="scroll-mt-20 bg-cream-50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-forest-600">
            Localização
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-forest-950 sm:text-4xl">
            Como chegar
          </h2>
          <p className="mt-4 text-base text-forest-950/70">
            O espaço fica no bairro {site.neighborhood}, em {site.city} -{" "}
            {site.state}. Em poucos minutos de carro você sai do centro e já
            está na natureza.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <ul className="space-y-5">
            {infos.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-forest-950/5 bg-white p-6 shadow-sm"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest-700/10 text-forest-700">
                  <item.icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-base font-semibold text-forest-950">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-forest-950/60">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="relative overflow-hidden rounded-3xl border border-forest-950/10 bg-forest-900">
            <div className="relative h-64 sm:h-80">
              <Image
                src="/fotos/galeria-piscina-noite.jpeg"
                alt="Piscina com cascata iluminada à noite no espaço"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900 to-transparent" />
            </div>
            <div className="relative flex flex-col items-start gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sun-400/15 text-sun-400">
                  <MapPinIcon className="h-6 w-6" />
                </span>
                <p className="mt-4 font-display text-xl font-bold text-cream-50">
                  Bairro {site.neighborhood}
                </p>
                <p className="mt-1 text-sm text-cream-100/70">
                  {site.city} - {site.state}
                </p>
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-cream-100/25 px-6 py-3 text-sm font-semibold text-cream-50 transition hover:border-cream-100/60 hover:bg-white/5"
              >
                Ver no Google Maps
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
