"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function escribirArchivo(contenido, path) {
    fs.writeFileSycn(path, contenido, 'utf-8');
}
exports.escribirArchivo = escribirArchivo;
