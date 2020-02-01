import {leer} from './f-leer';
import { estructuraDatosPokemon } from './formato-pokemon';
import * as prompts from 'prompts';
import {escribir} from './escribir';
import {main} from './';

export async function agregar(){
    
    const formatoDeDatos = leer('./formato.txt');

    const archivoDatosPokemon= JSON.parse(formatoDeDatos);
    
    //contador
    let contador = 0;
    let minimoID= 0;
    archivoDatosPokemon.forEach( 

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
    const arregloDePokedex: estructuraDatosPokemon[] = archivoDatosPokemon;
    //definiendo estructura de datos que se piden
    const datosIngreoPokedex = [
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
            type: 'text',
            name: 'nivel',
            message: 'Ingresa el nivel del pokemon'
        },
        { 
            type: 'text',
            name: 'edad',
            message: 'Ingresa la edad en meses del pokemon'
        }
    ];

    const respuestasDatosIngreoPokedex = await prompts(datosIngreoPokedex);
    
    const nuevoRegistroUno = {
        id: contador,
        apodo: respuestasDatosIngreoPokedex.apodo,
        nombre: respuestasDatosIngreoPokedex.nombre,
        tipo: respuestasDatosIngreoPokedex.tipo,
        nivel: respuestasDatosIngreoPokedex.nivel,
        edad: respuestasDatosIngreoPokedex.edad
    };
    contador = contador + 1;
    arregloDePokedex.push(nuevoRegistroUno);

    const arreglo = JSON.stringify(arregloDePokedex);
    main();
    await agregar;

    //
    escribir(
        './arreglo.txt',
        arreglo
    ) 
}
