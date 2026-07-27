class Inventario {
    stockTotal: number;
    valorTotal: number;

  constructor(stock: number, valor: number) {
    this.stockTotal = stock;
    this.valorTotal = valor;
  }

  agregar(cantidad: number, precioUnitario: number): void {
    this.stockTotal += cantidad;
    this.valorTotal += cantidad * precioUnitario;
  }

  vender(cantidad: number): number {
    if (cantidad > this.stockTotal) {
      console.log("Stock insuficiente");
      return 0;
    }
    const precioPromedio = this.valorTotal / this.stockTotal;
    this.stockTotal -= cantidad;
    this.valorTotal -= cantidad * precioPromedio;
    return cantidad * precioPromedio;
  }

  describir(): string {
    return (
      `Stock: ${this.stockTotal} unidades | ` +
      `Valor: $${this.valorTotal.toFixed(2)}`
    );
  }
}

const inv = new Inventario(50, 60000);
inv.agregar(10, 1200);
console.log(inv.describir());
const venta = inv.vender(5);
console.log(`Venta: $${venta.toFixed(2)}`);
console.log(inv.describir());
