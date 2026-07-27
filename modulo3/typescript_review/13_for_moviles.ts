for (let i = 1; i <= 5; i++) {
  console.log(`Celular ${i} en vitrina`);
}

const modelos: string[] = ["Galaxy S25", "iPhone 16", "Xiaomi 14", "Motorola Edge"];

for (let i = 0; i < modelos.length; i++) {
  console.log(`${i + 1}. ${modelos[i]}`);
}

for (let i = modelos.length - 1; i >= 0; i--) {
  console.log(modelos[i]);
}

function tablaPrecios(precioBase: number): void {
  console.log(`\n--- Precios con IVA (${precioBase}) ---`);
  for (let i = 1; i <= 5; i++) {
    const iva = 0.15 * i;
    const total = precioBase * (1 + iva);
    console.log(`  IVA ${(iva * 100).toFixed(0)}% = $${total.toFixed(2)}`);
  }
}

tablaPrecios(799);
