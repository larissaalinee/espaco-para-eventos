import { whatsappUrl } from "@/app/lib/site";
import { WhatsappIcon } from "./icons";

const videos = [
  {
    src: "/videos/tour-drone.mp4",
    poster: "/videos/tour-drone-poster.jpg",
    title: "Tour aéreo de drone",
    description: "O espaço, o rio ao lado e a rodovia que leva ao centro.",
  },
  {
    src: "/videos/decoracao-cha-bebe.mp4",
    poster: "/videos/decoracao-poster.jpg",
    title: "Decoração de chá de bebê",
    description: "Um passeio pela decoração de um chá de bebê aqui no espaço.",
  },
  {
    src: "/videos/decoracao-cha-revelacao.mp4",
    poster: "/videos/revelacao-poster.jpg",
    title: "Decoração de chá revelação",
    description:
      "Do cenário aos doces: o clima da festa antes da grande revelação.",
  },
];

export function VideoSection() {
  return (
    <section id="video" className="scroll-mt-20 bg-cream-100 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-forest-600">
            Vídeos
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-forest-950 sm:text-4xl">
            Conheça o espaço em movimento
          </h2>
          <p className="mt-4 text-base text-forest-950/70">
            Do voo de drone aos detalhes de festas que aconteceram aqui.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <div key={video.src} className="mx-auto w-full max-w-[300px] sm:max-w-none">
              <video
                controls
                playsInline
                preload="none"
                poster={video.poster}
                className="aspect-[9/16] w-full rounded-3xl bg-forest-950 shadow-2xl shadow-forest-950/30"
              >
                <source src={video.src} type="video/mp4" />
                Seu navegador não suporta vídeo.
              </video>
              <h3 className="mt-4 text-center text-base font-semibold text-forest-950">
                {video.title}
              </h3>
              <p className="mt-1 text-center text-sm text-forest-950/60">
                {video.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-whatsapp px-6 py-3.5 text-base font-bold text-forest-950 shadow-lg shadow-whatsapp/20 transition hover:bg-whatsapp-dark hover:text-white sm:px-8 sm:py-4"
          >
            <WhatsappIcon className="h-5 w-5" />
            Gostou? Chama no whats e reserve sua data
          </a>
        </div>
      </div>
    </section>
  );
}
