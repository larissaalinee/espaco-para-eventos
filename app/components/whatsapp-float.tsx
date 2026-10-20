import { whatsappUrl } from "@/app/lib/site";
import { WhatsappIcon } from "./icons";

export function WhatsappFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-whatsapp/40 transition hover:scale-110 hover:bg-whatsapp-dark"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 animate-ping rounded-full bg-whatsapp/40"
      />
      <WhatsappIcon className="relative h-7 w-7" />
    </a>
  );
}
