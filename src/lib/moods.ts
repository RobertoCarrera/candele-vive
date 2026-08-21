/**
 * Moods / emociones de cada producto.
 * Usado por los filtros del catálogo (`/catalogo`).
 * Las 5 emociones salen del briefing de la cliente: relax, energía, hogar, conexión, naturaleza.
 * Cada producto se asigna a 1-2 emociones donde encaja mejor.
 */

export const MOODS = ['relax', 'energia', 'hogar', 'conexion', 'naturaleza'] as const;
export type Mood = (typeof MOODS)[number];

export const MOOD_LABEL: Record<Mood, string> = {
  relax: 'Relax',
  energia: 'Energía',
  hogar: 'Hogar',
  conexion: 'Conexión',
  naturaleza: 'Naturaleza',
};

export const MOOD_DESCRIPTION: Record<Mood, string> = {
  relax: 'Para bajar el ritmo, antes de dormir, después de un día largo.',
  energia: 'Para empezar el día, para mañanas con café, para activar el cuerpo.',
  hogar: 'Para el salón, la cocina, el recibidor. Velas que ambientan una casa.',
  conexion: 'Para rituales, regalos con intención, velas que unen personas.',
  naturaleza: 'Para quien echa de menos el campo, el mar, las flores del campo.',
};

/** Mapa id -> moods. Mantener sincronizado con `src/content/products/*.md` (campo `id`). */
export const PRODUCT_MOODS: Record<number, Mood[]> = {
  // Ánima — Primavera
  1:  ['relax', 'conexion'],        // Intuizione — jazmín
  2:  ['conexion', 'hogar'],        // Essenza — rosa
  3:  ['naturaleza', 'energia'],     // Fiora — explosión floral
  4:  ['energia', 'hogar'],         // Wax melts Cuore — chuche
  // Radice — Invierno
  5:  ['hogar', 'relax'],           // Focolare — leche caliente
  6:  ['energia', 'hogar'],         // Risveglio — café tostado
  7:  ['hogar', 'conexion'],        // Terra — canela
  8:  ['hogar', 'relax'],           // Wax melts Forno — matcha honey
  // Luce — Otoño
  9:  ['relax'],                    // Alba — lavanda
  10: ['energia', 'naturaleza'],    // Respiro — romero
  11: ['hogar', 'relax'],           // Fresca — ropa limpia
  12: ['conexion', 'hogar'],        // Wax melts Nuvola — Nenuco
  // Solea — Verano
  13: ['conexion', 'relax'],        // Sabbia — vainilla
  14: ['naturaleza', 'energia'],    // Solea — coco y cítricos
  15: ['relax', 'naturaleza'],       // Brezza — brisa marina
  16: ['naturaleza', 'energia'],    // Wax melts Papero — melón fresh
  // Especiales
  17: ['conexion'],                 // Colección Miele — pack ritual
  18: ['conexion', 'relax'],        // Vela Carezza — masaje
  19: ['energia', 'hogar'],         // Rituale — kit DIY
};

export const moodsFor = (id: number): Mood[] => PRODUCT_MOODS[id] ?? [];
