// for como siempre

// for in para arreglos

arreglos = ['Bat', 'Dog', 'Cat'];

for(let a in arreglos) {
    console.log(a);
}
// la variable solo toma las posiciones, no los elementos.

// for of
// este si toma los elementos
// sintaxis regular es singular y plural
for(let arreglo of arreglos) {
    console.log(arreglo);
}