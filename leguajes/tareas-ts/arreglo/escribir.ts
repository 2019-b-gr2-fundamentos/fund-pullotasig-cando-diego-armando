import * as fs from 'fs';

export function escribir(path :string, contenido :string){
    fs.writeFileSync(
        path,
        contenido,
        'utf-8'
    );

}