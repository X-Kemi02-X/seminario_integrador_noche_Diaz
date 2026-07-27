const precio: number = 950;

let categoria: string;
if (precio >= 800) {
  categoria = "Gama Alta";
} else if (precio >= 300) {
  categoria = "Gama Media";
} else {
  categoria = "Gama Baja";
}

const categoria2: string = precio >= 800 ? "Gama Alta" : "Gama Media/Baja";

console.log(categoria);
console.log(categoria2);

const stock: number = 5;
const disponible = stock > 0 ? "Disponible" : "Agotado";
console.log(`Stock: ${stock} — ${disponible}`);

const resultado =
  precio >= 800 ? "Premium" :
  precio >= 300 ? "Estandar" : "Economico";

console.log(resultado);
