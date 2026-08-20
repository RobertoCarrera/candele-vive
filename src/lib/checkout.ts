/**
 * Estado del checkout y helpers.
 * Vive en localStorage, sin backend.
 *
 * Storage keys:
 *   candele-cart         → { items: [{id, qty}] }              (existente)
 *   candele-checkout     → { shipping, method }                (este)
 *   candele-last-order   → { number, total, items, when }      (este, se borra al cerrar)
 */

import { SITE } from '../data/site';

export type CartItem = { id: number; qty: number };
export type Cart = { items: CartItem[] };

export type ShippingInfo = {
  name: string;
  email: string;
  phone: string;
  address: string;       // calle y número
  address2: string;       // piso, puerta (opcional)
  postal: string;
  city: string;
  province: string;
  country: string;        // default 'España'
  notes: string;          // opcional
};

export type PaymentMethod = 'whatsapp' | 'pickup';

export type Checkout = {
  shipping: ShippingInfo;
  method: PaymentMethod | null;
};

export type LastOrder = {
  number: string;
  when: string;             // ISO date
  items: { id: number; name: string; price: number; qty: number; category: string }[];
  shipping: ShippingInfo;
  method: PaymentMethod;
  subtotal: number;
  shippingCost: number;
  discount: number;
  total: number;
};

const CART_KEY = 'candele-cart';
const CHECKOUT_KEY = 'candele-checkout';
const ORDER_KEY = 'candele-last-order';

const isBrowser = (): boolean =>
  typeof window !== 'undefined' && typeof localStorage !== 'undefined';

export const EMPTY_SHIPPING: ShippingInfo = {
  name: '',
  email: '',
  phone: '',
  address: '',
  address2: '',
  postal: '',
  city: '',
  province: '',
  country: 'España',
  notes: '',
};

// === CART ===
export const readCart = (): Cart => {
  if (!isBrowser()) return { items: [] };
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return { items: [] };
    const p = JSON.parse(raw);
    if (p && Array.isArray(p.items)) return { items: p.items };
  } catch { /* noop */ }
  return { items: [] };
};

export const writeCart = (cart: Cart): void => {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent('cart:updated', { detail: { cart } }));
  } catch { /* noop */ }
};

export const clearCart = (): void => writeCart({ items: [] });

// === CHECKOUT STATE ===
export const readCheckout = (): Checkout => {
  if (!isBrowser()) return { shipping: { ...EMPTY_SHIPPING }, method: null };
  try {
    const raw = localStorage.getItem(CHECKOUT_KEY);
    if (!raw) return { shipping: { ...EMPTY_SHIPPING }, method: null };
    const p = JSON.parse(raw);
    if (p && typeof p === 'object' && p.shipping) return p;
  } catch { /* noop */ }
  return { shipping: { ...EMPTY_SHIPPING }, method: null };
};

export const writeCheckout = (checkout: Checkout): void => {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(CHECKOUT_KEY, JSON.stringify(checkout));
  } catch { /* noop */ }
};

export const saveShipping = (s: ShippingInfo): void => {
  const c = readCheckout();
  c.shipping = s;
  writeCheckout(c);
};

export const saveMethod = (m: PaymentMethod): void => {
  const c = readCheckout();
  c.method = m;
  writeCheckout(c);
};

export const clearCheckout = (): void => {
  if (!isBrowser()) return;
  try {
    localStorage.removeItem(CHECKOUT_KEY);
  } catch { /* noop */ }
};

// === LAST ORDER ===
export const saveLastOrder = (order: LastOrder): void => {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(ORDER_KEY, JSON.stringify(order));
  } catch { /* noop */ }
};

export const readLastOrder = (): LastOrder | null => {
  if (!isBrowser()) return null;
  try {
    const raw = localStorage.getItem(ORDER_KEY);
    if (!raw) return null;
    const p = JSON.parse(raw);
    if (p && p.number) return p;
  } catch { /* noop */ }
  return null;
};

export const clearLastOrder = (): void => {
  if (!isBrowser()) return;
  try { localStorage.removeItem(ORDER_KEY); } catch { /* noop */ }
};

// === HELPERS ===
export const formatPrice = (n: number): string =>
  new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(n);

