const dia = 0;
const horaActual = 10;

let horaApertura;
let mensaje;

// [4,5,6,3,8].includes(valor);
// busca en arreglos, sirve para if con muchos parametros


horaApertura = [0,6].includes(dia) ? 9 : 11;

mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${ horaApertura}`;

console.log({ horaApertura, mensaje });



