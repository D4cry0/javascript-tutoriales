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

export const buscarHeroe = (id) => {
    const heroe = heroes[id];

    return new Promise((resolve, reject) => {
        if (heroe) {
            resolve(heroe);
        } else {
            reject(`No existe un heroe con el id ${id}`);
        }
    });
};

//indirectamente returna un promise 
export const buscarHeroeAsync = async (id) => {
    const heroe = heroes[id];

    // return new Promise((resolve, reject) => {
    //     if (heroe) {
    //         resolve(heroe);
    //     } else {
    //         reject(`No existe un heroe con el id ${id}`);
    //     }
    // });

    if (heroe) {
        return heroe;
    } else {
        //trhow es para el reject
        // puedes lanzar un Error
        throw Error(`No existe un heroe con el id ${id}`);
    }

};


const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Lenta'), 2000);
});

const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Media'), 1500);
});

const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Rapida'), 1000);
});

export {
    promesaLenta,
    promesaRapida,
    promesaMedia
}