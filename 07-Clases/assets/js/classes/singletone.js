// es una instancia unica de la clase

// la doble negacion es importante aqui para identificar que es la unica instancia

class Singleton {
    static instancia;
    
    nombre = '';

    constructor( nombre = '' ) {

        //con esto elimina la posibilidad de generar mas de una instancia
        // undefined -> true -> false para eso es la doble negacion
        if( !!Singleton.instancia ){
            return Singleton.instancia;
        }
        
        Singleton.instancia = this;
        this.nombre = nombre;
    }
}

const i = new Singleton('Ironman');
const i2 = new Singleton('Spiderman');

console.log(i);
console.log(i2);