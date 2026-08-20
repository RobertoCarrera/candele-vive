# Candele Vive — versión "Domingo por la tarde"

Ecommerce de velas artesanales hechas a mano. Mood: **domingo por la tarde,
una vela encendida, una taza, un libro abierto**. Luz cálida, silencio,
cosas simples.

> **Stack:** Astro 7 · CSS puro (cero frameworks) · una sola decoración
> (la ola) · Content collections en Markdown · Sin Tailwind, sin React,
> sin librerías de UI. Cero backend: el carrito vive en `localStorage` y
> el checkout genera un mensaje de WhatsApp.

## Inicio rápido

```bash
npm install
npm run dev      # http://127.0.0.1:4323
npm run build    # genera dist/ (estático, 30 páginas)
npm run preview  # sirve dist/
```

## La idea visual (en una página)

- **Cero marco, cero doble borde, cero sello de cera.** Nada de "estilo
  herbario" o "página de libro antiguo". Las fotos respiran.
- **Una sola decoración recurrente**: la línea ondulada (`<Wave />`), en
  hero, fin de sección y pies. Hecha a mano, color heredado.
- **Cuadrícula asimétrica**: algunas cards se desplazan hacia arriba o
  hacia abajo ligeramente. Como una mesa mal puesta con cariño.
- **Copia de amiga, no de catálogo**: "estas son las velas que tenemos",
  no "cap. III — la colección".
- **Paleta**: crema mantecosa `#F4EEE0`, café espresso `#2D211B`, terracota
  real `#C25B43`, salvia apagada `#84917A`, oro suave `#C29A4E`.
- **Tipografía**: Fraunces (serif cálido y moderno, variable, con opsz) +
  Inter + Caveat solo para un acento por página.

## Estructura

```
src/
├── content/
│   ├── products/    # 19 velas en .md
│   └── collections/ # 5 colecciones
├── data/
│   ├── site.ts                 # constantes globales
│   ├── ui.ts                   # todos los strings de UI en español
│   ├── collections-content.ts  # copy rico SEO/GEO por colección
│   └── spain.ts                # 52 provincias + Ceuta + Melilla
├── layouts/BaseLayout.astro    # chrome + SEO + JSON-LD
├── components/
│   ├── decorative/Wave.astro   # la única decoración
│   ├── layout/                 # Navbar, Footer, FloatingWhatsApp
│   ├── home/                   # Hero, Collections, Featured, Story, Process, Testimonials, Shipping
│   ├── shop/ProductCard.astro
│   ├── cart/                   # CartDrawer + Toaster
│   └── checkout/Stepper.astro  # 4 pasos de checkout
├── lib/
│   ├── format.ts               # carrito + formatPrice
│   ├── checkout.ts             # state, validación, WhatsApp order, order number
│   └── images.ts               # URLs R2 centralizadas
├── pages/
│   ├── index.astro
│   ├── catalogo.astro
│   ├── colecciones.astro                 # índice de colecciones
│   ├── coleccion/[slug].astro            # landing por colección (SEO/GEO)
│   ├── producto/[id].astro               # ficha de producto
│   ├── cesta.astro                       # paso 1 del checkout
│   ├── cesta/envio.astro                 # paso 2
│   ├── cesta/pago.astro                  # paso 3
│   ├── cesta/confirmacion.astro          # paso 4
│   ├── contacto.astro
│   ├── taller.astro
│   └── 404.astro
├── styles/global.css          # sistema de diseño
└── content.config.ts
```

## Contenido

Para añadir una vela:

```yaml
---
id: 20
name: 'Nueva Vela'
price: 22.00
category: 'Anima'
collection: 'anima'
image: '/images/products/vela-1.jpg'
imageAlt: 'Descripción de la imagen'
shortDescription: '…'
burnTime: '45 hrs'
size: '8 oz'
badge: 'Primavera'   # opcional, o null
featured: true        # sale en Home
order: 20
---
```

## Personalizar

