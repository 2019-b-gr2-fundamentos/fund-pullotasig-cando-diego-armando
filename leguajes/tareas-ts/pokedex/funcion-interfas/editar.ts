import {leer} from './f-leer';
import { estructuraDatosPokemon } from './formato-pokemon';
import * as prompts from 'prompts';
import {escribir} from './escribir';

export async function editar(){

    const formatoDeDatos = leer('./formato.txt');

    const arregloDePokedex= JSON.parse(formatoDeDatos);

    const archivoDatosPokemon: estructuraDatosPokemon[] = arregloDePokedex;

    console.log('Cual usuario quieres Editar?');
    console.log(formatoDeDatos);
    // OPERADORES!!! -> REEMPLAZAR AL !FOR!
            
    const idABuscar = await prompts({
        type: 'number',
        name: 'id',
        message: 'Ingresa el ID del registro a Editar'
    })
    const indiceEncontrado = archivoDatosPokemon.findIndex( // return CONDICION ->
        function (valorActual, indice, arreglo){
            return valorActual.id == idABuscar.id; // Nos devuelve el INDICE
        } // Si encuentra nos devuelve el indice
        // No encuentra
    )
    console.log('Indice encontrado:', indiceEncontrado);
    //
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
    console.log(archivoDatosPokemon);

    const respuestasDatosIngreoPokedex = await prompts(datosIngreoPokedex);
    
    const nuevoRegistroUno = {
        apodo: respuestasDatosIngreoPokedex.apodo,
        nombre: respuestasDatosIngreoPokedex.nombre,
        tipo: respuestasDatosIngreoPokedex.tipo,
        nivel: respuestasDatosIngreoPokedex.nivel,
        edad: respuestasDatosIngreoPokedex.edad
    };

    archivoDatosPokemon.push(nuevoRegistroUno);

    const arreglo = JSON.stringify(archivoDatosPokemon);

    escribir(
        './arreglo.txt',
        arreglo
    ) 
               
}


    /*
    const nombreAEditar = await prompts(
        { 
            type: 'text',
            name: 'apodo',
            message: 'Ingresa el apodo del pokemon'
        }
    );
    const nombreAEditar = await prompts(
        
        { 
            type: 'text',
            name: 'nombre',
            message: 'Ingresa el nombre del pokemon'
        }
    );
    const nombreAEditar = await prompts(
        
        { 
            type: 'text',
            name: 'tipo',
            message: 'Ingresa el tipo del pokemon'
        }
    );
    const nombreAEditar = await prompts(
        
        { 
            type: 'text',
            name: 'nivel',
            message: 'Ingresa el nivel del pokemon'
        }
    );
    const nombreAEditar = await prompts(
        
        { 
            type: 'text',
            name: 'edad',
            message: 'Ingresa la edad en meses del pokemon'
        }
    );
    archivoDatosPokemon[indiceEncontrado].nombre = nombreAEditar.nombre;
    archivoDatosPokemon[indiceEncontrado].nombre = nombreAEditar.nombre;
    archivoDatosPokemon[indiceEncontrado].nombre = nombreAEditar.nombre;
    archivoDatosPokemon[indiceEncontrado].nombre = nombreAEditar.nombre;
    archivoDatosPokemon[indiceEncontrado].nombre = nombreAEditar.nombre;
    archivoDatosPokemon[indiceEncontrado].nombre = nombreAEditar.nombre;
    */
