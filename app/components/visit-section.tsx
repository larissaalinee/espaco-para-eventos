import { whatsappUrl } from "@/app/lib/site";
import { CalendarIcon, WhatsappIcon } from "./icons";

export function VisitSection() {
  return (
    <section id="visita" className="scroll-mt-20 bg-cream-50 pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-forest-900 p-8 text-cream-50 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-sun-400">
              <CalendarIcon className="h-7 w-7" />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sun-400">
                Visita
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                Ainda tá na dúvida?
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-cream-100/80">
                Você pode agendar uma visita sem compromisso, no dia e horário
                que ficar melhor pra você conhecer nosso espaço antes de
                reservar o seu evento com a gente.
              </p>
            </div>
          </div>
          <a
            href={whatsappUrl(
              "Olá! Quero agendar uma visita para conhecer o espaço. Qual dia e horário fica melhor para mim?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-full bg-whatsapp px-6 py-3.5 text-base font-bold text-forest-950 shadow-lg shadow-whatsapp/20 transition hover:bg-whatsapp-dark hover:text-white lg:w-auto lg:px-8 lg:py-4"
          >
            <WhatsappIcon className="h-5 w-5" />
            Agendar uma visita
          </a>
        </div>
      </div>
    </section>
  );
}
