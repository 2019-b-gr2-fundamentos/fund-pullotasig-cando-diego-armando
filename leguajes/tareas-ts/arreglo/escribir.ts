import * as fs from 'fs';

export function escribir(contenido :string, path :string){
    fs.writeFileSync(
        path,
        contenido,
        'utf-8'
    );

}