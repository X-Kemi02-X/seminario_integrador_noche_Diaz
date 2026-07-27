type Transformador = (x: number) => number;
type Predicado     = (x: number) => boolean;

function aplicar(n: number, fn: Transformador): number {
  return fn(n);
}

function multiplicadorDe(factor: number): Transformador {
  return (x) => x * factor;
}

const conIva = multiplicadorDe(1.15);
const cuadrado: Transformador = (x) => x * x;

console.log(aplicar(1200, conIva));
console.log(aplicar(1200, cuadrado));
console.log(aplicar(1200, (x) => x - 100));

function filtrar(nums: number[], condicion: Predicado): number[] {
  return nums.filter(condicion);
}

const precios = [699, 1299, 549, 899, 199];
console.log(filtrar(precios, (n) => n >= 800));
console.log(filtrar(precios, (n) => n < 600));