- **WhatsApp, email, dirección, redes:** `src/data/site.ts`
- **Strings de UI (todo el texto en español):** `src/data/ui.ts`
- **Colores y tipografía:** variables CSS en `src/styles/global.css`
- **La ola (decoración):** `src/components/decorative/Wave.astro`
- **Imágenes reales (R2):** `src/lib/images.ts` — ver sección siguiente

## Imágenes — Cloudflare R2

Las fotos de marca, los heroes de colección y las imágenes del taller viven
en un bucket de Cloudflare R2 con dominio propio. **Todas las URLs están
centralizadas en `src/lib/images.ts`** — para cambiar de bucket o dominio,
basta editar ese archivo.

```
Bucket:     candele-vive  (cuenta dgerdo, region WEUR)
Dominio:    https://imgs.candelevive.es
S3 API:     https://8f2188882f0b5bbcec4c472d0b2ffcf3.r2.cloudflarestorage.com/candele-vive
```

Estructura:

```
/catalogo/<coleccion>/<coleccion>.jpeg   → hero de cada colección
/imgs/candele-vive.jpeg                  → home hero
/imgs/logo1.jpeg · /imgs/logo2.jpeg      → logos (v1, v2)
/imgs/sobre-mi-mireia.jpeg               → foto personal (taller)
/imgs/sobre-mi-velas.jpeg                → foto taller / velas
```

**Pendientes** (causan fallback al placeholder `/images/products/vela-1.jpg`):

- `catalogo/solea/solea.jpeg`
- `catalogo/especiales/especiales.jpeg`
- 1 foto por cada uno de los **19 productos** (`src/content/products/*.md`,
  frontmatter `image:`).

Los productos siguen apuntando a `/images/products/vela-N.jpg` (placeholders
locales en `public/images/products/`). Cuando Roberto suba las fotos
definitivas, basta cambiar el frontmatter `image:` de cada `.md` con la URL
completa de R2 — no hay que tocar el helper.

## Despliegue

`npm run build` genera un sitio 100% estático en `dist/`. Funciona en
Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3…

## Carrito

100% cliente en `localStorage`. Sin backend, sin pagos — todo se cierra
por conversación de WhatsApp.

- **`CartDrawer`** (slide-in desde la derecha): se abre al añadir un
  producto. Muestra lista, cantidades, subtotal, envío, progreso de envío
  gratis, y CTA "Ver la cesta". Cerrar con ESC, click en el backdrop, o
  el botón "Seguir mirando".
- **`Toaster`** (bottom-center): notificaciones tipo "vela añadida",
  "vela eliminada", "cupón aplicado", "cupón no válido".
- **Quick-add** en `ProductCard`: botón "+" que aparece al hacer hover
  (siempre visible en móvil). Un click añade + abre el drawer + muestra
  toast.
- **Cart count** en el navbar: badge que se actualiza con cada cambio.
- **Cupón** `CANDELE10` (10% descuento) en `/cesta`.
- **Checkout**: genera un mensaje de WhatsApp con el detalle del pedido
  y abre `wa.me` en otra pestaña.

Eventos globales (en `window`):

- `cart:updated` — el carrito cambió (sumar, restar, eliminar, vaciar)
- `cart:open` / `cart:close` — abrir / cerrar el drawer
- `toast:show` — `{ detail: { type, message, duration? } }` para mostrar
  un toast

## SEO + GEO

Cada página de colección (`/coleccion/[slug]`) y el índice (`/colecciones`)
incluye datos estructurados (JSON-LD):

- `Organization` (en todo el sitio, vía BaseLayout)
- `BreadcrumbList`
- `CollectionPage` + `ItemList` con todos los productos
- `FAQPage` con 5-6 preguntas y respuestas declarativas

El copy de cada colección está en `src/data/collections-content.ts` —
incluye un intro de 200-300 palabras con datos concretos (fecha de
fundación, número de velas, peso, duración, lugar de producción), un
perfil de aromas, y FAQs tipo "people also ask" pensadas para ser
citadas por LLMs.
