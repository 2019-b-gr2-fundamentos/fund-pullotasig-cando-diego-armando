"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function escribir(path, contenido) {
    fs.writeFileSync(path, contenido, 'utf-8');
}
exports.escribir = escribir;
