let stock = 50;
let lote = 0;

while (stock > 0) {
  const cantidad = stock > 10 ? 10 : stock;
  lote++;
  stock -= cantidad;
  console.log(`Lote ${lote}: ${cantidad} unidades vendidas (quedan ${stock})`);
}

let intentos = 0;
let pagoExitoso = false;

do {
  intentos++;
  console.log(`Intento de pago #${intentos}...`);
  if (intentos === 3) pagoExitoso = true;
} while (!pagoExitoso && intentos < 5);

console.log(pagoExitoso ? `Pago exitoso en ${intentos} intentos` : "Pago fallido");
