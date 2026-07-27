const precios: number[] = [699, 1299, 549, 899];

precios.forEach((p) => console.log(`Precio: $${p}`));
precios.forEach((precio) => {
    console.log(`Precio: $${precio}`);
    console.log(`IVA 15%: $${(precio * 0.15).toFixed(2)}`);
    console.log(`Total: $${(precio * 1.15).toFixed(2)}`);
});

const preciosConIva: number[] = precios.map((p) => p * 1.15);
console.log(preciosConIva);

const nombres: string[] = ["  SAMSUNG GALAXY  ", "Apple iPhone", " XIAOMI REDMI "];

const limpios: string[] = nombres.map((n) => n.trim().toLowerCase());
console.log(limpios);

limpios.forEach((n, i) => console.log(`Producto ${i + 1}: ${n}`));

const descuentos: number[] = [100, 250, 80, 500];
descuentos.forEach((d) => console.log(d));
