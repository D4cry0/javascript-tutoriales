class Persona {
    
    static _conteo = 0;

    static get conteo() {
        return Persona._conteo;
    }

    // solo se puede acceder a las propiedades estaticas
    // el resto solo va dar undefined
    static mensaje() {

    }

    //sin inicializar el valor por defecto es undefined
    //por defecto tiene el use strict
    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';
    
    //este metodo se ejecuta cuando se crea una instancia del objeto
    //siempre retorna la instancia del objeto
    constructor (nombre, codigo, frase) {
        //console.log('Hola');
        //this.codigo = 'ABC';

        // se deben crear errores personalizados por defecto no se ha implementado


        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase() {
        console.log(`${ this.nombre } dice ${ this.frase }`);
    }

    //set y get deben estar declarados de esa manera
    set setComida( comida ) {
        this.comida = comida
    }

    get getComida() {
        return `La comida es ${this.comida}`;
    }

}

const spiderman = new Persona();
const arny = new Persona('Arnulfo', 'Dacryo', 'Qeu pasa');
arny.quienSoy();
arny.miFrase();

// los sets y gets se usan asi...
// no requieren los parentesis
arny.setComida = 'Pizza';

console.log(arny.getComida);




// puedes aplicar un pseudo set para una instancia
arny.villano = 'JAJAJAJ';
// y te permite agregarle propiedades a cada instacia

// tampoco hay propiedades privadas
// puedes acceder a cualquier propiedad asi sin mas

console.log(arny);


//Acceder a variables estaticas
console.log(`Instancias ${Persona._conteo}`);
console.log(Persona.conteo);

//se pueden crear propiedades estaticas fuera de la definicion de la clase

Persona.nuevaPropiedad = 'Orale';
//con solo eso se agrego la nueva propiedad a Persona
// lo malo es que al crearlas asi, en la definicion original no aparecen

