// con los metodos estaticos puedes inentar sobrecarga de metodos constructor

class Persona {

    //con esto puedo o usar el constructor o usar este metodo para inicializar por objeto
    static porObjeto({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }
}