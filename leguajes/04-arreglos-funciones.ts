let arregloNumeros = [1,2,3,4,5,6,7,8,9,10];
// Acceder
// Necesito: Indice // imprime lo que esta en la posicion n-1 que se pide 
console.log(arregloNumeros[6]); // 7
// Añadir
// Necesito: Elemto a añadirse
arregloNumeros.push(33);
console.log(arregloNumeros);
// Borrar al final

// Añadir al indice
// Necesito: Indice
//            Elemento
arregloNumeros.splice(0, 0, 1.1);
// Añador o Borrar

//    ...


arregloNumeros.indexOf(5); // 5
console.log(arregloNumeros);
arregloNumeros.indexOf(7); // 
console.log(arregloNumeros);

arregloNumeros[0] = 999;