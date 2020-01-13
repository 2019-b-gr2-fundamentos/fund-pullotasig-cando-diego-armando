const numeroUnoString = prompt("Ingresa numero uno");
const numeroDosString = prompt("Ingresa numero dos");
const numeroUno = Number(numeroUnostring);
const numeroDos = Number(numeroDosstring);
console.log(numeroUno+numeroDos);

consola . log ( " Escoja la operacios a realizar " );
consola . log ( " 1 = suma " );
consola . log ( " 2 = resta " );
consola . log ( " 3 = multiplicacion " );
consola . log ( " 4 = división " );
consola . log ( " 5 = discriminar de un trinomio " );

const operacionA =  prompt ( " Digite el número de la operación a realizar " );
const operacionB =  Number ( operacionA );
if ( operacionB  > = 1  &&  operacionB  <= 4 ) {
    const numA =  prompt ( " Ingrese el primer valor " );
    const numa =  Número ( numA );
    const numB =  prompt ( " Ingrese el segundo valor " );
    const numb =  Number ( numB );
    conmutador ( operacionA ) {
        caso  " 1 " :
            consola . log ( numa  +  entumecido );
            romper ;
        caso  " 2 " :
            consola . log ( numa  -  entumecido );
            romper ;
        caso  " 3 " :
            consola.log( numa  *  numb );
            romper ;
        caso  " 4 " :
            consola . log ( numa  /  numb );
            romper ;
    }
} más {
    if ( operacionB  > =  5  &&  operacionB  <= 5.01 ) {
    const numC =  prompt ( " Ingrese el valor de A del trinomio de la forma Ax ^ 2 + Bx + C " );
    const numc =  Número ( numC );
    const numD =  prompt ( " Ingrese el valor de B de trinomiode la forma Ax ^ 2 + Bx + C " );
    const numd =  Number ( numD );
    const numE =  prompt ( " Ingrese el valor de C del trinomio de la forma Ax ^ 2 + Bx + C " );
    const nume =  Number ( numE );
    const discriminante =  numd  *  numd  -  4  *  numc  *  nume ;
    consola . log ( " Su discrminante es: " , discriminante );
    if ( discriminante  > 0 ) {
        consol.log( " Si es factorizable, sus raices son Reales " );
    } más {
        if ( discriminante  < 0 ) {
            consola . log ( " No es factorizable, sus raices son Imaginarias " );
        } más {
                consola . log ( " valores incorrectos " );
            }   
        }
    }
}

