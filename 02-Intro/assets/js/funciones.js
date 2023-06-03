// las definiciones y usos pueden estar en orden inverso
// pero es buena practica dejar las definiciones al inicio
// y al final las llamas o implementacion

// forma antigua y no recomendable por el var
function saludar() {
    console.log('Holaaaa');
}

// al usar function con var se puede eliminar su referencia
// var saludar = 45; // aqui ya se convirtio en numero

// forma antigua pero ya no afectar los var
const saludar2 = function() {
    console.log('Holaaaaa');
}

const saludar3 = function( nombre ){
    console.log('Hola ' + nombre);
}

// las funciones tradicionales "function" tienen un objeto implicito que se llama
// arguments este permite que tengas acceso a otros parametos que no esten definidos
// en la funcion
const saludar4 = function ( nombre ){
    console.log( arguments );
    console.log('Hola ' + nombre);
}


// funcion de flecha es lambda function
// no tienen el objeto arguments
const saludar5 = ( nombre ) => {
    console.log('Holaa ' + nombre);
}


saludar();
saludar2();
saludar3( 'Arny' );
saludar4( 'Arny', 32, 'Gordo'); 
// 32 y gordo no estan definidos en la funcion, se toman con arguments

// si no tiene return es undefined
// las funciones flecha son definiciones anonimas de funciones
