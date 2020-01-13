// node modules
//const sumarLibreria = require('diego-armandofund/lib/suma');
//Importar todo el contenido con el nombre 'suamrLibreria' del paquete 'diego-armandofund/lib/suma'
var sumarLibreria = require('diego-armandofund/lib/suma');
var PI = require('diego-armandofund/lib/pi');
var divisionLibreria = require('diego-armandofund/lib/division');
var multiplicacionLibreria = require('diego-armandofund/lib/multiplicacion');
var potenciaLibreria = require('diego-armandofund/lib/potencia');
var restaLibreria = require('diego-armandofund/lib/resta');
var respuesta = sumarLibreria(1, 3);
var respuesta1 = divisionLibreria(1, 0);
var respuesta2 = multiplicacionLibreria(33, 3);
var respuesta3 = potenciaLibreria(2, 4);
var respuesta4 = restaLibreria(3, 3);
console.log('La respuesta es:', respuesta);
console.log('La respuesta es:', respuesta1);
console.log('La respuesta es:', respuesta2);
console.log('La respuesta es:', respuesta3);
console.log('La respuesta es:', respuesta4);
console.log('la constante pi es:', PI);
