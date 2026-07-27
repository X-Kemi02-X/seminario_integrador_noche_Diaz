interface Celular {
  readonly id: number;
  marca: string;
  modelo: string;
  precio: number;
  color?: string;
}

const c: Celular = { id: 1, marca: "Samsung", modelo: "Galaxy S25", precio: 1200 };

interface ProductoMovil {
  readonly codigo: string;
  nombre: string;
  precio: number;
  descripcion?: string;
  enStock: boolean;
}

function mostrarProducto(p: ProductoMovil): void {
  const desc = p.descripcion ? ` — ${p.descripcion}` : "";
  const stock = p.enStock ? "Disponible" : "Agotado";
  console.log(`[${p.codigo}] ${p.nombre} $${p.precio}${desc} (${stock})`);
}

const galaxy: ProductoMovil = {
  codigo: "SM-S25",
  nombre: "Galaxy S25",
  precio: 1200,
  descripcion: "Pantalla AMOLED, 256GB",
  enStock: true,
};

const funda: ProductoMovil = {
  codigo: "ACC-001",
  nombre: "Funda Silicona",
  precio: 25,
  enStock: false,
};

mostrarProducto(galaxy);
mostrarProducto(funda);

interface Vendedor {
  readonly id: string;
  nombre: string;
  apellido: string;
  tienda: string;
  sucursal?: string;
}

function mostrarVendedor(e: Vendedor): void {
  console.log(`[${e.id}] ${e.nombre} ${e.apellido} - ${e.tienda} - ${e.sucursal ?? "N/A"}`);
}

const v1: Vendedor = {
  id: "V-001",
  nombre: "Carlos",
  apellido: "Lopez",
  tienda: "TechMobile",
  sucursal: "Centro",
};

const v2: Vendedor = {
  id: "V-002",
  nombre: "Maria",
  apellido: "Gomez",
  tienda: "TechMobile",
};

mostrarVendedor(v1);
mostrarVendedor(v2);
