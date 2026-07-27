function mostrarProducto(texto: string): void {
  console.log(texto);
}

function mostrarProducto2(texto: string): string {
  console.log(texto);
  return "Producto registrado: " + texto;
}

mostrarProducto("Galaxy S25 - $1200");
console.log(mostrarProducto("iPhone 16 - $1299"));
console.log(mostrarProducto2("Xiaomi 14 - $699"));

function lanzarError(mensaje: string): never {
  throw new Error(mensaje);
}

function bucleInfinito(): never {
  while (true) {
  }
}

function multiplicar(a: number, b: number) {
  return a * b;
}

function dividir(a: number, b: number): number {
  if (b === 0) lanzarError("Division por cero en calculo de precios");
  return a / b;
}

type CodigoRespuesta = 200 | 400 | 401 | 403 | 404 | 500;

function manejarRespuesta(codigo: CodigoRespuesta, datos?: string): void {
  if (codigo === 200) {
    console.log(`Producto cargado: ${datos ?? "sin datos"}`);
    return;
  }
  procesarError(codigo);
}

function procesarError(codigo: CodigoRespuesta): never {
  const mensajes: Partial<Record<CodigoRespuesta, string>> = {
    400: "Solicitud invalida",
    401: "No autenticado",
    403: "Sin permisos",
    404: "Producto no encontrado",
    500: "Error interno del servidor",
  };
  throw new Error(`API ${codigo}: ${mensajes[codigo] ?? "error desconocido"}`);
}

manejarRespuesta(200, "Galaxy S25 cargado");
