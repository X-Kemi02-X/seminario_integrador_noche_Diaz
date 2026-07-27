class ProductoBase {
  constructor(public nombre: string, public precio: number) {}

  describir(): string {
    return `${this.nombre} cuesta $${this.precio}.`;
  }
}

class Smartphone extends ProductoBase {
  constructor(nombre: string, precio: number, public marca: string, public sistemaOperativo: string) {
    super(nombre, precio);
  }

  override describir(): string {
    return `${this.marca} ${this.nombre} (${this.sistemaOperativo}) — $${this.precio}`;
  }

  encender(): string {
    return `${this.nombre} encendido con ${this.sistemaOperativo}.`;
  }
}

const base = new ProductoBase("Celular generico", 300);
const s25 = new Smartphone("Galaxy S25", 1200, "Samsung", "Android 15");

console.log(base.describir());
console.log(s25.describir());
console.log(s25.encender());
console.log(s25.marca);
