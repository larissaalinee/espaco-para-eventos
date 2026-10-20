import { site, whatsappUrl } from "@/app/lib/site";
import { WhatsappIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-forest-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-semibold text-cream-50">
            {site.name}
          </p>
          <p className="mt-1 text-sm text-cream-100/60">
            Bairro {site.neighborhood} &bull; {site.city} - {site.state}
          </p>
        </div>

        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-cream-100/80 transition hover:text-whatsapp"
        >
          <WhatsappIcon className="h-5 w-5" />
          {site.whatsappDisplay}
        </a>
      </div>
      <p className="mt-8 text-center text-xs text-cream-100/40">
        &copy; 2026 {site.name}. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
