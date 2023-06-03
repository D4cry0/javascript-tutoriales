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

//con extends puedes generar subclases
class Heroe extends Persona {
    clan = '';

    //super debe ir antes de todos los this
    constructor(nombre, codigo, frase, clan) {
        super(nombre, codigo, frase);

        this.clan = clan;
    }

    //si quieres sobreescribir metodos de la clase padre
    quienSoy() {
        console.log(`Tengo el clan ${this.clan}`);
        super.quienSoy();
    }
}

const arny = new Persona('Arnulfo', 'Dacryo', 'Qeu pasa');
const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Amigable');

spiderman.quienSoy();