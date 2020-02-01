import * as fs from 'fs';

export function leer(path :string):string {

    const texto = fs.readFileSync(
        path, 
        'utf-8' 
    );
    return texto;

}