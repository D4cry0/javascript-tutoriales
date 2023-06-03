//symbol es un valor unico y no es igual a otro valor
//null es un tipo de dato primitivo

//lo mejor es usar comilla simple o backtip

let nombre = 'Juan';
console.log(nombre, typeof nombre);

//por no ser fuertemente tipado puede mutar su valor
nombre = 123;
console.log(nombre, typeof nombre);

let isGalleta = false;
console.log(isGalleta, typeof isGalleta);

let edad = 35;
console.log(edad, typeof edad);

edad = 35.000;
console.log(edad, typeof edad);
//para js float e int es number

//camel Case para las nombrar variables

let superOxxo;
console.log(superOxxo, typeof superOxxo);
//imprime undefined

let sym1 = Symbol('a');
let sym2 = Symbol('a');
console.log( typeof sym1 );
console.log( typeof sym2 );
console.log(sym1 === sym2); //no son iguales