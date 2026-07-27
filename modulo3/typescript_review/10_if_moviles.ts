console.log("Precio regular - gama baja");

const precio: number = 350;

if (precio > 0) {
    console.log("Celular disponible en catalogo");
}

console.log("Descuento por membresia");

const esPremium: string = "si";

if (esPremium == "si") {
    console.log("Descuento del 10% aplicado");
} else {
    console.log("Precio regular sin descuento");
}

console.log("Clasificacion por precio");

const precioCelular: number = 950;

if (precioCelular < 300) {
  console.log("Gama baja");
} else if (precioCelular < 800) {
  console.log("Gama media");
} else {
  console.log("Gama alta");
}

console.log("Verificacion de venta");

type Membresia = "VIP" | "Regular";
const cliente: Membresia = "VIP";
let envioGratis: boolean = true;
let costoEnvio: number = 0;

if (cliente == "VIP") {
    if (envioGratis) {
        costoEnvio = 0;
    } else {
        costoEnvio = 5;
    }
} else {
    if (envioGratis) {
        costoEnvio = 0;
    } else {
        costoEnvio = 15;
    }
}

console.log("El costo de envio es: ", costoEnvio);
