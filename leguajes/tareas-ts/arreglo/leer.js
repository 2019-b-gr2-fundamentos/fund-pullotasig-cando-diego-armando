"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function leer(path) {
    var texto = fs.readFileSync(path, 'utf-8');
    return texto;
}
exports.leer = leer;
