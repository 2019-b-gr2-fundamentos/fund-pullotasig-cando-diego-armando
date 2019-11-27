function imprimirMensajeNVaces(mensaje: number, numeroVeces: number): void{
    if(numeroVeces == 0){
        console.log('Se termino');
    }else{
        console.log(mensaje);
        const nuevoNumeroDeVeces = numeroVeces -1;
        imprimirMensajeNVaces(mensaje,nuevoNumeroDeVeces);
    }
}
const arregloNumeros: number[] = [1,2,3]

function main(){
    imprimirMensajeNVaces(arregloNumeros,3);
}
//necesito cambiar mensaje por cada uno de los ellementos por lo tanto tengo que poder acseder a cada uno de ellonumero de veces lo doy yo porque me dan el arreglo
main();