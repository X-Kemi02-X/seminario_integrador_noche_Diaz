const marca:    string = "Samsung";
const modelo:   string = `Galaxy ${marca}`;
const vacio:    string = "";
const comillas: string = 'iPhone 16 Pro';

console.log(marca);
console.log(modelo);
console.log(`Longitud del modelo: ${modelo.length}`);

console.log(marca.toUpperCase());
console.log(modelo.toLowerCase());
console.log(modelo.includes("Galaxy"));
console.log(modelo.split(" "));
console.log(comillas);
