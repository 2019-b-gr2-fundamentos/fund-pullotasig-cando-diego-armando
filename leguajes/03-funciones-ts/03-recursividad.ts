function imprimirMensajeNVaces(mensaje: string, numeroVeces: number): void{
    if(numeroVeces == 0){
        console.log('Se termino');
    }else{
        console.log(mensaje);
        const nuevoNumeroDeVeces = numeroVeces -1;
        imprimirMensajeNVaces(mensaje,nuevoNumeroDeVeces);
    }
}

function main(){
    imprimirMensajeNVaces('hOlA',3);
}

main();
/*
tipado:

const arregloNumeros: number[] = [1, 2, 3];
const arregloString: string[] = ['a', 'b', 'c'];
const arregloBoolean: boolean[] = [true, false, true];

const arregloNumeros: number[] = [1, 2, 3];
const arregloString: string[] = ['a', 'b', 'c'];
const arregloBoolean: boolean[] = [true, false, true];

mostrar cada elemento en un arreglo
necesito un arreglo
determino el numero de elementos del arreglo por el indice
imprimo cada elemento 




*/