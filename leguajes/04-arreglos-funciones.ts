const arregloNumeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Acceder
//Necesito: Indice
console.log(arregloNumeros[6]); //7
//Añadir al final
//Necesito: Elemento a añadirse 
arregloNumeros.push(11);
//Borrar al final 
arregloNumeros.pop();
//Añadir en un indice
//Necesito: indice, elemento
arregloNumeros.splice(1, 0, 1.1);
console.log(arregloNumeros);
//o borrar
arregloNumeros.splice(7, 1);
console.log(arregloNumeros);

//    ...


arregloNumeros.indexOf(5); // 5
console.log(arregloNumeros);
arregloNumeros.indexOf(7); // 
console.log(arregloNumeros);

arregloNumeros[0] = 999;