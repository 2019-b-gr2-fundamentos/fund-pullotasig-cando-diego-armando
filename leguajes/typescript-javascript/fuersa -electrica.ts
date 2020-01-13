// calculadora + fuerza electrica
/*
 f= [(k*q1*q2)/(r^2)]
*/

console.log("Que desea realizar");
console.log("1 = suma");
console.log("2 = resta");
console.log("3 = multiplicacion");
console.log("4 = division");
console.log("5 = calcular fuerza electrica");

const operacionString = prompt("Digite un numero");
const op = Number (operacionString);
if( op >=1 && op <=4){
    const numUno = prompt("Ingrese el primer valor");
    const a = Number(numUno);
    const numDos = prompt("Ingrese el segundo valor");
    const b = Number(numDos);
    switch(operacionString){
        case "1":
            console.log(a + b);
            break;
        case "2":
            console.log(a - b);
            break;
        case "3":
            console.log(a * b);
            break;
        case "4":
            if( b != 0){
                console.log(a / b);
            }else{
                console.log("indefinido");
            }
            break;
    }
}else{
    if( op == 5){
        const q1String = prompt("Ingrese carga uno");
        const q2String = prompt("Ingrese carga dos");
        const rString = prompt("Ingrese la distancia en metros");
        const q1 = Number(q1String);
        const q2 = Number(q2String);
        const r = rString*rString
        const k = 9*(10^9)
        
        console.log((q1*q2*k)/(r));
    }else{
        console.log("fuera del rango")
    }
return 0;
}



