"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function filter(arreglo, funcion) {
    var arregloFiltrado = [];
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(arreglo[i], i, arreglo);
        if (respuestaFuncion == true) {
            arregloFiltrado.push(arreglo[i]);
        }
    }
    return arregloFiltrado;
}
exports.filter = filter;
function every(arreglo, funcion) {
    var funEvery = true;
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(arreglo[i], i, arreglo);
        if (respuestaFuncion == false) {
            return false;
        }
    }
    return funEvery;
}
exports.every = every;
function some(arreglo, funcion) {
    var funSome = false;
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(arreglo[i], i, arreglo);
        if (respuestaFuncion == true) {
            return true;
        }
    }
    return funSome;
}
exports.some = some;
function forEach(arreglo, funcion) {
    for (var i = 0; i < arreglo.length; i++) {
        funcion(arreglo[i], i, arreglo);
    }
}
exports.forEach = forEach;
function map(arregloOriginal, funcion) {
    var funMap = [];
    var arreglo = __spreadArrays(arregloOriginal);
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(arreglo[i], i, __spreadArrays(arreglo));
        funMap.push(respuestaFuncion);
    }
    return funMap;
}
exports.map = map;
function reduce(arreglo, funcion, contador) {
    for (var i = 0; i < arreglo.length; i++) {
        contador = funcion(contador, arreglo[i], i, arreglo);
    }
    return contador;
}
exports.reduce = reduce;
