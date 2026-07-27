function sumarCarrito(a: number, b: number): number {
  return a + b;
}

function saludarCliente(nombre: string): string {
  return `Bienvenido a la tienda, ${nombre}`;
}

console.log(sumarCarrito(1200, 45));
console.log(saludarCliente("Carlos"));

function calcularDescuento(precio: number, porcentaje: number): number {
  const descuento = precio * (porcentaje / 100);
  return Number((precio - descuento).toFixed(2));
}

function resumenCompra(producto: string, precio: number, descuento: number): string {
  const final = calcularDescuento(precio, descuento);
  return `${producto}: $${precio} → $${final} (${descuento}% off)`;
}

console.log(resumenCompra("Galaxy S25", 1200, 15));
console.log(resumenCompra("iPhone 16", 1299, 20));
console.log(resumenCompra("Funda", 25, 0));
