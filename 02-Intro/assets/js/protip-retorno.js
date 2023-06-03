// objetos con llave y argumento iguales
// nombre: nombre puede ser igual a solo nombre
// ej consola
// ya que es una "destructuracion implicita"
// const t = (nombre, consola) => {
//     return {
//         nombre: nombre,
//         consola, 
//     }
// }

//para hacer un return implicito de un objeto en una sola linea
//debe esta encerrado en parentesis
const t = (nombre, consola) => ({nombre, consola});


// para trabajar con arguments en funcion de flecha
// parametro rest
// no puedes tener parametros despues del rest
// 
const argumentF = ( test, ...args ) => {
    console.log( {test, args} );
    return args;
}


const [ d1, d2, d3, d4 ] = argumentF(34, 'Pollo', 'gato', [3,4,5,6], {nombre:'Ed'});
console.log({ d1,d2,d3,d4 });

// para buscar exactamente cual necesitas por el nombre del argumento
// puedes renombrar con :
const { nombre: nom } = t('Pedro', 'Play');
console.log(nom);

// las llaves como parametro de una funcion te destructuran un objeto
// las llaves como retorno de una funcion generan un objeto
// [] para destructurar te ayudan a asignar datos a nuevas variables
// puedes hacer [a, b, ...rest]
// {} las llaves son para obtener el valor cuando conoces el nombre exacto
// - se puede renombrar con :
