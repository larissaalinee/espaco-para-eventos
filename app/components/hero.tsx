import Image from "next/image";
import { site, whatsappUrl } from "@/app/lib/site";
import {
  ArrowRightIcon,
  ClockIcon,
  TreeIcon,
  UsersIcon,
  WhatsappIcon,
} from "./icons";

const highlights = [
  { icon: ClockIcon, label: "3 min do centro" },
  { icon: UsersIcon, label: `Até ${site.spaceCapacity} pessoas` },
  { icon: TreeIcon, label: "100% ao ar livre" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-center overflow-hidden bg-forest-950 pt-16"
    >
      <Image
        src="/fotos/aerea-rio.jpeg"
        alt="Vista aérea do espaço às margens do rio, em meio à natureza"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/75 to-forest-950/35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(12,31,22,0.6)_100%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-forest-950/50 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-cream-100 backdrop-blur-sm sm:mb-6 sm:px-4 sm:text-xs">
          Bairro {site.neighborhood} &bull; {site.city} - {site.state}
        </p>

        <p className="font-display text-xl text-sun-400 sm:text-2xl">
          Pertinho do centro, longe da correria
        </p>

        <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-[1.12] text-cream-50 drop-shadow-lg sm:text-5xl lg:text-6xl">
          Seu evento em meio à natureza,{" "}
          <span className="text-river-300">com vista para o rio</span>
        </h1>

        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-whatsapp px-6 py-3.5 text-base font-bold text-forest-950 shadow-lg shadow-whatsapp/20 transition hover:bg-whatsapp-dark hover:text-white sm:w-auto sm:px-8 sm:py-4"
          >
            <WhatsappIcon className="h-5 w-5" />
            Chama no whats e reserve sua data
          </a>
          <a
            href="#estrutura"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream-100/30 bg-forest-950/30 px-6 py-3.5 text-base font-semibold text-cream-50 backdrop-blur-sm transition hover:border-cream-100/70 hover:bg-white/10 sm:w-auto sm:px-8 sm:py-4"
          >
            Conheça a estrutura
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>

        <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-cream-100/15 pt-6 sm:mt-16 sm:gap-6 sm:pt-8">
          {highlights.map((item) => (
            <div key={item.label} className="flex flex-col gap-1.5 sm:gap-2">
              <item.icon className="h-5 w-5 text-sun-400 sm:h-6 sm:w-6" />
              <dt className="text-xs font-medium text-cream-100/90 sm:text-sm">
                {item.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
