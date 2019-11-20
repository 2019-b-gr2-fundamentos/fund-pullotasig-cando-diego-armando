/*
busco un arreglo de tamaño n
las posiciones generadas las igualo a 0 ( de manera mutable) 
pido n = numero de jugadores, al usuario
genero de manera aleatoria una posicion de n posiciones
la posicion generada la igualo a 1

*/
let arregloFloron =[0,0,1,0,0]
let existeFloron = false;   // bandera global en el bloque 
for(let i=0; i<5; i++){ 
    if(arregloFloron[i] == 1){
        existeFloron = true;
    }
}
if(existeFloron){
    console.log('adivina');
}

