import Image from "next/image";

const photos = [
  {
    src: "/fotos/galeria-revelacao-casal.jpeg",
    alt: "Casal se encontrando durante chá revelação com fumaça azul e arco de balões",
    caption: "Chá revelação",
  },
  {
    src: "/fotos/galeria-revelacao-abraco.jpeg",
    alt: "Casal se abraçando na revelação, com piscas e balões ao redor",
    caption: "O grande momento",
  },
  {
    src: "/fotos/galeria-festa.jpeg",
    alt: "Chá revelação decorado à beira da piscina, com equipe do espaço",
    caption: "Festas à beira da piscina",
  },
  {
    src: "/fotos/galeria-mesa-doces.jpeg",
    alt: "Mesa de doces decorada para celebração ao ar livre",
    caption: "Decore do seu jeito",
  },
  {
    src: "/fotos/galeria-baloes.jpeg",
    alt: "Balões decorativos entre as árvores do espaço",
    caption: "Em meio à natureza",
  },
  {
    src: "/fotos/galeria-baloes-arco.jpeg",
    alt: "Arco de balões coloridos para decoração de festa",
    caption: "Decorações que encantam",
  },
  {
    src: "/fotos/galeria-cha-bebe-piscina.jpeg",
    alt: "Decoração de chá de bebê ao lado da piscina com cascata",
    caption: "Chá de bebê",
  },
  {
    src: "/fotos/galeria-cha-bebe-mesa.jpeg",
    alt: "Mesa decorada com ursinhos e fundo personalizado para chá de bebê",
    caption: "Decoração completa",
  },
  {
    src: "/fotos/galeria-cha-bebe-baloes.jpeg",
    alt: "Piscina cheia de bolas brancas e douradas com decoração de chá de bebê",
    caption: "Até a piscina entra na decoração",
  },
];

export function Gallery() {
  return (
    <section id="galeria" className="scroll-mt-20 bg-cream-50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-forest-600">
            Galeria
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-forest-950 sm:text-4xl">
            Um pouco do que acontece aqui
          </h2>
          <p className="mt-4 text-base text-forest-950/70">
            Cada evento vira uma lembrança especial. Veja como o espaço se
            transforma.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <figure
              key={photo.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/80 to-transparent p-4 pt-10 text-sm font-medium text-cream-50 opacity-0 transition group-hover:opacity-100">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
