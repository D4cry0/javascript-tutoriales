import { obtenerHeroesArr, obtenerHeroeAwait, heroesCiclo, heroeifAwai } from './js/awit';
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe, buscarHeroeAsync, promesaLenta, promesaMedia, promesaRapida } from './js/promesas';
import './styles.css';

//TODO: Código principal

const heroeId1 = 'capi';
const heroeId2 = 'iron';

// CALLBACKS
buscarHeroeCallback(heroeId1, ( err, heroe1 ) => {
    console.log('Llame callback');

    //la practica comun es manejar el error primero
    // y esta es la razon para poder identificarlo en la parte de la implementacion
    if( err ) { return console.error(err); }

    // anidarlas/identarlas de esta manera se traduce en callback hell :(
    buscarHeroeCallback( heroeId2, ( err, heroe2 ) => {
        if( err ) { return console.error(err); }

        console.log(`1 Enviando a ${ heroe1.nombre } y ${ heroe2.nombre } a la mision `);
    });
});



// PROMESAS
// Ej de promise hell - identar
buscarHeroe(heroeId1).then( heroe1 => {
    //console.log(`Enviando a ${heroe1.nombre} a la mision`);
    buscarHeroe( heroeId2 ).then( heroe2 => {
        console.log(`2 Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
    });
});

// PROMISE ALL
// Desestructuracion de un arreglo como parametro a una funcion
// ([ arreglo ])
// Promise.all([true, 'hola', 123]).then( arr => { console.log(arr)})
// puedes mandar o hacer lo que sea con los argumentos hasta varias funciones
Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
    .then( ([ heroe1,heroe2 ]) => {
    console.log(`3 Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);

}).catch( err => {
    //se ejecuta en base al reject
    //se ejecuta una vez se obtenga un error y el resto de las funciones no se ejecutara
    alert(err);
}).finally( () => {
    console.log('Todo se termino');
})
// se pueden mandar varias funciones como callbacks para que se ejecuten


//PROMISE RACE
// promesaLenta.then( console.log );
// promesaMedia.then( mensaje => console.log(mensaje) );
// promesaRapida.then( console.log );

//se ejecuta la mas rapida
// si aparece un error con reject se ignora para las mas lentas
// si el error lo genera la mas rapida ahi si aparece
Promise.race([ promesaLenta, promesaMedia, promesaRapida ])
        .then( console.log )
        .catch( console.err );

//PROMISE ASYNC
buscarHeroe( 'capi2' )
    .then(heroe => console.log(heroe) )
    .catch( console.warn );
buscarHeroeAsync( 'iron2' )
    .then( heroe => console.log(heroe) )
    .catch( console.warn );

obtenerHeroesArr().then( console.table );

//PROMISE AWAIT
console.time('await');
obtenerHeroeAwait('capi')
    .then(heroe => {
        console.log(heroe);

        console.timeEnd('await');
    }).catch( console.warn );


//FOR AWAIT
heroesCiclo();
//IF AWAIT
heroeifAwai('iron');

console.log('Fin del programa');