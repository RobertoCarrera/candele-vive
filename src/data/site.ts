/**
 * Datos globales del sitio Candele Vive (versión "Domingo por la tarde").
 * Editar aquí el WhatsApp, email, redes y dirección reales.
 */

export const SITE = {
  url: 'https://candelevive.es',
  name: 'Candele Vive',
  legalName: 'Candele Vive — Velas Artesanales',
  tagline: 'velas hechas en casa, para tu casa',
  shortDescription:
    'Velas aromáticas de cera de soja natural, vertidas a mano en pequeños lotes. Cinco colecciones de aromas para cada momento.',
  description:
    'Velas aromáticas hechas a mano con cera de soja natural y fragancias sin prisa. Vertidas una a una en nuestro taller de Vilanova i la Geltrú. Envíos a Península y Baleares.',
  locale: 'es-ES',
  email: 'hola@candelevive.es',
  phone: '+34 612 20 61 72',
  whatsappRaw: '34612206172',
  address: {
    street: 'Estudio Privado (Recogida con Cita Previa)',
    locality: 'Vilanova i la Geltrú',
    region: 'Barcelona',
    postalCode: '08800',
    country: 'ES',
  },
  social: {
    instagram: 'https://instagram.com/candelevive',
    facebook: 'https://facebook.com/candelevive',
    pinterest: 'https://pinterest.com/candelevive',
  },
  freeShippingThreshold: 50,
  shippingCost: 6.95,
  promoCode: 'CANDELE10',
  promoDiscount: 0.1,
} as const;

export const whatsappLink = (text: string): string =>
  `https://wa.me/${SITE.whatsappRaw}?text=${encodeURIComponent(text)}`;

export const whatsappDisplay = (): string => {
  const raw = SITE.whatsappRaw;
  if (raw.length === 11 && raw.startsWith('34')) {
    return `+${raw.slice(0, 2)} ${raw.slice(2, 5)} ${raw.slice(5, 7)} ${raw.slice(7, 9)} ${raw.slice(9)}`;
  }
  return `+${raw}`;
};
