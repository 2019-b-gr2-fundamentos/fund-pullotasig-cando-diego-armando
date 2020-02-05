/*
async function main(){
    const accion = prompt('ready');
    console.log(accion);
    switch(){
        case 1:
            con
    }
}

main().then().catch(); 

*/

// import * as prompts from 'prompts';

 
//---------------------------------------------------------



//--------------------------------------------------------

function main(){
    //const arregloEstudiante:any = [ // cualquier cosa que de problemas le tipamos como any
    const arregloEstudiante = [
        {id: 1, nombre: 'Juan', nota: 5},
        {id: 1, nombre: 'Diego', nota: 3},
        {id: 1, nombre: 'karen', nota: 8},
        {id: 1, nombre: 'Alex', nota: 7},
        {id: 1, nombre: 'Fabian', nota:9},
        {id: 1, nombre: 'Mia', nota:6}
    ];

    // .ForEach  ----> nos ayuda a iterar (no recibe nada -> no devuelve nada)

    const respuestaForEach = arregloEstudiante.forEach(
        function(valorACtual,indice,arreglo){
            console.log('dentro del .ForEach', valorACtual.nota);
            valorACtual.nota20 = valorACtual.nota *2 //la forma de buscar algo en el arreglo y manipularlo
        }
    );
    console.log('respuestaForEach:', respuestaForEach); // undefined
    console.log('arreglo:', arregloEstudiante);

    //.map ---> transformamos el arreglo (mutamos el arreglo)
    
    const respuestaMap = arregloEstudiante.map(
        function(valorACtual,i,arreglo){
            const nuevoObjeto = {
                id: valorACtual.id,
/*                nombre: valorACtual.nombre,
    
                nota20: valorACtual.nota*2*/

            };
            return nuevoObjeto;
        }
    );
    console.log('respuestaMap:', respuestaMap);
    console.log('arreglo:', arregloEstudiante); 

    // .filter ---> filtrar el arreglo (condicion ---> devuelve un arreglo con valores filtrados)
    const respuestaFilter = arregloEstudiante
    .filter(
        function(valorActual,i,arreglo){
            const condicion7 =valorActual.nota > 7;
            const condicion5 = valorActual.nota < 5;
            // condicion es un truty o true
            return condicion7 || condicion5;

        }

    );
    
    console.log('respuestaFilter:', respuestaFilter);
    console.log('arreglo:', arregloEstudiante);

    // .some --> OR------> some (uno cumpla)
    // devuelve verdadero o falso dependiendo la condicion
    // si alguno cumple  ----> true
    // si ninguno cumple ----> false

    const respuestaSome = arregloEstudiante.some(
        // valorACtual,i,arreglo ---- los que no se usan pueden no escribirse
        function(valorACtual,i,arreglo){
            const condicion = valorACtual.nota < 1;
            // condicion es un truty o true
            return condicion;
        }
    );

    console.log('respuestaSome:', respuestaSome);
    console.log('arreglo:', arregloEstudiante);

    // .every --> AND----> every (todos cumplan)
    // devuelve verdadero o falso dependiendo la condicion
    // si todos cumplen  ----> true
    // si alguno no cumplen ----> false
    
    const respuestaEvery = arregloEstudiante.every(
        function(valorACtual){
            const condicion = valorACtual.nota >= 4;
            return condicion;
        }
    );

    console.log('respuestaEvery:', respuestaEvery);
    console.log('arreglo:', arregloEstudiante);

    //.reduce ----> Reduce ----> Duevuelve un valor con el recalculado ( enviamos---> calculo , recibimos--> valor)

    const respuestaReduce = arregloEstudiante.reduce(
        function(acumulador, valorActual, i, arr){// recibe dos parametros de la funcion
            const calculo = acumulador + valorActual.nota ; // suma resta o muchas cosas
            return calculo;
        },
        0  // --------> valor inicial del acul

    );
    console.log('respuestaReduce:', respuestaReduce);
    console.log('promedio del curso:', respuestaReduce / arregloEstudiante.length);

    console.log('arreglo:', arregloEstudiante);    

}

main();

//--------------------------------------------------------


/*

*/