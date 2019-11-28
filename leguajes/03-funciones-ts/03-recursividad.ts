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

const arregloDosDimensiones = [
    [1,2,3,4],
    [5,6,6,7]
];
arregloDosDimensiones[0] // [1,2,3,4]
arregloDosDimensiones[0].length // 4
arregloDosDimensiones[1]// [5,6,6,7]
arregloDosDimensiones.length//2
/*
[0, 0, 1*7 + 2*6 +3*6 + 4*4]
1. Definir el tamaño
2. Repetir calculo N veces (N = tamaño)
3.1. Primer elemento del primer arreglo
3.2. Ultimo elemnto de l segundo arreglo 





