const gama: number = 2;

switch (gama) {
  case 1:
    console.log("Gama Baja - Celulares economicos");
    break;
  case 2:
    console.log("Gama Media - Celulares estandar");
    break;
  case 3:
    console.log("Gama Alta - Celulares premium");
    break;
  default:
    console.log("Gama no definida");
}

type CategoriaMovil = "smartphone" | "tablet" | "accesorio" | "wearable";

function mensajeCategoria(cat: CategoriaMovil): string {
  switch (cat) {
    case "smartphone":
      return "Telefono inteligente con sistema operativo";
    case "tablet":
      return "Dispositivo portatil con pantalla grande";
    case "accesorio":
      return "Complemento para tu dispositivo movil";
    case "wearable":
      return "Dispositivo vestible inteligente";
  }
}

console.log(mensajeCategoria("smartphone"));
console.log(mensajeCategoria("wearable"));
