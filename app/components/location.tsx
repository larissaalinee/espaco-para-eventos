import Image from "next/image";
import { mapsUrl, site } from "@/app/lib/site";
import { ArrowRightIcon, MapPinIcon, ParkingIcon } from "./icons";

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
            O espaço fica no centro de {site.city} - {site.state}, pertinho da
            rodoviária da cidade.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="relative overflow-hidden rounded-3xl border border-forest-950/10 bg-forest-900">
            <div className="relative h-72 sm:h-96">
              <Image
                src="/fotos/galeria-cascata-palmeiras.jpeg"
                alt="Piscina com cascata de água caindo e palmeiras ao redor"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900 to-transparent" />
            </div>
            <div className="relative flex flex-col items-start gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sun-400/15 text-sun-400">
                <MapPinIcon className="h-6 w-6" />
              </span>
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

          <div className="flex items-start gap-4 rounded-2xl border border-forest-950/5 bg-white p-6 shadow-sm">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest-700/10 text-forest-700">
              <ParkingIcon className="h-6 w-6" />
            </span>
            <div>
              <p className="text-base font-semibold text-forest-950">
                Estacionamento dentro do espaço
              </p>
              <p className="mt-1 text-sm text-forest-950/60">
                Espaço de sobra para os carros dos convidados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
