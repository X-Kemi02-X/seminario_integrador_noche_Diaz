// Concepto puro
type ID = string | number;           // unión de primitivos
type Nombre = string;                // alias de primitivo (documenta intención)
type Coordenadas = [number, number]; // alias de tupla

// Alias de objeto
type Punto = {
  x: number;
  y: number;
};

const origen: Punto = { x: 0, y: 0 };
const id: ID = 42;          // válido
const id2: ID = "usr-001";  // también válido