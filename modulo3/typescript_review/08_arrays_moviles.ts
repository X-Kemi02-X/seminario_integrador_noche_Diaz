const marcas:   string[]  = ["Samsung", "Apple", "Xiaomi"];
const precios:  number[]  = [1200, 1299, 699];
const activos:  boolean[] = [true, false, true];

console.log(marcas);
console.log(marcas[0]);
console.log(marcas.length);

marcas.push("Motorola");
console.log(marcas);

const mayusculas = marcas.map(m => m.toUpperCase());
console.log(mayusculas);

const caros = precios.filter(p => p >= 1000);
console.log(caros);
