import { leerArchivo } from "./02-leerlarchivo";
import { escribirArchivo } from "./03-escribir-archivo";

function main(){

    const texto = leerArchivo('./ejemplo.txt');
    const nuevoContenido = 'Tengo hambre :´o \n';

    escribirArchivo('./ejemplo.txt','');
    
    console.log(texto + nuevoContenido);


}

main();