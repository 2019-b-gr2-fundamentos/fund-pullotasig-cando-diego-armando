"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function leerArchivo(path) {
    console.log('leer');
    var resul = fs.readFileSync(path, // path
    'utf-8' // codificacion
    );
    return resul;
}
exports.leerArchivo = leerArchivo;
