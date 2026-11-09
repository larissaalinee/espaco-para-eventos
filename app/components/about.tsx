import Image from "next/image";

export function About() {
  return (
    <section id="espaco" className="scroll-mt-20 bg-cream-50 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-forest-600">
            O espaço
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-forest-950 sm:text-4xl">
            Natureza, espaço de sobra e o rio como cenário
          </h2>
          <p className="mt-6 text-base leading-relaxed text-forest-950/70">
            Aqui o seu evento acontece ao ar livre, cercado por verde e com a
            paisagem do rio ao fundo. Você monta a festa do seu jeito, com
            liberdade total e conforto.
          </p>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-forest-950/20">
          <Image
            src="/fotos/galeria-piscina-churrasqueira.jpeg"
            alt="Piscina, churrasqueira e natureza ao redor"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/90 to-transparent p-6 pt-16">
            <p className="font-display text-lg font-semibold text-cream-50">
              Piscina, churrasqueira e natureza
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
