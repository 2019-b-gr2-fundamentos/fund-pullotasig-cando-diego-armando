"use strict";
exports.__esModule = true;
var fs = require("fs");
function leerArchivo(path) {
    var resul = fs.readFileSync(path, // path
    'utf-8' // codificacion
    );
    return resul;
}
exports.leerArchivo = leerArchivo;
