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
            Centro &bull; {site.city} - {site.state} &bull; pertinho da
            rodoviária
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 md:items-end">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-cream-100/80 transition hover:text-whatsapp"
          >
            <WhatsappIcon className="h-5 w-5" />
            {site.whatsappDisplay}
          </a>
          <a
            href="#politica"
            className="text-xs text-cream-100/50 underline-offset-4 transition hover:text-cream-100 hover:underline"
          >
            Política de cancelamento
          </a>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-cream-100/40">
        &copy; 2026 {site.name}. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
