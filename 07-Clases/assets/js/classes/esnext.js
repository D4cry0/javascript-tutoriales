//el problema con las propiedades privadas
//Edit ya esta aceptado un 96%


class Rectangulo {
    //el numeral lo vuelve privado
    #area = 0;

    constructor( base = 0, altura = 0 ) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }
}

const rec = new Rectangulo(10,15);
//no puedes acceder, marca error
//rec.#area;

console.log(rec);