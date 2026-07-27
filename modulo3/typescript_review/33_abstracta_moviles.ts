abstract class Producto {
  abstract calcularPrecioFinal(): number;

  describir(): string {
    return `Precio final: $${this.calcularPrecioFinal().toFixed(2)}`;
  }
}

class CelularGama extends Producto {
  constructor(private precioBase: number, private iva: number = 0.15) {
    super();
  }

  override calcularPrecioFinal(): number {
    return this.precioBase * (1 + this.iva);
  }
}

class Accesorio extends Producto {
  constructor(private precioBase: number, private descuento: number = 0) {
    super();
  }

  override calcularPrecioFinal(): number {
    return this.precioBase * (1 - this.descuento / 100);
  }
}

const s25 = new CelularGama(1200);
const funda = new Accesorio(25, 10);

console.log(s25.describir());
console.log(funda.describir());
