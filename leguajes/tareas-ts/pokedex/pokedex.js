"use strict";
/*

ejemplo de pokedex
apodo:
nombre:
tipo:
nivel:
edad:
*/
Object.defineProperty(exports, "__esModule", { value: true });
// ------------------------------------ librerias -------------------------------------
var f_leer_1 = require("./funcion-interfas/f-leer");
// ------------------------------------ programa --------------------------------------
function main() {
    //muestra logo pokemon
    var logoPokemon = f_leer_1.leer('./logo.txt');
    console.log(logoPokemon);
    //muestra formatoy ejemplo de datos de pokemon
    //console.log(formatoDeDatos, '\n');
    console.log('BIENVENIDO A LA POKEDEX');
    console.log('QUE DESEA HACER');
    console.log('1.       AÑADIR NUEVO POKEMON A LA POKEDEX');
    console.log('2.       BUSCAR POKEMON EN LA POKEDEX');
    console.log('3.       ELIMINAR POKEMON DE LA POKEDEX');
    console.log('4.       EDITAR POKEMON DE LA POKEDEX');
    console.log('5.       SALIR DE LA POKEDEX');
    // const respuestaAccion = prompt('Ingresa el numero de la accion que deseas realizar');
    //const accion = Number (respuestaAccion);
    /*
        const pedirAccion = [
            {
                type: 'text',
                name: 'accion',
                message: 'Ingresa el numero de la accion que deseas realizar'
            }
        ];
    */
    var respuestaAccion = prompt('Ingresa el numero de la accion que deseas realizar', '');
    //const def = Number (respuestaAccion);
    var accion = respuestaAccion;
    // do{
    // falta un await para ser llamada
    /*
    switch(accion){
    case 1:
        agregar().then().catch();
        break;
    case 2:
        buscar().then().catch();
        break;
    case 3:
        
        break;
    case 4:
        editar().then().catch();
        break;
    default:
        // reenviar al programa
    }
    
*/
    //};
    //while(accion != 5){
    console.log('bye bye');
}
main();
// ------------------------------------- funcion --------------------------------------
