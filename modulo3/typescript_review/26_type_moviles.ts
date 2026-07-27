type ID = string | number;
type NombreProducto = string;
type Precios = [number, number];

type Telefono = {
  marca: string;
  modelo: string;
  precio: number;
};

const origen: Telefono = { marca: "Samsung", modelo: "Galaxy S25", precio: 1200 };
const id: ID = 42;
const id2: ID = "cel-001";
