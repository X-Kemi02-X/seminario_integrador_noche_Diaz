const enStock:    boolean = true;
const enOferta:   boolean = false;

console.log(enStock);
console.log(!enStock);
console.log(enStock && enOferta);
console.log(enStock || enOferta);

const precio = 950;
const esGamaAlta: boolean = precio >= 800;
console.log(`¿Es gama alta? ${esGamaAlta}`);
