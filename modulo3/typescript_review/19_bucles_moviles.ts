type Estado = "disponible" | "agotado" | "prepedido";

interface Producto {
  nombre: string;
  estado: Estado;
  precio: number;
}

const productos: Producto[] = [
  { nombre: "Galaxy S25",   estado: "disponible", precio: 1200 },
  { nombre: "iPhone 16",    estado: "agotado",    precio: 1299 },
  { nombre: "Xiaomi 14",    estado: "disponible", precio: 699  },
  { nombre: "Pixel 9",      estado: "prepedido",  precio: 999  },
];

console.log("=== Inventario ===");
let agotados = 0;

for (const p of productos) {
  if (p.estado === "agotado") agotados++;

  let icono: string;
  switch (p.estado) {
    case "disponible": icono = "🟢"; break;
    case "agotado":    icono = "🔴"; break;
    case "prepedido":  icono = "🟡"; break;
    default:           icono = "⚪";
  }

  let diagnostico: string;
  if (p.estado === "disponible") {
    if (p.precio < 800) {
      diagnostico = `${icono} ${p.nombre}: en oferta ($${p.precio})`;
    } else {
      diagnostico = `${icono} ${p.nombre}: precio regular ($${p.precio})`;
    }
  } else {
    diagnostico = `${icono} ${p.nombre}: requiere atencion (${p.estado})`;
  }

  console.log(diagnostico);
}

let alerta = agotados;
while (alerta > 0) {
  console.log(`Quedan ${alerta} producto(s) agotado(s) — reabasteciendo...`);
  alerta--;
}
console.log(`Resumen: ${agotados}/${productos.length} agotados`);
