const personaje = {
    nombre: 'RImuru',
    codeName: 'Slime',
    edad: 18,
    amigos: ['shion', 'millim', 'shua'],
    direccion: {
        zip: '1000',
        calle: 'slime 200'
    },
    'ultima-serie': 'Slime 4'
}

console.log( { personaje } );
console.log( 'Nombre', personaje.nombre );
console.log( 'Codename', personaje.codeName );
console.log( 'Edad', personaje['edad'] );
console.log( 'Millim?', personaje.amigos[1] );
console.log( 'Num AMigos', personaje.amigos.length );
console.log( 'Dirección:', personaje.direccion.calle, personaje.direccion.zip );
console.log( 'Ultima', personaje["ultima-serie"]);
// solo asi se puede acceder a ese tipo de llaves con guion medio

// borrar propiedad
delete personaje.edad;

// sirve cuando necesitas saber los valores y no conoces el objeto
// o iterar etc
const ePar = Object.entries(personaje);
console.log( ePar );

// para agregar mas
// se pone el punto y un nuevo nombre de llave
personaje.vivo = true;

// los const en objeto solo sirve para bloquear una asignación a un nuevo objeto
// pero no bloquea las propiedad

Object.freeze( personaje );
// esto bloquea el objeto no se pueden modificar las propiedades ni se pueden agregar
// pero no bloquea los objetos dentro del objeto

const propN = Object.getOwnPropertyNames( personaje );
const propV = Object.values( personaje );
console.log({ propN, propV });