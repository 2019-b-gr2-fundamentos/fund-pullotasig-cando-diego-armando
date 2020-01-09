// node modules
//const sumarLibreria = require('diego-armandofund/lib/suma');
//Importar todo el contenido con el nombre 'suamrLibreria' del paquete 'diego-armandofund/lib/suma'
import * as sumarLibreria from 'diego-armandofund/lib/suma';
import * as PI from 'diego-armandofund/lib/pi';

const respuesta = sumarLibreria(1,3);
console.log('La respuesta es:', respuesta);
console.log('la constante pi es:',PI)