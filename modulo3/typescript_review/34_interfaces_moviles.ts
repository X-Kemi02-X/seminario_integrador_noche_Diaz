interface Vendible {
  calcularPrecio(): number;
}

interface Inventariable {
  esValido(): boolean;
}

class ProductoVenta implements Vendible, Inventariable {
  constructor(
    public id: string,
    public nombre: string,
    public precio: number,
    public stock: number
  ) {}

  calcularPrecio(): number {
    return this.precio * 1.15;
  }

  esValido(): boolean {
    return this.stock > 0 && this.precio > 0;
  }
}

const movil = new ProductoVenta("P-001", "Galaxy S25", 1200, 45);
console.log(movil.esValido());
console.log(movil.calcularPrecio());

interface RepositorioLectura<T> {
  buscarPorId(id: number): T | undefined;
  listarTodos(): T[];
}

interface RepositorioEscritura<T> {
  guardar(entidad: T): void;
  eliminar(id: number): boolean;
}

interface Repositorio<T> extends RepositorioLectura<T>, RepositorioEscritura<T> {}

interface ProductoEntidad {
  id: number;
  nombre: string;
  precio: number;
}

class RepositorioProductos implements Repositorio<ProductoEntidad> {
  private datos: ProductoEntidad[] = [];

  guardar(p: ProductoEntidad): void {
    this.datos.push(p);
  }

  eliminar(id: number): boolean {
    const idx = this.datos.findIndex((p) => p.id === id);
    if (idx === -1) return false;
    this.datos.splice(idx, 1);
    return true;
  }

  buscarPorId(id: number): ProductoEntidad | undefined {
    return this.datos.find((p) => p.id === id);
  }

  listarTodos(): ProductoEntidad[] {
    return [...this.datos];
  }
}

const repo = new RepositorioProductos();
repo.guardar({ id: 1, nombre: "Galaxy S25", precio: 1200 });
repo.guardar({ id: 2, nombre: "iPhone 16", precio: 1299 });
console.log(repo.buscarPorId(1));
console.log(repo.listarTodos().length);
repo.eliminar(1);
console.log(repo.listarTodos().length);
