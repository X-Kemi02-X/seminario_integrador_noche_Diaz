class EmpleadoTienda {
  constructor(
    public nombre: string,
    protected salarioBase: number
  ) {}

  calcularSalario(): number {
    return this.salarioBase;
  }

  infoLaboral(): string {
    return `${this.nombre} — Salario: $${this.calcularSalario()}`;
  }
}

class VendedorMovil extends EmpleadoTienda {
  constructor(
    nombre: string,
    salarioBase: number,
    private comision: number,
    private ventasMes: number
  ) {
    super(nombre, salarioBase);
  }

  override calcularSalario(): number {
    return this.salarioBase + this.comision * this.ventasMes;
  }
}

class Tecnico extends EmpleadoTienda {
  constructor(
    nombre: string,
    salarioBase: number,
    private bonoReparacion: number,
    private reparacionesMes: number
  ) {
    super(nombre, salarioBase);
  }

  override calcularSalario(): number {
    return this.salarioBase + this.bonoReparacion * this.reparacionesMes;
  }
}

const emp = new EmpleadoTienda("Carlos", 2000);
const vend = new VendedorMovil("Laura", 1500, 50, 30);
const tec = new Tecnico("Pedro", 1800, 20, 15);

console.log(emp.infoLaboral());
console.log(vend.infoLaboral());
console.log(tec.infoLaboral());
