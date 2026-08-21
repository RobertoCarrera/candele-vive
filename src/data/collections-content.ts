/**
 * Contenido SEO + GEO por colección.
 * Copy escrito para puntuar SEO clásico y GEO (LLMs).
 * Principios aplicados:
 *   - Declaraciones concretas, no filler ("huele bien" → "jazmín del nocturnal")
 *   - Números, fechas, lugares y unidades (Vilanova i la Geltrú, 8 oz, 45 h)
 *   - Tono en primera persona del taller, con respuestas tipo "people also ask"
 *   - FAQs con respuestas breves, citables, sin ambigüedad
 *   - Datos estructurados: JSON-LD ItemList + FAQPage en cada página
 */

export type CollectionSlug = 'anima' | 'radice' | 'luce' | 'solea' | 'especiales';

export type CollectionContent = {
  slug: CollectionSlug;
  metaTitle: string;
  metaDescription: string;
  ogDescription: string;
  introTitle: string;
  introBody: string[];
  seasonMonths: string;
  season: string;
  foundedYear: number;
  candleCount: number;
  burnTime: string;
  weight: string;
  waxType: string;
  wickType: string;
  origin: string;
  bestFor: string;
  notFor: string;
  scentProfile: { primary: string; secondary: string; accent: string };
  moods: string[];
  occasions: string[];
  processNotes: string;
  faqs: { q: string; a: string }[];
  peopleAlsoAsk: { q: string; a: string }[];
};

