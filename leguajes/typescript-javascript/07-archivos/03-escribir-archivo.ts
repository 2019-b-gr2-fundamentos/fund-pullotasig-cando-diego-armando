import * as fs from 'fs';

export function escribirArchivo(contenido :string, path :string){
    fs.writeFileSync(
        path,
        contenido,
        'utf-8'
    );

}