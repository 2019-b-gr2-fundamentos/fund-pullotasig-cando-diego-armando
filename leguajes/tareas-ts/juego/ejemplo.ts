import {some} from './operadores';
import {every} from './operadores';
import {forEach} from './operadores';
import {reduce} from './operadores';
import {filter} from './operadores';
import * as prompts from 'prompts';

const arregloEstudiante = [
    {id: 1, nombre: 'Juan', nota: 5, curso: 'A'},
    {id: 1, nombre: 'Diego', nota: 3,curso: 'A'},
    {id: 1, nombre: 'karen', nota: 8,curso: 'B'},
    {id: 1, nombre: 'Alex', nota: 7,curso: 'B'},
    {id: 1, nombre: 'Fabian', nota:9,curso: 'A'},
    {id: 1, nombre: 'Mia', nota:6,curso: 'B'}
];
console.log('arreglo:', arregloEstudiante); 

function main(){

    let respuestaFilter = filter(arregloEstudiante,
        function(valorActual){
            const valor = valorActual.nota < 7;
            return valor;
        }
    );
    console.log('notas mayores a 7',respuestaFilter);

    let respuestaForEach = forEach(arregloEstudiante,
        function(valorACtual){ 
            let nota20 = valorACtual.nota *2;
            console.log('nota de',valorACtual.nombre,'sobre 20:', nota20);
        }
    );

    const respuestaSome = some(arregloEstudiante,
        function(valorACtual,i,arreglo){
            const condicion = valorACtual.nota < 3;
            return condicion;
        }  
    );
    console.log('alguno tiene una nota menor de 3?? -->',respuestaSome);

    const respuestaEvery = every(arregloEstudiante,
        function(valorACtual){
            const condicion = valorACtual.nota >= 4;
            return condicion;
        }
    );
    console.log('todos tienen notas mayores a 4?? -->',respuestaEvery);

    const respuestaReduce = reduce(arregloEstudiante,
        function(acumulador, valorActual){
            const calculo = acumulador + valorActual.nota ; 
            return calculo;
        },
        0
    );
    console.log('promedio del curso:', respuestaReduce / arregloEstudiante.length);

    /*
    const respuestaMap = map(arregloEstudiante,
        function(valorACtual,i,arreglo){
            const nuevoObjeto = {
                id: valorACtual.id,
            };
            return nuevoObjeto;
        }
    );
    console.log('respuestaMap:', respuestaMap);*/
}

main();
    