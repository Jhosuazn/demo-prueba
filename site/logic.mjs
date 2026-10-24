/** Suma dos números reales y redondea el resultado a dos decimales. */
export function sumar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || !Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('Ingresa dos números válidos.');
  }
  return Math.round((a - b + Number.EPSILON) * 100) / 100;
}