export const cartSubtotal = (cart: Cart, products: { id: number; price: number }[]): number =>
  cart.items.reduce((s, i) => {
    const p = products.find((x) => x.id === i.id);
    return p ? s + p.price * i.qty : s;
  }, 0);

export const cartItemCount = (cart: Cart): number =>
  cart.items.reduce((s, i) => s + (i.qty || 0), 0);

// === ORDER NUMBER ===
// Formato: CV-YYYYMMDD-XXXX (random corto, sin colisiones obvias)
export const generateOrderNumber = (): string => {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const r = Math.floor(Math.random() * 0xffff).toString(16).toUpperCase().padStart(4, '0');
  return `CV-${y}${m}${day}-${r}`;
};

// === VALIDATION ===
export type ValidationResult = { ok: true } | { ok: false; field: keyof ShippingInfo; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[6-9]\d{8}$/;             // móvil español, 9 dígitos, empieza por 6-9
const POSTAL_RE = /^\d{5}$/;

export const validateShipping = (s: ShippingInfo): ValidationResult => {
  if (s.name.trim().length < 2) return { ok: false, field: 'name', message: 'Nombre completo requerido' };
  if (!EMAIL_RE.test(s.email.trim())) return { ok: false, field: 'email', message: 'Email no válido' };
  if (!PHONE_RE.test(s.phone.replace(/\s/g, ''))) return { ok: false, field: 'phone', message: 'Teléfono debe tener 9 dígitos (ej. 600000000)' };
  if (s.address.trim().length < 3) return { ok: false, field: 'address', message: 'Dirección requerida' };
  if (!POSTAL_RE.test(s.postal.trim())) return { ok: false, field: 'postal', message: 'Código postal: 5 dígitos' };
  if (s.city.trim().length < 2) return { ok: false, field: 'city', message: 'Ciudad requerida' };
  if (!s.province) return { ok: false, field: 'province', message: 'Provincia requerida' };
  return { ok: true };
};

// === WHATSAPP MESSAGE BUILDER ===
export const buildWhatsAppMessage = (params: {
  orderNumber: string;
  shipping: ShippingInfo;
  method: PaymentMethod;
  items: { id: number; name: string; price: number; qty: number }[];
  subtotal: number;
  shippingCost: number;
  discount: number;
}): string => {
  const { orderNumber, shipping, method, items, subtotal, shippingCost, discount } = params;
  const methodLabel = method === 'pickup' ? 'Recogida en taller' : 'Envío a domicilio';

  const lines: string[] = [];
  lines.push(`¡Hola! Quiero hacer un pedido:`);
  lines.push('');
  lines.push(`Pedido: ${orderNumber}`);
  lines.push(`Método: ${methodLabel}`);
  lines.push('');
  lines.push('— Velas —');
  for (const it of items) {
    lines.push(`• ${it.name} × ${it.qty} — ${formatPrice(it.price * it.qty)}`);
  }
  lines.push('');
  lines.push('— Datos de envío —');
  lines.push(`${shipping.name}`);
  lines.push(`${shipping.address}${shipping.address2 ? ', ' + shipping.address2 : ''}`);
  lines.push(`${shipping.postal} ${shipping.city}, ${shipping.province}`);
  lines.push(`${shipping.country}`);
  lines.push(`Tel: ${shipping.phone}`);
  lines.push(`Email: ${shipping.email}`);
  if (shipping.notes.trim()) {
    lines.push('');
    lines.push(`Notas: ${shipping.notes.trim()}`);
  }
  lines.push('');
  lines.push('— Total —');
  lines.push(`Subtotal: ${formatPrice(subtotal)}`);
  if (discount > 0) lines.push(`Descuento: -${formatPrice(discount)}`);
  lines.push(`${method === 'pickup' ? 'Envío' : 'Envío a domicilio'}: ${shippingCost === 0 ? 'Gratis ✦' : formatPrice(shippingCost)}`);
  const total = subtotal - discount + shippingCost;
  lines.push(`Total: ${formatPrice(total)}`);
  lines.push('');
  lines.push('Gracias ✦');

  return lines.join('\n');
};

export const whatsappOrderLink = (message: string): string =>
  `https://wa.me/${SITE.whatsappRaw}?text=${encodeURIComponent(message)}`;
