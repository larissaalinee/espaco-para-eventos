export const site = {
  name: "Espaço para Eventos",
  whatsappNumber: "5551982747705",
  whatsappDisplay: "(51) 98274-7705",
  neighborhood: "Centro",
  city: "São Leopoldo",
  state: "RS",
  capacity: 40,
  spaceCapacity: 100,
};

export function whatsappUrl() {
  return `https://wa.me/${site.whatsappNumber}`;
}

export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Rodovi%C3%A1ria+de+S%C3%A3o+Leopoldo+-+RS";
