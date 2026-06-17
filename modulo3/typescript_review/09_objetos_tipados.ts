// objetos.ts

// Declarar el tipo del objeto
const persona: { nombre: string; edad: number; ciudad: string; activo: boolean } = {
  nombre: "Ana García",
  edad:   28,
  ciudad: "Quito",
  activo: true
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(`La persona vive en: ${persona.ciudad}`)
console.log(persona.activo)

// TypeScript avisa si falta una propiedad o tiene el tipo incorrecto
// const persona2: { nombre: string; edad: number } = {
//   nombre: "Luis"
//   // ❌ Error: falta 'edad'
// };

// Propiedad opcional — se añade ? después del nombre
const producto: { nombre: string; precio: number; descuento?: number } = {
  nombre:  "Laptop",
  precio:  999,
  descuento: 20.2,
  // descuento es opcional, no hace falta incluirlo
};

console.log(producto.descuento); // undefined — no se lanza error