export const COLLECTIONS_CONTENT: Record<CollectionSlug, CollectionContent> = {
  anima: {
    slug: 'anima',
    metaTitle: 'Colección Ánima — velas aromáticas de primavera hechas a mano | Candele Vive',
    metaDescription:
      'Cinco velas aromáticas de la Colección Ánima: jazmín, rosa, fresa silvestre, higuera. Cera de soja 100% natural, hechas a mano en Vilanova i la Geltrú. 45 h de duración. Envío gratis +50€.',
    ogDescription: 'La línea más luminosa de Candele Vive: cinco velas florales inspiradas en la primera luz de la primavera mediterránea.',
    introTitle: 'Cinco velas para la primera luz de la primavera',
    introBody: [
      'La Colección Ánima es nuestra línea más luminosa. Nació en 2024 con la apertura del taller de Vilanova i la Geltrú y reúne cinco velas aromáticas inspiradas en la primera luz de la primavera mediterránea: el jazmín que se abre de noche, la rosa de mayo, la fresa silvestre del campo, y un acorde de higuera que llega con el calor de abril.',
      'Todas las velas de la Colección Ánima se vierten a mano en nuestro taller de Vilanova i la Geltrú (Barcelona), en lotes de entre 30 y 60 unidades. Usamos cera de soja 100% natural de origen europeo, mecha de algodón sin plomo, y fragancias sin ftalatos infusionadas con aceites esenciales botánicos. Cada vela pesa 230 g (8 oz) y arde entre 30 y 50 horas, según el formato.',
      'Ánima es para quien prefiere aromas suaves y florales, sin notas pesadas. La recomendamos para salones con luz natural, dormitorios, escritorios y rituales de mañana. Si buscas una vela intensa y envolvente, mira Radice (invierno) o Solea (verano). Si quieres algo más goloso, los wax melts de esta colección — Cuore y Nuvola — son una buena forma de probar los aromas sin llama.',
    ],
    seasonMonths: 'marzo a junio',
    season: 'Primavera',
    foundedYear: 2024,
    candleCount: 5,
    burnTime: '30-50 horas',
    weight: '230 g (8 oz)',
    waxType: 'Cera de soja 100% natural, sin parafinas',
    wickType: 'Mecha de algodón sin plomo',
    origin: 'Vilanova i la Geltrú, Barcelona',
    bestFor: 'Salones con luz natural, dormitorios, escritorios, rituales de mañana, lectura.',
    notFor: 'Quien busca aromas intensos o muy dulces. Tampoco es una vela de exterior.',
    scentProfile: {
      primary: 'Jazmín del nocturnal',
      secondary: 'Rosa de mayo',
      accent: 'Higuera y fresa silvestre',
    },
    moods: ['luminoso', 'suave', 'floral', 'fresco'],
    occasions: ['mañana', 'lectura', 'meditación', 'desayunos'],
    processNotes:
      'Cera fundida a 60°C, mezclada con la fragancia y vertida a mano en cada frasco. Reposo de 14 días antes de etiquetar y enviar.',
    faqs: [
      {
        q: '¿Cuánto dura una vela de la Colección Ánima?',
        a: 'Entre 30 y 50 horas por vela, según el formato. La Intuizione (jazmín) y la Essenza (rosa), nuestras velas de 8 oz, duran 45 horas en condiciones normales. Los wax melts (Cuore) no tienen hora fija: dependen del quemador, pero un paquete de 100 g da para 20-30 sesiones.',
      },
      {
        q: '¿Las velas de Ánima son fuertes o suaves?',
        a: 'Suaves. Son aromas florales pensados para no saturar, sobre en espacios pequeños. Si buscas un aroma que se note a tres metros, mira Radice.',
      },
      {
        q: '¿Se pueden encender en dormitorios?',
        a: 'Sí. Recomendamos apagarla antes de dormir, pero durante el día llena el cuarto sin molestar. Si tienes sensibilidad a olores, prueba con un quemador y un wax melt primero.',
      },
      {
        q: '¿Cuándo lanzáis la nueva temporada de Ánima?',
        a: 'Cada marzo, con el equinoccio de primavera. A veces adelantamos una vela nueva en San Valentín (14 de febrero) o en el Día de la Madre (primer domingo de mayo).',
      },
      {
        q: '¿Las velas de cera de soja son mejores que las de parafina?',
        a: 'La cera de soja arde más fría, más limpia y más lenta que la parafina, que es un derivado del petróleo. No emite hollín ni compuestos volátiles. Además, la soja es un cultivo renovable europeo, mientras que la parafina es fósil.',
      },
      {
        q: '¿Puedo comprar la Colección Ánima al por mayor?',
        a: 'Sí, trabajamos con tiendas de diseño y concept stores. Escríbenos a hola@candelevive.es con el asunto "Mayoristas" y te pasamos dossier y lista de precios.',
      },
    ],
    peopleAlsoAsk: [
      { q: '¿Qué huele la Colección Ánima?', a: 'Jazmín, rosa, fresa silvestre e higuera. Son aromas florales suaves, sin notas pesadas.' },
      { q: '¿De qué está hecha la vela Ánima?', a: 'Cera de soja 100% natural de origen europeo, mecha de algodón sin plomo y fragancias sin ftalatos con aceites esenciales.' },
      { q: '¿Cuánto dura una vela de soja Candele Vive?', a: 'Entre 30 y 50 horas por vela, según el formato. Las de 8 oz duran 45 horas en condiciones normales.' },
      { q: '¿Dónde se hacen las velas Candele Vive?', a: 'En nuestro taller de Vilanova i la Geltrú, Barcelona. Se vierten a mano, en lotes pequeños.' },
    ],
  },

  radice: {
    slug: 'radice',
    metaTitle: 'Colección Radice — velas de invierno hechas a mano | Candele Vive',
    metaDescription:
      'Cuatro velas de la Colección Radice, inspiradas en el invierno: chimenea, leña, leche caliente, naranja con clavo. Cera de soja 100% natural, hechas a mano. 45 h de duración. Envío gratis +50€.',
    ogDescription: 'Nuestra línea más cálida y envolvente: cuatro velas de invierno pensadas para encenderse entre diciembre y febrero.',
    introTitle: 'Cuatro velas para el invierno que se vive en una cocina',
    introBody: [
      'Radice es nuestra colección de invierno. Nació en 2024, el primer año del taller, y la forman cuatro velas gourmand pensadas para los meses en los que oscurece antes: leche caliente, café tostado, canela, y un wax melt de matcha honey para los días que no quieres llama.',
      'Las velas Radice son las más envolventes de la casa. La Focolare (leche caliente) y la Risveglio (café tostado) son las reinas del salón en invierno; la Terra (canela) tiene presencia para cenas largas. Se vierten a mano en nuestro taller de Vilanova i la Geltrú, en lotes de 30 a 50 unidades, con cera de soja 100% natural, mecha de algodón sin plomo y fragancias sin ftalatos. Duran 45 horas en el formato de 8 oz (230 g).',
      'Recomendamos Radice para salones, dormitorios fríos y cenas largas. Es la colección que más regalamos en Navidad. Si prefieres aromas suaves, mira Ánima (primavera). Si quieres algo más fresco, Luce (otoño) o Solea (verano).',
    ],
    seasonMonths: 'diciembre a febrero',
    season: 'Invierno',
    foundedYear: 2024,
    candleCount: 4,
    burnTime: '45 horas',
    weight: '230 g (8 oz)',
    waxType: 'Cera de soja 100% natural, sin parafinas',
    wickType: 'Mecha de algodón sin plomo',
    origin: 'Vilanova i la Geltrú, Barcelona',
    bestFor: 'Salones, dormitorios fríos, cenas largas, regalos de Navidad, tardes de lluvia.',
    notFor: 'Quien busca aromas frescos o florales. Tampoco para exteriores en días calurosos.',
    scentProfile: {
      primary: 'Leche caliente',
      secondary: 'Café tostado',
      accent: 'Canela y matcha honey',
    },
    moods: ['cálido', 'envolvente', 'gourmand', 'hogareño'],
    occasions: ['Navidad', 'cenas', 'lluvia', 'lectura nocturna'],
    processNotes:
      'Fragancia gourmand infusionada con notas de leche, café y canela. Reposo de 14 días en ambiente fresco antes de etiquetar.',
    faqs: [
      {
        q: '¿Cuánto dura una vela de la Colección Radice?',
        a: '45 horas en el formato de 8 oz (230 g). Las cuatro velas de la colección usan el mismo formato, así que la duración es la misma.',
      },
      {
        q: '¿Las velas Radice son fuertes?',
        a: 'Sí, son nuestras velas más envolventes. La Focolare (leche caliente) y la Risveglio (café tostado) tienen bastante presencia. Si quieres algo más suave, mira Ánima o Solea.',
      },
      {
        q: '¿Qué tiene de especial la Colección Radice?',
        a: 'Es la primera colección del taller. La empezamos en octubre de 2024 con cuatro velas inspiradas en la cocina de invierno. La Risveglio (café tostado) es la vela más vendida de Candele Vive.',
      },
      {
        q: '¿Se pueden regalar en Navidad?',
        a: 'Sí. De hecho, Radice es nuestra colección de Reyes. Hacemos un pack de dos unidades con caja kraft y un sello, listo para regalar. Está disponible en la página de cada vela.',
      },
      {
        q: '¿La cera de soja es segura para dormitorios?',
        a: 'Sí, la cera de soja no emite hollín ni compuestos orgánicos volátiles. Recomendamos apagar la vela antes de dormir y no dejarla encendida más de 3 horas seguidas.',
      },
      {
        q: '¿Hacen velas Radice personalizadas?',
        a: 'Sí, hacemos velas personalizadas para bodas, eventos y empresas a partir de 30 unidades. Escríbenos a hola@candelevive.es con el asunto "Personalizadas".',
      },
    ],
    peopleAlsoAsk: [
      { q: '¿A qué huele Radice?', a: 'A invierno: leche caliente, café tostado, canela y un toque de matcha honey en los wax melts.' },
      { q: '¿Cuántas velas tiene la Colección Radice?', a: 'Tres velas (Focolare, Risveglio, Terra) más un wax melt (Forno, matcha honey).' },
      { q: '¿Cuándo se enciende Radice?', a: 'Entre diciembre y febrero. Es nuestra colección de invierno.' },
      { q: '¿Las velas Candele Vive son buenas para regalar?', a: 'Sí, sobre todo Radice. Hacemos cajas de regalo de dos unidades con sello kraft.' },
    ],
  },

  luce: {
    slug: 'luce',
    metaTitle: 'Colección Luce — velas de otoño hechas a mano | Candele Vive',
    metaDescription:
      'Cuatro velas y dos wax melts de la Colección Luce, para el otoño mediterráneo. Resina, romero, higo, calabaza especiada. Cera de soja 100% natural, hechas a mano. 45 h. Envío gratis +50€.',
    ogDescription: 'La colección de otoño de Candele Vive: aromas amaderados, herbales y un toque gourmand para los meses de octubre a diciembre.',
    introTitle: 'Para el otoño mediterráneo, cuando cambia la luz',
    introBody: [
      'Luce es nuestra colección de otoño. Reúne tres velas y un wax melt pensados para los meses en los que la luz se vuelve dorada: octubre, noviembre y principios de diciembre. Los aromas son limpios, herbales y reconfortantes, sin la intensidad gourmand de Radice.',
      'La colección incluye la vela Alba (lavanda, perfecta para antes de dormir), Respiro (romero fresco, vigorizante sin sobreestimular), Fresca (ropa limpia, la favorita de la comunidad) y los wax melts Nuvola (colonia Nenuco, nostálgico). Todas se vierten a mano en el taller de Vilanova i la Geltrú con cera de soja 100% natural, mecha de algodón sin plomo y fragancias sin ftalatos. Duran 45 horas en el formato de 8 oz (230 g).',
      'Luce es para quien busca aromas herbales y limpios, sin la dulzura gourmand de Radice. Es la colección menos conocida, pero la favorita de quien la prueba. Los wax melts Nuvola, con su aroma a Nenuco, son la forma más segura de aromatizar casas con niños o mascotas.',
    ],
    seasonMonths: 'octubre a diciembre',
    season: 'Otoño',
    foundedYear: 2024,
    candleCount: 6,
    burnTime: '45 horas (wax melts: 20-30 sesiones)',
    weight: '230 g (8 oz) · 100 g (wax melts)',
    waxType: 'Cera de soja 100% natural, sin parafinas',
    wickType: 'Mecha de algodón sin plomo (wax melts: sin mecha)',
    origin: 'Vilanova i la Geltrú, Barcelona',
    bestFor: 'Cocinas, despachos, oficinas, casas con niños, personas con sensibilidad a olores fuertes.',
    notFor: 'Quien busca aromas dulces o muy envolventes. Tampoco para cenas de fiesta.',
    scentProfile: {
      primary: 'Lavanda',
      secondary: 'Romero fresco',
      accent: 'Ropa limpia y colonia Nenuco',
    },
    moods: ['limpio', 'herbal', 'relajante', 'fresco'],
    occasions: ['antes de dormir', 'trabajo', 'cocina', 'oficina', 'casas con niños'],
    processNotes:
      'Mezcla de fragancia y aceites esenciales de lavanda y romero. Wax melts sin mecha para quemador eléctrico o de vela.',
    faqs: [
      {
        q: '¿Qué incluye la Colección Luce?',
        a: 'Tres velas (Alba, Respiro, Fresca) y un wax melt (Nuvola). Es nuestra colección de otoño, con aromas herbales, lavanda y aromas limpios.',
      },
      {
        q: '¿Los wax melts son seguros para casas con niños?',
        a: 'Sí. Los wax melts de Candele Vive no tienen mecha, así que no hay llama. Se funden en un quemador eléctrico o de vela, y se enfrían cuando se apaga. Recomendamos colocar el quemador fuera del alcance de niños pequeños.',
      },
      {
        q: '¿A qué huele Respiro?',
        a: 'A romero fresco, con un toque de menta y un fondo resinoso. Es una vela herbal, vigorizante sin sobreestimular. Ideal para cocinas, despachos y mañanas.',
      },
      {
        q: '¿Cuánto duran los wax melts?',
        a: 'Un paquete de 100 g da para 20-30 sesiones de quemador, dependiendo de la duración de cada sesión. Recomendamos 1-2 horas por sesión para que el aroma no se sature.',
      },
      {
        q: '¿Se pueden mezclar los aromas de Luce con los de otras colecciones?',
        a: 'Sí. Recomendamos Respiro (romero) con velas de Ánima para un contraste fresco-floral, y Forno (pan) con velas de Radice para un combo cálido-gourmand.',
      },
      {
        q: '¿Cuándo lanzáis la nueva temporada de Luce?',
        a: 'Cada octubre, con la llegada del otoño. Solemos añadir una vela nueva a la colección — en 2025 fue Respiro.',
      },
    ],
    peopleAlsoAsk: [
      { q: '¿Qué huele la Colección Luce?', a: 'Lavanda, romero fresco, ropa limpia y un toque de colonia Nenuco en los wax melts. Son aromas limpios, sin la intensidad gourmand de Radice.' },
      { q: '¿Qué es un wax melt?', a: 'Porciones de cera perfumada que se funden en un quemador, sin llama. Es la forma más segura de aromatizar una casa con niños o mascotas.' },
      { q: '¿Cuánto dura un paquete de wax melts?', a: 'Un paquete de 100 g da para 20-30 sesiones de quemador.' },
      { q: '¿Los wax melts se pueden usar sin quemador?', a: 'No. Necesitas un quemador eléctrico o de vela para fundirlos. Nunca los pongas directamente al fuego.' },
    ],
  },

  solea: {
    slug: 'solea',
    metaTitle: 'Colección Solea — velas de verano hechas a mano | Candele Vive',
    metaDescription:
      'Cuatro velas de la Colección Solea, para el verano mediterráneo: sal marina, coco, vainilla, brisa. Cera de soja 100% natural, hechas a mano. 45 h de duración. Envío gratis +50€.',
    ogDescription: 'Cuatro velas de verano inspiradas en el Mediterráneo: sal marina, coco, vainilla y brisa.',
    introTitle: 'Cuatro velas para los meses de más luz',
    introBody: [
      'Solea es nuestra colección de verano. Nació en 2025 — es la más joven de la casa — y la forman tres velas y un wax melt pensados para los meses de junio, julio, agosto y septiembre. Los aromas son frescos, ligeramente dulces, con un punto tropical.',
      'La vela Sabbia (vainilla) es la más golosa de la línea. Solea (coco y cítricos) es la más tropical, la que te lleva a la playa. Brezza (brisa marina) es la más fresca. Y los wax melts Papero (melón fresh) son perfectos para terrazas sin llama. Todas se vierten a mano en el taller de Vilanova i la Geltrú con cera de soja 100% natural, mecha de algodón sin plomo y fragancias sin ftalatos. Duran 45 horas en el formato de 8 oz (230 g).',
      'Solea es para terrazas, cenas al aire libre (en versión wax melt), y para quien echa de menos el mar en invierno. Si prefieres aromas más intensos, mira Radice. Si quieres algo más suave, Ánima.',
    ],
    seasonMonths: 'junio a septiembre',
    season: 'Verano',
    foundedYear: 2025,
    candleCount: 4,
    burnTime: '45 horas',
    weight: '230 g (8 oz)',
    waxType: 'Cera de soja 100% natural, sin parafinas',
    wickType: 'Mecha de algodón sin plomo',
    origin: 'Vilanova i la Geltrú, Barcelona',
    bestFor: 'Terrazas, cenas al aire libre, dormitorios calurosos, viajes a la playa, casas de verano.',
    notFor: 'Quien busca aromas pesados o gourmand. Tampoco para climas muy secos.',
    scentProfile: {
      primary: 'Coco y cítricos',
      secondary: 'Brisa marina',
      accent: 'Vainilla y melón fresh',
    },
    moods: ['fresco', 'tropical', 'mediterráneo', 'ligero'],
    occasions: ['verano', 'playa', 'terraza', 'atardecer'],
    processNotes:
      'Fragancia infusionada con notas de coco, vainilla y un toque salino. Ligera, pensada para no saturar en ambientes calurosos.',
    faqs: [
      {
        q: '¿Cuántas velas tiene la Colección Solea?',
        a: 'Tres velas (Sabbia, Solea, Brezza) más un wax melt (Papero, melón fresh). Es la colección más joven de la casa, nació en 2025.',
      },
      {
        q: '¿Las velas Solea son fuertes?',
        a: 'No, son aromas ligeros, pensados para no saturar en ambientes calurosos. Si buscas algo más envolvente para una cena de verano, prueba con un par de velas a la vez.',
      },
      {
        q: '¿Se pueden encender en exteriores?',
        a: 'Sí, pero ten en cuenta que la cera de soja es más sensible al viento que la parafina. En terrazas protegidas funcionan bien; en terrazas muy expuestas, mejor usar wax melts.',
      },
      {
        q: '¿Qué tiene de especial la vela Solea?',
        a: 'Es nuestra vela más emblemática. La fragancia principal es un acorde de sal marina y bergamota, con un fondo de vainilla. Huele a un pueblo del Garraf en agosto.',
      },
      {
        q: '¿Hacéis velas Solea personalizadas?',
        a: 'Sí, hacemos velas personalizadas para bodas y eventos en verano. La cantidad mínima es 30 unidades. Escríbenos a hola@candelevive.es con el asunto "Solea personalizada".',
      },
      {
        q: '¿Las velas Solea están disponibles todo el año?',
        a: 'Sí, aunque su temporada natural es junio-septiembre. Muchos clientes las compran en invierno para recordar el verano. Solea y Brezza son las más vendidas fuera de temporada.',
      },
    ],
    peopleAlsoAsk: [
      { q: '¿A qué huele Solea?', a: 'A sal marina, bergamota, coco, lima y vainilla. Son aromas frescos y mediterráneos.' },
      { q: '¿Cuántas velas tiene la colección Solea?', a: 'Cuatro velas: Sabbia, Brezza, Solea y Carezza.' },
      { q: '¿Se pueden usar velas de cera de soja en la terraza?', a: 'Sí, en terrazas protegidas. En terrazas muy expuestas, mejor wax melts porque la cera de soja es sensible al viento.' },
      { q: '¿Las velas de verano huelen mucho?', a: 'No, Solea son aromas ligeros pensados para no saturar en ambientes calurosos.' },
    ],
  },

  especiales: {
    slug: 'especiales',
    metaTitle: 'Colección Especiales — velas rituales, packs y ediciones limitadas | Candele Vive',
    metaDescription:
      'Velas rituales, packs de regalo y ediciones limitadas de Candele Vive. Cera de abeja, packs de dos unidades, velas para intenciones. Hechas a mano en Vilanova i la Geltrú.',
    ogDescription: 'La colección que se escapa del calendario: velas rituales, packs de regalo y ediciones limitadas.',
    introTitle: 'Lo que no cabe en las cuatro estaciones',
    introBody: [
      'Especiales es la colección que se sale del calendario. Aquí van las velas que no son de una estación concreta: velas rituales de cera de abeja, packs de regalo de dos unidades, y ediciones limitadas que se agotan en una tarde.',
      'Actualmente tenemos tres productos en esta colección: la Colección Miele (pack de 2 velas de cera de abeja para los días 11 y 22 del mes, ritual de protección y limpieza), la Vela Carezza (vela de masaje con aceite de argán, cera específica que no quema) y Rituale (kit DIY para crear tu propia vela en casa, 500 g de cera de arena con 4 aromas a elegir y 5 mechas).',
      'Todos los productos de Especiales se hacen a mano en el taller de Vilanova i la Geltrú. Las velas rituales usan cera de abeja de apicultores catalanes; los packs vienen en caja kraft con sello. Si buscas algo que no esté en una colección estacional, mira aquí. Si no, Ánima, Radice, Luce y Solea son las cuatro líneas principales.',
    ],
    seasonMonths: 'todo el año',
    season: 'Sin temporada',
    foundedYear: 2024,
    candleCount: 3,
    burnTime: '30 horas (Pack Miele: 30 h por vela)',
    weight: 'Pack de 2 × 120 g · 230 g (vela Carezza)',
    waxType: 'Cera de abeja (rituales) · Cera de soja (Carezza)',
    wickType: 'Mecha de algodón sin plomo',
    origin: 'Vilanova i la Geltrú, Barcelona',
    bestFor: 'Regalos, rituales personales, quien busca algo fuera de las cuatro estaciones.',
    notFor: 'Quien prefiere velas de cera de soja. Las velas rituales usan cera de abeja por decisión de fórmula.',
    scentProfile: {
      primary: 'Cera de abeja natural (miel)',
      secondary: 'Aceite de argán y cera de masaje',
      accent: 'Cera de arena neutra, lista para perfumar',
    },
    moods: ['especial', 'ritual', 'regalo', 'único'],
    occasions: ['regalos', 'rituales', 'ocasiones especiales', 'ediciones limitadas'],
    processNotes:
      'Cera de abeja de apicultores catalanes, vertida a mano en pequeños lotes. Las velas rituales se bendicen en el taller antes de empaquetar.',
    faqs: [
      {
        q: '¿Qué incluye la Colección Especiales?',
        a: 'Tres productos: la vela Ritual (cera de abeja, 230 g), el Pack Miele (dos velas rituales para los días 11 y 22 del mes) y la Vela Carezza (edición limitada de vainilla, 50 unidades al año).',
      },
      {
        q: '¿Las velas rituales son de cera de abeja?',
        a: 'Sí. La vela Ritual y el Pack Miele usan cera de abeja pura de apicultores catalanes. La cera de abeja arde con un aroma natural a miel y tiene una duración ligeramente mayor que la cera de soja.',
      },
      {
        q: '¿Qué es el Pack Miele?',
        a: 'Un pack de dos velas rituales de cera de abeja pensado para los días 11 y 22 de cada mes, que en distintas tradiciones se asocian a la protección y la limpieza energética. Viene en caja kraft con sello.',
      },
      {
        q: '¿La Vela Carezza está disponible todo el año?',
        a: 'No. Es una edición limitada. Hacemos 50 unidades al año y, cuando se agotan, no se reponen hasta el año siguiente. Si la quieres, te recomendamos comprarla en cuanto la veas disponible.',
      },
      {
        q: '¿Puedo pedir una vela personalizada en Especiales?',
        a: 'Sí, hacemos velas personalizadas para bodas, eventos y empresas a partir de 30 unidades. Escríbenos a hola@candelevive.es con el asunto "Personalizadas".',
      },
      {
        q: '¿Hacéis velas sin aroma?',
        a: 'No, todas las velas de Candele Vive llevan fragancia. Si buscas una vela neutra (solo para luz), te recomendamos las velas de cumpleaños de farmacia o las velas de té estándar.',
      },
    ],
    peopleAlsoAsk: [
      { q: '¿Qué son las velas rituales de cera de abeja?', a: 'Velas hechas con cera de abeja pura, vertida a mano. Se usan para meditar, marcar intenciones o rituales personales.' },
      { q: '¿Qué es el Pack Miele?', a: 'Un pack de dos velas rituales para los días 11 y 22 del mes, asociados a protección y limpieza energética. Caja kraft con sello.' },
      { q: '¿Las velas Candele Vive son artesanales?', a: 'Sí, todas se hacen a mano en pequeños lotes en nuestro taller de Vilanova i la Geltrú, Barcelona.' },
    ],
  },
};
