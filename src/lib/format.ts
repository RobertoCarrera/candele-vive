/**
 * Helpers de formato + estado del carrito + eventos globales.
 * El carrito vive enteramente en el cliente (no hay backend).
 *
 * Eventos emitidos en window:
 *   cart:updated  → el carrito cambió (sumar, restar, eliminar, vaciar)
 *   cart:open     → abrir el drawer
 *   cart:close    → cerrar el drawer
 *   toast:show    → { detail: { type, message, duration? } }
 */

const STORAGE_KEY = 'candele-cart';

export const formatPrice = (n: number): string =>
  new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(n);

export type CartItem = { id: number; qty: number };
export type Cart = { items: CartItem[] };

export type CartProduct = {
  id: number;
  name: string;
  price: number;
  category: string;
  collection: string;
  image: string;
  imageAlt: string;
};

export const isBrowser = (): boolean =>
  typeof window !== 'undefined' && typeof localStorage !== 'undefined';

export const readCart = (): Cart => {
  if (!isBrowser()) return { items: [] };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { items: [] };
    const parsed = JSON.parse(raw);
    if (parsed && Array.isArray(parsed.items)) {
      return { items: parsed.items.filter((i: unknown) =>
        typeof i === 'object' && i !== null && 'id' in i && 'qty' in i) as CartItem[] };
    }
  } catch { /* noop */ }
  return { items: [] };
};

export const writeCart = (cart: Cart): void => {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent('cart:updated', { detail: { cart } }));
  } catch { /* noop */ }
};

export const cartItemCount = (cart: Cart): number =>
  cart.items.reduce((s, i) => s + (i.qty || 0), 0);

export const cartSubtotal = (cart: Cart, products: CartProduct[]): number =>
  cart.items.reduce((s, i) => {
    const p = products.find((x) => x.id === i.id);
    return p ? s + p.price * i.qty : s;
  }, 0);

export const addToCart = (id: number, qty = 1): Cart => {
  const cart = readCart();
  const existing = cart.items.find((i) => i.id === id);
  if (existing) existing.qty += qty;
  else cart.items.push({ id, qty });
  writeCart(cart);
  return cart;
};

export const setQty = (id: number, qty: number): Cart => {
  const cart = readCart();
  const it = cart.items.find((i) => i.id === id);
  if (!it) return cart;
  if (qty <= 0) cart.items = cart.items.filter((i) => i.id !== id);
  else it.qty = qty;
  writeCart(cart);
  return cart;
};

export const removeFromCart = (id: number): Cart => {
  const cart = readCart();
  cart.items = cart.items.filter((i) => i.id !== id);
  writeCart(cart);
  return cart;
};

export const clearCart = (): void => writeCart({ items: [] });

export const openDrawer = (): void => {
  if (!isBrowser()) return;
  window.dispatchEvent(new CustomEvent('cart:open'));
};

export const closeDrawer = (): void => {
  if (!isBrowser()) return;
  window.dispatchEvent(new CustomEvent('cart:close'));
};

export const showToast = (
  message: string,
  type: 'success' | 'info' | 'error' = 'success',
  duration = 3000,
): void => {
  if (!isBrowser()) return;
  window.dispatchEvent(new CustomEvent('toast:show', { detail: { message, type, duration } }));
};
