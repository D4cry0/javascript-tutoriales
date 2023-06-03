
const jokeURL = 'https://api.chucknorris.io/jokes/random';
const usuariosURL = 'https://reqres.in/api/users?page=2';

// Cloudinary
const cloudPreset = 'egugosot';
const cloudUrl = 'https://api.cloudinary.com/v1_1/dmkkzoe2j/upload';

// fetch(jokeURL).then(resp => {
//     //extrae el body en formato json
//     //tambien en promesa
//     resp.json().then(({ id, value }) => {
//         console.log(id);
//         console.log(value);
//     });
// });

// Promesas en cadenas
// fetch(jokeURL)
//     .then(resp => resp.json())
//     .then(({ id, value }) => {
//         console.log(id);
//         console.log(value);
//     });

const obtenerChiste = async() => {

    try{

        const resp = await fetch( jokeURL );
    
        if(!resp.ok) throw 'No se pudo realizar'; 
    
        const {icon_url,id,value} = await resp.json();
        return {icon_url,id,value};
        
    } catch ( err ){
        throw err;
    }
}

const obtenerUsuarios = async() => {
    try{
        const resp = await fetch( usuariosURL );

        if(!resp.ok) throw 'No se pudo realizar';

        const { data: usuarios } = await resp.json();

        return usuarios;
        
    } catch( err ){
        throw err;
    }
}


// archivoSubir :: File
const subirImagen = async( archivoSubir ) => {

    // crear el resultado de un formulario HTML en Javascript
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivoSubir);

    try {

        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if( resp.ok ){
            const cloudResp = await resp.json();
            console.log(cloudResp);

            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }

    } catch ( err ){
        throw err;
    }

}

export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}