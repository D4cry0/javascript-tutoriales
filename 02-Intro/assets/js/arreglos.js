
// const arr = new Array(10);
// console.log(arr);

let videos = [ 'Mario', 'Megaman', 'Los Cocos'];
console.log({ videos });

let otroA = [
    true,
    123,
    'Arn',
    1 + 2,
    function(){},
    ()=>{},
    { a: 1}
];

// te deja meter funciones, operaciones y objetos

console.log({ otroA });

// si te permite hace arreglos de n cantidad de arreglos

otroA.forEach( (ele, indx, arr) => {
    console.log(ele, indx, arr);
});

//push inserta al final del arreglo

//unshift inserta al inicio del arreglo

//elimina el ultimo elemento del arreglo

//splice

let otroB = otroA.splice( pos = 3, 2);
console.log({ otroB });

console.log( "Index:",otroA.indexOf('Arn') );