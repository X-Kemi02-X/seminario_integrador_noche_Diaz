const inventarios: number[] = [45, 120, -1, 30, 5, -1, 200];

console.log("=== con continue ===");
for (const s of inventarios) {
  if (s < 0) {
    console.log("Stock incorrecto ignorado");
    continue;
  }
  console.log(`Procesando ${s} unidades`);
}

console.log("=== con break ===");
for (const s of inventarios) {
  if (s < 0) {
    console.log("Error critico — deteniendo inventario");
    break;
  }
  console.log(`Procesando ${s} unidades`);
}
