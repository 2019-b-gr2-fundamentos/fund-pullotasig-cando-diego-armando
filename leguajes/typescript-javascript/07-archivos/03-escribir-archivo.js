"use strict";
exports.__esModule = true;
var fs = require("fs");
function escribirArchivo(contenido, path) {
    fs.writeFileSync(path, contenido, 'utf-8');
}
exports.escribirArchivo = escribirArchivo;
