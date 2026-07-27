const especificaciones: Record<string, string | number> = {
  pantalla: "6.8 pulgadas",
  ram: 12,
  almacenamiento: 256,
  bateria: "5000 mAh",
};

for (const clave in especificaciones) {
  console.log(`${clave} → ${especificaciones[clave]}`);
}

const producto = {
  marca: "Samsung",
  modelo: "Galaxy S25",
  precio: 1200,
  stock: 45,
};

console.log("=== Ficha del producto ===");
for (const clave in producto) {
  const valor = producto[clave as keyof typeof producto];
  console.log(`${clave.padEnd(14)}: ${valor}`);
}

let contador = 0;
const calificaciones = { rendimiento: 9, camara: 8, bateria: 7, diseno: 10 };
for (const nota in calificaciones) {
  const valor = calificaciones[nota as keyof typeof calificaciones];
  console.log(`${nota.padEnd(14)}: ${valor}`);
  if (valor >= 8) {
    contador++;
  }
}
console.log(`Aspectos con nota >= 8: ${contador}`);
