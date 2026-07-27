class PrecioProducto {
  private _valor: number;

  constructor(valor: number) {
    this._valor = valor;
  }

  get valor(): number {
    return this._valor;
  }

  set valor(cantidad: number) {
    if (cantidad <= 0) throw new Error("El precio debe ser positivo");
    this._valor = cantidad;
  }

  get conIVA(): number {
    return this._valor * 1.15;
  }
}

const p = new PrecioProducto(1200);
console.log(p.valor);
console.log(p.conIVA.toFixed(2));

p.valor = 1100;
console.log(p.conIVA.toFixed(2));
