import { site, whatsappUrl } from "@/app/lib/site";
import { WhatsappIcon } from "./icons";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-forest-950 py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,211,102,0.12),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold leading-tight text-cream-50 sm:text-4xl lg:text-5xl">
          Se interessou?
        </h2>
        <p className="mt-4 text-lg text-cream-100/80">
          Chama no WhatsApp e{" "}
          <span className="font-semibold text-whatsapp">
            reserve já sua data
          </span>
          . As datas de alta temporada costumam esgotar rápido.
        </p>

        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-whatsapp px-10 py-5 text-lg font-bold text-forest-950 shadow-xl shadow-whatsapp/25 transition hover:bg-whatsapp-dark hover:text-white"
        >
          <WhatsappIcon className="h-6 w-6" />
          Chama no whats e reserve sua data
        </a>

        <p className="mt-6 text-sm text-cream-100/60">
          {site.whatsappDisplay} &bull; atendimento rápido pelo WhatsApp
        </p>
      </div>
    </section>
  );
}
