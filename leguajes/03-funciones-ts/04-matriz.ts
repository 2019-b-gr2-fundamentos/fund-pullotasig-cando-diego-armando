
function compararMatriz(matrizUno: number[][],matrizDos: number[][]): boolean {
    const matrizUnoPrimeraDimension = obtenerPrimeraDimension(
        matrizUno
        );
    const matrizUnoSegundaDimension = obtenerSegundaDimension(
        matrizUno
        );
    const matrizDosPrimeraDimension = obtenerPrimeraDimension(
        matrizDos
        );
    const matrizDosSegundaDimension = obtenerSegundaDimension(
        matrizDos
        );
    console.log(matrizUnoPrimeraDimension);
    console.log(matrizUnoSegundaDimension);
    console.log(matrizDosPrimeraDimension);
    console.log(matrizDosSegundaDimension);
return true;
}

function obtenerPrimeraDimension(matrizUno: number[][]): number | boolean{
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    if(esValido){
        const primeraDimensionArreglo = matrizUno.length;
        return primeraDimensionArreglo;
    }else{
        return false;
    }
}

function obtenerSegundaDimension(matrizUno: number[][]): number | boolean{
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    let longitudBasica = matrizUno[0].length; 
    if(esValido){
        for(let i = 1; i < matrizUno.length; i++){
            const elementoActual = matrizUno[i]; 
            const longitudBasicaNueva = elementoActual.length; 
            if(longitudBasicaNueva == longitudBasica){
                longitudBasicaNueva == longitudBasica;
            }else{
                return false;
            }
        }
        return  longitudBasica;
    }else{
        return false;
    }
}

function verificarTodosLosElementosDeUnArregloSonArreglo(arreglo: any[]):boolean{
    for(let i = 0; i < arreglo.length; i++){
        const elementoActual = arreglo[i];
        const esUnArreglo = typeof elementoActual == 'object' &&
        elementoActual.indexOf; 
        if(!esUnArreglo){
            return false;
        }
    }
    return true;
}


function main(){
    const matrizUno = [
        [1,2,3],
        [3,3]
    ];
    const matrizDos = [
        [1,2,2,2],
        [3,4,2]
    ];
    compararMatriz(matrizUno, matrizDos);
}
main();