function imprimirMensajeNVaces(mensaje, numeroVeces) {
    if (numeroVeces == 0) {
        console.log('Se termino');
    }
    else {
        console.log(mensaje);
        var nuevoNumeroDeVeces = numeroVeces - 1;
        imprimirMensajeNVaces(mensaje, nuevoNumeroDeVeces);
    }
}
function main() {
    imprimirMensajeNVaces('hOlA', 3);
}

main();