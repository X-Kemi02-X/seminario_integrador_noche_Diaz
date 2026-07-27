function crearEtiqueta(texto: string, mayusculas?: boolean): string {
  if (mayusculas) {
    return `[${texto.toUpperCase()}]`;
  }
  return `[${texto}]`;
}

console.log(crearEtiqueta("iphone 16"));
console.log(crearEtiqueta("samsung galaxy", true));

function repetir(texto: string, veces: number = 3): string {
  return texto.repeat(veces);
}

console.log(repetir("Oferta! "));
console.log(repetir("Oferta! ", 5));

type Nivel = "info" | "warn" | "error";

function log(
  mensaje: string,
  nivel: Nivel = "info",
  timestamp?: boolean
): string {
  const prefijos: Record<Nivel, string> = {
    info:  "INFO ",
    warn:  "WARN ",
    error: "ERROR",
  };

  const hora = timestamp ? ` [${new Date().toISOString()}]` : "";
  return `${prefijos[nivel]}${hora}: ${mensaje}`;
}

console.log(log("Tienda iniciada"));
console.log(log("Stock bajo en Galaxy S25", "warn"));
console.log(log("Pago rechazado iPhone 16", "error", true));
