function sumar(numUno, numDos) {
    return numUno + numDos;
}
function restar(numUno, numDos) {
    return numUno - numDos;
}
function multiplicar(numUno, numDos) {
    return numUno * numDos;
}
function dividir(numUno, numDos) {
    return numUno / numDos;
}
function main() {
    calculadora();
}
function calculadora() {
    var operacion = prompt('Selecciona una operacion: "1. Suma", "2. Resta", "3. Multiplicacion", "4. Dividir", "5. terminamos');
    var esSuma = operacion == 'suma' || operacion == 'Suma' || operacion == '1' || operacion == '1. Suma' || operacion == '1. suma';
    var esResta = operacion == 'resta' || operacion == 'Resta' || operacion == '2' || operacion == '2. Resta' || operacion == '2. resta';
    var esMultiplicacion = operacion == 'multiplicacion' || operacion == 'Multiplicacion' || operacion == '3' || operacion == '3. Multiplicacion' || operacion == '3. multiplicacion';
    var esDivision = operacion == 'division' || operacion == 'Division' || operacion == '4' || operacion == '4. Division' || operacion == '4. division';
    var seTermino = operacion == 'terminamos';
    var esValida = esSuma || esResta || esMultiplicacion || esDivision;
    if (esValida) {
        var numUno = +prompt("Numero 1");
        var numDos = +prompt("Numero 2");
        var resultado = 0;
        if (esSuma) {
            resultado = sumar(numUno, numDos);
        }
        if (esResta) {
            resultado = restar(numUno, numDos);
        }
        if (esMultiplicacion) {
            resultado = multiplicar(numUno, numDos);
        }
        if (esDivision) {
            resultado = dividir(numUno, numDos);
        }
        console.log(resultado);
    }
    else {
        if (seTermino) {
            console.log("bye bye");
        }
        else {
            calculadora();
        }
    }
}
main();
/*
1. Seleccionar operacion
2. Valor de seleccion
    2.1. Seleccion no valida
        2.1.1
    2.2. Seleccion valida
        2.2.1. Ingresar valores
        2.2.2.
if(estaValida){
    const numUno: number = +prompt("Numero 1");
    const numDos: number = +prompt("Numero 2");
    if(esSuma){

    }
}
function sumar(numUno:number, numDos:number): number{
    return numUno + numDos;
}
function restar(numUno:number, numDos:number): number{
    return numUno - numDos;
}
function multiplicar(numUno:number, numDos:number): number{
    return numUno * numDos;
}
function dividir(numUno:number, numDos:number): number{
    return numUno / numDos;
}
 
function main(){
    calculadora();
}
function calculadora(){
    const operacion:string = prompt('Selecciona una operacion: "suma-1", "resta-2", "multiplicacion-3", "divivison-4"');
    const esSuma:boolean = operacion == 'suma' ||
     operacion == '1' ||
     operacion == 'suma-1';
     const esResta:boolean = operacion == 'resta' ||
     operacion == '2' ||
     operacion == 'resta-2';
     const esMultiplicacion:boolean = operacion == 'multiplicacion' ||
     operacion == '3' ||
     operacion == 'multiplicacion-3';
     const esDivision:boolean = operacion == 'divivison' ||
     operacion == '4' ||
     operacion == 'divivison-1';
 
    const estaValida:boolean = esSuma || esResta || esMultiplicacion || esDivision;
 
    if(estaValida){
        const numUno:number = +prompt("Numero 1");
        const numDos:number = +prompt("Numero 2");
        let resultado = 0;
        if(esSuma){
            resultado = sumar(numUno, numDos);
        }
        if(esResta){
            resultado = restar(numUno, numDos);
        }
        if(esMultiplicacion){
            resultado = multiplicar(numUno, numDos);
        }
        if(esDivision){
            resultado = dividir(numUno, numDos);
        }
        console.log(resultado);
    }
 
}

*/ 
