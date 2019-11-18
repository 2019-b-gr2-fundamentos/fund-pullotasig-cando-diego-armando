// For
// 1) Declarar una variable
// 2) Condicion ( Expresion )
// 3) Incrementar, Disminuir 
for (var numeroExDeMiCrush = 7; numeroExDeMiCrush != 0; numeroExDeMiCrush--) {
    console.log('ES CAN DA LO!', numeroExDeMiCrush);
}
for (var numeroExDeMiCrush = 7; numeroExDeMiCrush <= 0; numeroExDeMiCrush--) {
    console.log('ES CAN DA LO!', numeroExDeMiCrush);
}
for (var numeroExDeMiCrush = 7; numeroExDeMiCrush < 0; numeroExDeMiCrush--) {
    console.log('ES CAN DA LO!', numeroExDeMiCrush);
}
// Arreglo
// 1 Elemto ( Variable const numero = 1)
// Conjunto de elementos ( { 1, 2, 3, 4, ... })
// Conjunto de diferentes elementos ({ 1, 'abc', true})
var arregloNumeros = [1, 2, 3, 4, 5];
// Reasignar 
// Arreglo de numero = [1, 2, 3, 4, 5]
arregloNumeros.push(6);
console.log('arregloNumeros', arregloNumeros);
arregloNumeros.pop();
console.log('arregloNumeros', arregloNumeros);
// Arreglo
// 1) Elementos 
// 2) Indice ( o index based ) -> posicion
// 3) Longitud de los arreglos -> cantidad de elementos
console.log(arregloNumeros.length);
// FOR
// 1) let = arregloNumeros.length -> 5
// 2) tamaño >+ 
// 3) --
for (var arregloNumeros_1 = void 0, length_1; arregloNumeros_1 > 0;)
    //Acceder a cada elemento del arreglo por el indice
    var indiceElementoCinco;
// Acceder al elemento 5
// 1) INDICE
// [1, 2, 3, 4, 5]
//  0  1  2  3  4
// INDICES
console.log(arregloNumeros[indiceElementoCinco]);
// 5
