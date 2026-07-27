class Celular {
  marca: string;
  modelo: string;
  precio: number;
  enStock: boolean;

  constructor(marca: string, modelo: string, precio: number, enStock: boolean) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.enStock = enStock;
  }

  describir(): string {
    const estado = this.enStock ? "disponible" : "agotado";
    return `${this.marca} ${this.modelo} — $${this.precio} (${estado})`;
  }
}

const s25 = new Celular("Samsung", "Galaxy S25", 1200, true);
const iphone16 = new Celular("Apple", "iPhone 16", 1299, false);

console.log(s25.describir());
console.log(iphone16.describir());
