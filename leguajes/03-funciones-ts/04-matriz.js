function compararMatriz(matrizUno, matrizDos) {
    var matrizUnoPrimeraDimension = obtenerPrimeraDimension(matrizUno);
    var matrizUnoSegundaDimension = obtenerSegundaDimension(matrizUno);
    var matrizDosPrimeraDimension = obtenerPrimeraDimension(matrizDos);
    var matrizDosSegundaDimension = obtenerSegundaDimension(matrizDos);
    /*
    console.log(matrizUnoPrimeraDimension);
    console.log(matrizUnoSegundaDimension);
    console.log(matrizDosPrimeraDimension);
    console.log(matrizDosSegundaDimension);
    */
    var noFalsos = matrizUnoPrimeraDimension && matrizUnoSegundaDimension && matrizDosPrimeraDimension && matrizDosSegundaDimension;
    if (noFalsos) {
        var igualesDimension = matrizUnoPrimeraDimension == matrizDosPrimeraDimension && matrizUnoSegundaDimension == matrizDosSegundaDimension;
        if (igualesDimension) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
function obtenerPrimeraDimension(matrizUno) {
    var esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    if (esValido) {
        var primeraDimensionArreglo = matrizUno.length;
        return primeraDimensionArreglo;
    }
    else {
        return false;
    }
}
function obtenerSegundaDimension(matrizUno) {
    var esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    var longitudBasica = matrizUno[0].length;
    if (esValido) {
        for (var i = 1; i < matrizUno.length; i++) {
            var elementoActual = matrizUno[i];
            var longitudBasicaNueva = elementoActual.length;
            if (longitudBasicaNueva == longitudBasica) {
                longitudBasicaNueva == longitudBasica;
            }
            else {
                return false;
            }
        }
        return longitudBasica;
    }
    else {
        return false;
    }
}
function verificarTodosLosElementosDeUnArregloSonArreglo(arreglo) {
    for (var i = 0; i < arreglo.length; i++) {
        var elementoActual = arreglo[i];
        var esUnArreglo = typeof elementoActual == 'object' &&
            elementoActual.indexOf;
        if (!esUnArreglo) {
            return false;
        }
    }
    return true;
}
function main() {
    var matrizUno = [
        [1, 2, 3],
        [3, 3]
    ];
    var matrizDos = [
        [1, 2, 2, 2],
        [3, 4, 2]
    ];
    compararMatriz(matrizUno, matrizDos);
    var comparacion = compararMatriz;
    console.log(comparacion);
}
main();
