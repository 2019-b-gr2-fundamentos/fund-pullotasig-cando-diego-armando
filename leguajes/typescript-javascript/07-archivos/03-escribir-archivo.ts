import * as fs from 'fs';

export function escribirArchivo(contenido :string, path :string){
    fs.writeFileSycn(
        path,
        contenido,
        'utf-8'
    );

}