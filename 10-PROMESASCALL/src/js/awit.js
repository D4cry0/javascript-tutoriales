import { buscarHeroe, buscarHeroeAsync } from "./promesas";


const heroesIds = ['capi', 'iron', 'spider'];
//const heroesPromesas = heroesIds.map( id => buscarHeroe(id) );
const heroesPromesas = heroesIds.map( buscarHeroe );

//await debe estar dentro de una funcion async
// export const obtenerHeroesArr = async () => {
//     const heroesArr = [];

//     for(const id of heroesIds){
//         // le decimos que esperemos a que las promesas se completen
//         const heroe = await buscarHeroeAsync(id);
//         heroesArr.push(heroe);
//     }

//     return heroesArr;
// };


// export const obtenerHeroesArr = async () => {
//     const heroesArr = [];

//     for(const id of heroesIds){
//         // le decimos que esperemos a que las promesas se completen
//         // buscarHeroeAsync(id) retorna promesas
//         // heroesArr es un arreglo de promesas
//         heroesArr.push(buscarHeroeAsync(id));
//     }

//     //ayuda hacer las peticiones de manera simultanea
//     // de esta manera no tienes que esperar a que termine una por una
    
//     //la mejor practica es usar await fuera ya que todo sea procesado
//     return await Promise.all( heroesArr );
// };

export const obtenerHeroesArr = async () => {
    //usa implicitamente el id de heroesId en buscarHeroe
    //.map genera un nuevo arreglo con todos los resultados de buscarHeroe
    // arreglo de promesas
    return await Promise.all(heroesIds.map( buscarHeroe ));
};


export const obtenerHeroeAwait = async( id ) => {
    //aqui puede manejar los errores que lancen las funciones async
    try {
        //ESTA PARTE SIN EL AWAIT SOLO REGRESA PROMESAS SIN EJECUTAR
        const heroe = await buscarHeroeAsync(id);
        return heroe;

    } catch ( err ) {
        console.log('entro al catch');
        throw err;
    }
}

export const heroesCiclo = async() => {
    console.time('HeroesCiclo');

    // const heroes = await Promise.all( heroesPromesas );
    // heroes.forEach( heroe => console.log(heroes) );

    //es similar a lo de arriba
    for await( const heroe of heroesPromesas ){
        console.log(heroe);
    }


    console.timeEnd('HeroesCiclo');
};

export const heroeifAwai = async(id) => {
    //if await
    //con el ( esperar ) a que se ejecute algo y acceder
    if( (await buscarHeroeAsync(id)).nombre === 'Ironman' ){
        console.log('El mejor');
    } else {
        console.log('Naa');
    }
};