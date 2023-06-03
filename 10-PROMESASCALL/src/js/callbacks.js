const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder: 'REsistenica'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'Alergias'
    },
}


//los errores se manejan en su estructura
//callback
// el err siempre es el primer argumento de esta manera tenemos mejor control de errores
// a partir del 2 en adelante son los argumentos de trabajo
export const buscarHeroe = ( id, callback ) => {
    const heroe = heroes[id];

    if( heroe ){
        callback( null,heroe );
    } else {
        //un error
        callback(`No existe un heroe con el id ${id}`);
    }
};