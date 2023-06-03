// __proto__ es el prototipo


//El prototype son funciones con this y con la palabra new se generaban los objetos
// era una pseudo clasepara POO

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad   = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

//new sin el new solo es una funcion normal
const maria = new Persona('Maria', 18);
maria.imprimir();

//todo lo anterior era la forma vieja para crear obejtos en JS porque no lo tenia implementado


