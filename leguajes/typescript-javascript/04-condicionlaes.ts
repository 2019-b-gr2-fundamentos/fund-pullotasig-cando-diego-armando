// 04-condicionlaes-ts
const casado= true;
if(casado == true){
    console.log("Si estoy casado");
} else {
    console.log("No estoy casado");
}


if(casado == false){   // (Espresion  => boolean)
    console.log("No estoy casado");
} else {
    console.log("Si estoy casado");
}


if(casado != true){   // (Espresion  => boolean)
    console.log("No estoy casado");
} else {
    console.log("Si estoy casado");
}


if(casado != false){
    console.log("Si estoy casado");
} else {
    console.log("No estoy casado");
}


const tengoMosa = false;
if(casado == && tengoMosa == true){
    console.log("Casado y mosero"),
} else{
    console.log("O casado o mosero o Nada")
}


const tengoMosa = false;
const estaCasado = casado ==true; // Expresion
const soymosero = tengoMosa == true; //
const casadoYMosero = casado == true && tengoMosa == true;
if(casadoYMosero){
    console.log("Casado y mosero"),
} else{
    console.log("O casado o mosero o Nada")
}

// tryty

const nombreVacio ="";     //falsy

if(""){                    //falsy
    console.log("truty");
}else{
    console.log("falsy");
}


if("dasd"){              //truty
    console.log("truty");
}else{
    console.log("falsy");
}


if(1.2334){              //truty
    console.log("truty");
}else{
    console.log("falsy");
}

if(0){                      //falsy
    console.log("truty");
}else{
    console.log("falsy");
}

if(null){                    //falsy
    console.log("truty");
}else{
    console.log("falsy");
}

if(undefined){             //falsy         
    console.log("truty");
}else{
    console.log("falsy");
}


const calculo = "sumar"; // calculos a hacer
switch(calculo){       // comparacion de casos
    case "sumar":
        //
        break;         // detener switch
    case "restar":
        //
        break;
     case "multiplicar":
        //
        break;
    case "dividir":
        //
        break;
    default:
}

/* 6 guagua
guabra 18
longo 25
cucho 45
ruco 65*/
const edadString = prompt("Ingresar edad");
const edad = Number(edadString);
if(edad>=0 && edad<6){
    console.log(" Es guagua")
}else{
    if(edad>=6 && edad<18){
        console.log(" Es guambra")
    }else{
        if(edad>=18 && edad<45){
            console.log(" Es longo")
        }else{
            if(edad>=45 && edad<65){
                console.log(" Es cucho")
            }else{
                if(edad>=64){
                    console.log(" Es ruco")
                }else{
                    console.log("ingrese una edad")  // siempre algo 
                }     
            }
        }       
    }
} 

                                        

/* 
   AND  -->  &&                           OR --> ||
TRUE  Y TRUE  = TRUE                 TRUE  Y TRUE  = TRUE    
TRUE  Y FALSE = FALSE                TRUE  Y FALSE = TRUE
FALSE Y TRUE  = FALSE                FALSE Y TRUE  = TRUE  
FALSE Y FALSE = TRUE                 FALSE Y FALSE = FALSE
*/


// apago la primera alarma me hago bolita y lloro hasta la segunda alarma y me levanto

/*
celular descargado == TRUE
celular dañado == TRUE
amaneci muerto == TRUE 
alarma descativada == TRUE
esta ENMODOSILENCIOSO == TRUE
const seATrasoAClase = celular descargado == TRUE || celular dañado == TRUE ||amaneci muerto == TRUE || alarma descativada == TRUE || estaEnModoSilencio == TRUE


si, llego tarde entonces el celular estaba descargado o el celular dañado o amaneci muerto o la alarma estaba descativada o estaEnModoSilencio, en caso contrario me hago bolita y lloro hasta que suene la segunda alarma y me levanto 
