function calcularTotal(base: number, iva: number): number {
  return base * (1 + iva);
}

const calcularTotalFlecha = (base: number, iva: number): number => {
  return base * (1 + iva);
};

const calcularTotalCorto = (base: number, iva: number): number => base * (1 + iva);

const ahora = (): string => new Date().toLocaleTimeString();

const descuentoDirecto = (p: number): number => p * 0.9;

console.log(calcularTotal(799, 0.15));
console.log(calcularTotalFlecha(799, 0.15));
console.log(calcularTotalCorto(799, 0.15));
console.log(descuentoDirecto(1200));
console.log(ahora());

const trim         = (s: string): string => s.trim();
const aMinusculas  = (s: string): string => s.toLowerCase();
const capitalizar  = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1);
const quitarEspacios = (s: string): string => s.replace(/\s+/g, "_");

function normalizarProducto(nombre: string): string {
  return quitarEspacios(capitalizar(aMinusculas(trim(nombre))));
}

const entradas = ["  SAMSUNG GALAXY  ", " apple iphone", "XIAOMI  REDMI "];
entradas.forEach((e) => console.log(normalizarProducto(e)));
