import {leer} from './leer';
import {estructuraDatosPokemon} from './estructuraDato';
import * as prompts from 'prompts';
import { escribir } from './escribir';

export async function agregar(){

    const formatoDeDatos = leer('./arreglo.txt');
    console.log('fffffff');
    
    let formatoConvertido = JSON.parse(formatoDeDatos);
    //contador
    console.log('fffffff');
    let contador = 0;
    let minimoID= 0;
    formatoConvertido.forEach( 

            function(valorActual){
                const idActual =valorActual.id;
                if (idActual>minimoID){
                    minimoID = idActual   
                }

            }
        );

    minimoID = minimoID +1 ;
    contador = minimoID;
    //definiendo arreglo
    console.log('fffffff');
    const arregloDePokedex: estructuraDatosPokemon[] = await formatoConvertido;
    //definiendo estructura de datos que se piden
    const datosIngresoPokedex = [
        { 
            type: 'text',
            name: 'apodo',
            message: 'Ingresa el apodo del pokemon'
        },
        { 
            type: 'text',
            name: 'nombre',
            message: 'Ingresa el nombre del pokemon'
        },
        { 
            type: 'text',
            name: 'tipo',
            message: 'Ingresa el tipo del pokemon'
        },
        { 
            type: 'number',
            name: 'nivel',
            message: 'Ingresa el nivel del pokemon'
        },
        { 
            type: 'number',
            name: 'edad',
            message: 'Ingresa la edad en meses del pokemon'
        }
    ];

    const respuestasIngresar = await prompts(datosIngresoPokedex);
    
    const nuevoRegistro = {
        id: contador, 
        nombre: respuestasIngresar.nombre,
        apodo: respuestasIngresar.apodo,
        tipo: respuestasIngresar.tipo,
        nivel: respuestasIngresar.nivel,
        edad: respuestasIngresar.edad
    };
    
    arregloDePokedex.push(nuevoRegistro);

    const arregloFinal = JSON.stringify(arregloDePokedex);
    escribir(
        './arreglo.txt',
        arregloFinal
    );

    

}