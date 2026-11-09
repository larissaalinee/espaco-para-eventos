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

        <div className="mt-12 flex flex-col gap-6 rounded-2xl border border-forest-950/5 bg-white p-7 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
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
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-forest-900 px-6 py-3 text-sm font-semibold text-cream-50 transition hover:bg-forest-800"
          >
            <MapPinIcon className="h-4 w-4" />
            Ver no Google Maps
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
