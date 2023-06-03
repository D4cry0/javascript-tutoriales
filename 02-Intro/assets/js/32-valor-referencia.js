let a = 10, 
    b = a;

a = 30;

// todos los objetos son pasados por referencia
// los primitivos por valor

const cambiaNombre = ( persona ) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre( peter );

console.log({ peter, tony });
//en las funciones tambien los objetos pasan por referencia


// Operador Spread ...
let otroA = { nombre: 'Perro' };
let otroB = { ...otroA };
otroB.nombre = 'Gato';
// con el operador ya rompe con la referencia
// genera un objeto independiente
// Ojo en las funciones como parametro se llama REST
// fuera de las funciones es Spread

// en funciones
const cambiaNombreA = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

// con arreglos
const arr = ['Peras', 'Platano'];
const otroAr = [...arr];
// otra forma con arreglos
const otroAB = arr.splice();