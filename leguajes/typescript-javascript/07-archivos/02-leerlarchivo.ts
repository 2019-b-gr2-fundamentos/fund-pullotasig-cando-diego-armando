import * as fs from 'fs';

export function leerArchivo(path :string):string {
    console.log('leer');
    const resul = fs.readFileSync(
        path,  // path
        'utf-8'  // codificacion
    );
    return resul;

}