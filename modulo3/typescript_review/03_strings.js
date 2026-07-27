"use strict";
// tipos-string.ts
const nombre = "Ana García";
const saludo = `Hola, ${nombre}`;
const vacia = "";
const comillas = 'También con comillas simples';
console.log(nombre);
console.log(saludo);
console.log(`La cadena vacía tiene longitud: ${vacia.length}`);
// Métodos de string funcionan igual que en JS
console.log(nombre.toUpperCase()); // ANA GARCÍA
console.log(nombre.toLowerCase()); // ana garcía
console.log(nombre.includes("Ana")); // true
console.log(nombre.split(";")); // ["Ana", "García"]
