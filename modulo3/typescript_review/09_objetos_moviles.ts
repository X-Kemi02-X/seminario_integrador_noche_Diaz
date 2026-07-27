const celular: { marca: string; modelo: string; precio: number; stock: number } = {
  marca: "Samsung",
  modelo: "Galaxy S25",
  precio: 1200,
  stock: 45
};

console.log(celular.marca);
console.log(celular.modelo);
console.log(`Precio: $${celular.precio}`);

const producto: { nombre: string; precio: number; descuento?: number } = {
  nombre: "iPhone 16 Pro",
  precio: 1299,
  descuento: 10
};

console.log(producto.descuento);
