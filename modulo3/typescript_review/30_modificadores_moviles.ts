class ProductoMovil {
  readonly codigo: string;
  public nombre: string;
  private precio: number;
  protected marca: string;

  constructor(codigo: string, nombre: string, precioInicial: number, marca: string) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precioInicial;
    this.marca = marca;
  }

  obtenerPrecio(): number {
    return this.precio;
  }

  aplicarDescuento(monto: number): void {
    if (monto <= 0) throw new Error("Monto invalido");
    this.precio -= monto;
  }
}

const movil = new ProductoMovil("SM-S25", "Galaxy S25", 1200, "Samsung");
console.log(movil.nombre);
console.log(movil.codigo);
console.log(movil.obtenerPrecio());
movil.aplicarDescuento(100);
console.log(movil.obtenerPrecio());
