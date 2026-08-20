/**
 * URLs de las imágenes reales en R2.
 *
 * Bucket:        candele-vive (Cloudflare R2, cuenta dgerdo)
 * Custom domain: imgs.candelevive.es  (producción)
 * S3 API directa: https://8f2188882f0b5bbcec4c472d0b2ffcf3.r2.cloudflarestorage.com/candele-vive
 *
 * Estructura en el bucket:
 *   /catalogo/<colección>/<colección>.jpeg   → hero de cada colección
 *   /imgs/candele-vive.jpeg                  → home hero (portada)
 *   /imgs/logo1.jpeg · /imgs/logo2.jpeg      → logos
 *   /imgs/sobre-mi-mireia.jpeg               → foto personal (taller)
 *   /imgs/sobre-mi-velas.jpeg                → foto taller / velas
 *
 * Si Roberto sube más imágenes (per-producto, solea, especiales, etc.),
 * se añaden aquí sin tocar las páginas.
 *
 * Productos: cada .md tiene `image: '/images/products/vela-N.jpg'` apuntando
 * al placeholder local. Cuando estén las fotos definitivas, basta cambiar
 * el frontmatter y el helper ya no hace falta.
 */

const R2_BASE = 'https://imgs.candelevive.es';

type CollectionSlug = 'anima' | 'luce' | 'radice' | 'solea' | 'especiales';

export const IMG = {
  /** Imagen principal del home (portada de marca). */
  home: `${R2_BASE}/imgs/candele-vive.jpeg`,

  /** Mini imagen del home (cera / detalle). Placeholder local hasta tener una real. */
  homeMini: '/images/products/wax-melts.jpg',

  /** Logos. */
  logo: {
    primary: `${R2_BASE}/imgs/logo1.jpeg`,
    alt:     `${R2_BASE}/imgs/logo2.jpeg`,
  },

  /** Imágenes de la sección "El taller". */
  taller: {
    mireia: `${R2_BASE}/imgs/sobre-mi-mireia.jpeg`,
    velas:  `${R2_BASE}/imgs/sobre-mi-velas.jpeg`,
  },

  /** Hero de cada colección. null = todavía no subida → usar fallback. */
  collection: {
    anima:      `${R2_BASE}/catalogo/anima/anima.jpeg`,
    luce:       `${R2_BASE}/catalogo/luce/luce.jpeg`,
    radice:     `${R2_BASE}/catalogo/radice/radice.jpeg`,
    solea:      null,  // pendiente
    especiales: null,  // pendiente
  } satisfies Record<CollectionSlug, string | null>,

  /** Fallback para productos y cards sin imagen: vela-1.jpg. */
  fallback: '/images/products/vela-1.jpg',
} as const;

/** Devuelve la URL del hero de una colección, o el fallback si no está subida. */
export const collectionHero = (slug: CollectionSlug): string =>
  IMG.collection[slug] ?? IMG.fallback;
