/*
crear un programa que permita comparar si dos matrices son iguales
*/

function comparacionDeDimenciones(matrizA:number[][],matrizB:number[][]): void{
    var filasA: number = matrizA.length[0]
    var filasB: number = matrizB.length[0]
    var columnasA: number = matrizA.length[0][0]
    var columnasB: number = matrizB.length[0][0]

    if(filasA == filasB){
        if(columnasA == columnasB){

            

        }else{
            console.log('las matrices no son comparables');
        }
    }else{
        console.log('las matrices no son comparables');
    }

}

function main(){
    const matrizA = [[1,2,3,4],[4,5,6,7]]
    const matrizB = [[1,2,3,4],[4,5,6,8]]

    comparacionDeDimenciones(matrizA, matrizB);
}