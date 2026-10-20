export const site = {
  name: "Espaço para Eventos",
  whatsappNumber: "5551982747705",
  whatsappDisplay: "(51) 98274-7705",
  neighborhood: "Rio dos Sinos",
  city: "São Leopoldo",
  state: "RS",
  capacity: 40,
  spaceCapacity: 100,
};

export function whatsappUrl(
  message = "Olá! Quero reservar uma data no Espaço para Eventos. Pode me passar mais informações?"
) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Rio+dos+Sinos,+S%C3%A3o+Leopoldo+-+RS";
