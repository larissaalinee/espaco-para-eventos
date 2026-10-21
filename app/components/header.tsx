import { site, whatsappUrl } from "@/app/lib/site";
import { WhatsappIcon } from "./icons";

const navLinks = [
  { href: "#valores", label: "Como funciona" },
  { href: "#espaco", label: "O espaço" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#galeria", label: "Galeria" },
  { href: "#localizacao", label: "Localização" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-forest-950/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex flex-col leading-tight">
          <span className="font-display text-lg font-semibold text-cream-50">
            {site.name}
          </span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-forest-300">
            {site.city} / {site.state}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-cream-100/80 transition-colors hover:text-cream-50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-forest-950 transition-colors hover:bg-whatsapp-dark hover:text-white"
        >
          <WhatsappIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Reservar data</span>
          <span className="sm:hidden">Reservar</span>
        </a>
      </div>
    </header>
  );
}
