// hola.js — generado por tsc
const nombre: string  = "Ana Garcia";
const edad:   number  = 28;
const activo: boolean = true;


// Sin tipo — TypeScript lo infiere automáticamente del valor
const nombre2 = "Ana";   // TypeScript sabe que es string
const edad2   = 28;      // TypeScript sabe que es number
const activo2 = true;    // TypeScript sabe que es boolean

console.log(`Me llamo ${nombre} `)  
console.log(`Tengo ${edad} años `)
