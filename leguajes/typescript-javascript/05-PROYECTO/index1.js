"use strict";
exports.__esModule = true;
// node modules
//const sumarLibreria = require('diego-armandofund/lib/suma');
//Importar todo el contenido con el nombre 'suamrLibreria' del paquete 'diego-armandofund/lib/suma'
var sumarLibreria = require("diego-armandofund/lib/suma");
var PI = require("diego-armandofund/lib/pi");
var respuesta = sumarLibreria(1, 3);
console.log('La respuesta es:', respuesta);
console.log('la constante pi es:', PI);
