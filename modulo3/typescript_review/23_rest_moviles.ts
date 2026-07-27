function sumarPrecios(...precios: number[]): number {
  return precios.reduce((acc, n) => acc + n, 0);
}

console.log(sumarPrecios(1200, 25, 45));
console.log(sumarPrecios(1299, 699, 549, 899));
console.log(sumarPrecios());

function construirRuta(base: string, ...segmentos: string[]): string {
  return [base, ...segmentos].join("/");
}

console.log(construirRuta("https://api.tiendamoviles.com", "v1", "productos", "42"));

function registrarEvento(tipo: string, ...detalles: string[]): void {
  const timestamp = new Date().toLocaleTimeString();
  const cuerpo = detalles.length > 0 ? ` | ${detalles.join(" · ")}` : "";
  console.log(`[${timestamp}] ${tipo.toUpperCase()}${cuerpo}`);
}

registrarEvento("venta");
registrarEvento("venta", "producto: Galaxy S25", "monto: $1200");
registrarEvento("devolucion", "producto: iPhone 16", "razon: falla de fabrica", "reembolso: $1299");
