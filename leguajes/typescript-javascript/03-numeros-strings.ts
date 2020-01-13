
const numeroUno = 1;  // Camelcase
const numeroDos = 2;
let resultado = 0;
//SUMA
resultado = 1 + 2;
//RESTAR
resultado = 1 - 2;
//MULTIPLICAR
resultado = 1 * 2;
//DIVIDIR
resultado = 1 / 2;
//EXPONENCIAL
resultado = 1 ^ 2;
//MOD
resultado = 4 % 2; //0  -> residuo
resultado = 4 % 3; //1  -> residuo
resultado = 7 % 3; //1  -> residuo 

//console.log ("pera" + 2);

// Strings
const mensaje = "\"Hola mundo\"";
// \ escape de un caracter
//const mensaje = "Hola mundo";
const saludo = '\'Adios mundo\'';
// const saludo = "Adios mundo";
console.log(mensaje + "1\t\t\t 3\n" + saludo);
// "\n" salto de linea
const edad = 30;
const saludoEdad = `Mi edad es: ${edad}`;
console.log(saludoEdad);
const saludoCompleto = `El saludo completo es: ${saludo + mensaje + saludoEdad}`;
//Con salto de linea
//const saludoCompleto = `El saludo completo es: ${saludo + "\n" + mensaje + "\n" + saludoEdad}`;
console.log(saludoCompleto);

// Contamos los elementos 
const nombreLongitud = "Diego Pullotasig";
console.log(nombreLongitud.length);
// Eliminar espacios al principio y al final
console.log(nombreLongitud.trim());
// Cambiar a mayusculas
/*console.log(nombreLongitud.toUpperCase());
console.log(nombreLongitud.toLowerCase());
console.log(nombreLongitud.replace("e","o"));
console.log(nombreLongitud.replace("a","o"));
// Reemplazar saltos de linea 
console.log(nombreLongitud.replace("\n",""));*/
console.log(nombreLongitud);
console.log(nombreLongitud.replace("l","x"));
console.log(nombreLongitud);
console.log(nombreLongitud.replace("a","o"));
console.log(nombreLongitud);                                                                                                              
// Busca la primera ocurrencia
console.log(nombreLongitud.search("z")); //-1   
console.log(nombreLongitud.search("d")); //-1
console.log(nombreLongitud.search("l")); // Posicion donde esta
console.log(nombreLongitud.search("Diego")); // Posicion deede donde empieza
//
console.log(nombreLongitud.slice(0,4)); // Muestra las posiones de inicio y fin que se piden
//
console.log(nombreLongitud.indexOf("a"));  // Posicion de " "
console.log(nombreLongitud.indexOf("z"));  // -1
//
console.log(nombreLongitud.includes(" ")); // Boolean --- true o false 
console.log(nombreLongitud.includes("x")); // Boolean --- true o false 
//
console.log(nombreLongitud.endsWith("w")); // Boolean

console.log(nombreLongitud.startsWith("die")); // Boolean

console.log(nombreLongitud.substring(0,6)); // Muestra las posiciones

//const COLOR_ROJO = 1;  
// camelCase
//NUMEROUNO     --> todo mayuscula (separación no)
//NUMERO_UNO    --> mayusculas guion bajo
//Numerouno     -->
//numero_uno    --> notación de python
//numerOunO     -->