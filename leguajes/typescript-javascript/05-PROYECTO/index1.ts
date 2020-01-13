// node modules
//const sumarLibreria = require('diego-armandofund/lib/suma');
//Importar todo el contenido con el nombre 'suamrLibreria' del paquete 'diego-armandofund/lib/suma'
import * as sumarLibreria from 'diego-armandofund/lib/suma';
import * as PI from 'diego-armandofund/lib/pi';
import * as divisionLibreria from 'diego-armandofund/lib/division';
import * as multiplicacionLibreria from 'diego-armandofund/lib/multiplicacion';
import * as potenciaLibreria from 'diego-armandofund/lib/potencia';
import * as restaLibreria from 'diego-armandofund/lib/resta';

const respuesta = sumarLibreria(1,3);
const respuesta1 = divisionLibreria(1,0);
const respuesta2 = multiplicacionLibreria(33,3);
const respuesta3 = potenciaLibreria(2,4);
const respuesta4 = restaLibreria(3,3);


console.log('La respuesta es:', respuesta);
console.log('La respuesta es:', respuesta1);
console.log('La respuesta es:', respuesta2);
console.log('La respuesta es:', respuesta3);
console.log('La respuesta es:', respuesta4);
console.log('la constante pi es:',PI)