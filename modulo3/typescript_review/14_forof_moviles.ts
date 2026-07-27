const modelos: string[] = ["Galaxy S25", "iPhone 16", "Xiaomi 14", "Motorola Edge"];
const precios: number[] = [1200, 1299, 699, 549];

for (const modelo of modelos) {
  console.log(`Modelo: ${modelo}`);
}

let total: number = 0;
for (const precio of precios) {
  total += precio;
}
console.log(`Total inventario: $${total}`);

for (const [indice, modelo] of modelos.entries()) {
  console.log(`${indice + 1}. ${modelo}`);
}

interface ItemCarrito {
  nombre: string;
  precio: number;
  cantidad: number;
}

const carrito: ItemCarrito[] = [
  { nombre: "Galaxy S25",   precio: 1200, cantidad: 1 },
  { nombre: "Funda Silicon", precio: 25,  cantidad: 2 },
  { nombre: "Cargador rapido", precio: 45, cantidad: 1 },
];

let totalCarrito = 0;
for (const item of carrito) {
  const subtotal = item.precio * item.cantidad;
  console.log(`${item.nombre}: $${subtotal}`);
  totalCarrito += subtotal;
}
console.log(`TOTAL: $${totalCarrito}`);
