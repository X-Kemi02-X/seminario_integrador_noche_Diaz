// Concepto puro
const puertos: Record<string, number> = {
  HTTP: 80,
  HTTPS: 443,
  SSH: 22,
};

for (const servicio in puertos) {
  console.log(`${servicio} → puerto ${puertos[servicio]}`);
}
// HTTP → puerto 80, HTTPS → puerto 443, SSH → puerto 22

const config = {
  host: "localhost",
  port: 8080,
  debug: true,
  maxConexiones: 100,
};

console.log("=== Configuración activa ===");
for (const clave in config) {
  const valor = config[clave as keyof typeof config];
  console.log(`${clave.padEnd(15)}: ${valor}`);
}

let contador = 0;
const notas = { mate: 85, fisica: 70, quimica: 95, historia: 60 }
for (const nota in notas) {
  const valor = notas[nota as keyof typeof notas];
  console.log(`${nota.padEnd(15)}: ${valor}`);
  if (valor>=70) {
    contador++;
  }
}
console.log(contador)
