"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _02_leerlarchivo_1 = require("./02-leerlarchivo");
var _03_escribir_archivo_1 = require("./03-escribir-archivo");
function main() {
    var texto = _02_leerlarchivo_1.leerArchivo('./ejemplo.txt');
    var nuevoContenido = 'Tengo hambre :´o \n';
    _03_escribir_archivo_1.escribirArchivo('./ejemplo.txt', '');
    console.log(texto + nuevoContenido);
}
main();
