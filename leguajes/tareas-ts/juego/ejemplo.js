"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operadores_1 = require("./operadores");
var operadores_2 = require("./operadores");
var operadores_3 = require("./operadores");
var operadores_4 = require("./operadores");
var operadores_5 = require("./operadores");
var arregloEstudiante = [
    { id: 1, nombre: 'Juan', nota: 5, curso: 'A' },
    { id: 1, nombre: 'Diego', nota: 3, curso: 'A' },
    { id: 1, nombre: 'karen', nota: 8, curso: 'B' },
    { id: 1, nombre: 'Alex', nota: 7, curso: 'B' },
    { id: 1, nombre: 'Fabian', nota: 9, curso: 'A' },
    { id: 1, nombre: 'Mia', nota: 6, curso: 'B' }
];
console.log('arreglo:', arregloEstudiante);
function main() {
    var respuestaFilter = operadores_5.filter(arregloEstudiante, function (valorActual) {
        var valor = valorActual.nota < 7;
        return valor;
    });
    console.log('notas mayores a 7', respuestaFilter);
    var respuestaForEach = operadores_3.forEach(arregloEstudiante, function (valorACtual) {
        var nota20 = valorACtual.nota * 2;
        console.log('nota de', valorACtual.nombre, 'sobre 20:', nota20);
    });
    var respuestaSome = operadores_1.some(arregloEstudiante, function (valorACtual, i, arreglo) {
        var condicion = valorACtual.nota < 3;
        return condicion;
    });
    console.log('alguno tiene una nota menor de 3?? -->', respuestaSome);
    var respuestaEvery = operadores_2.every(arregloEstudiante, function (valorACtual) {
        var condicion = valorACtual.nota >= 4;
        return condicion;
    });
    console.log('todos tienen notas mayores a 4?? -->', respuestaEvery);
    var respuestaReduce = operadores_4.reduce(arregloEstudiante, function (acumulador, valorActual) {
        var calculo = acumulador + valorActual.nota;
        return calculo;
    }, 0);
    console.log('promedio del curso:', respuestaReduce / arregloEstudiante.length);
    /*
    const respuestaMap = map(arregloEstudiante,
        function(valorACtual,i,arreglo){
            const nuevoObjeto = {
                id: valorACtual.id,
            };
            return nuevoObjeto;
        }
    );
    console.log('respuestaMap:', respuestaMap);*/
}
main();
