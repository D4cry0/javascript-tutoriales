let dia = 3;

semana = {
    0 : 'domingo',
    1 : 'lunes',
    2 : 'martes',
    3 : 'miercoles',
    4 : 'jueves',
    5 : 'viernes',
    6 : 'sabado'
}

semanaarr = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];

console.log( semana[dia] || 'Dia no definido' );
console.log( semanaarr[dia] || 'Dia no definido' );

semanaf = {
    0 : () => 'domingo',
    1 : () => 'lunes',
    2 : () => 'martes',
    3 : () => 'miercoles',
    4 : () => 'jueves',
    5 : () => 'viernes',
    6 : () => 'sabado'
}

//con los parentesis ejecutamos funciones
console.log( semanaf[dia]() || 'Dia no definido' );