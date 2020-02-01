/*

ejemplo de pokedex 
apodo:
nombre:
tipo:
nivel:
edad:
*/

// ------------------------------------ librerias -------------------------------------
import{leer} from './funcion-interfas/f-leer'
import { estructuraDatosPokemon } from './funcion-interfas/formato-pokemon'
import * as prompts from 'prompts';


// ------------------------------------ programa --------------------------------------

async function main(){

    //muestra logo pokemon
    const logoPokemon = leer('./logo.txt');
    console.log(logoPokemon);
    //muestra formatoy ejemplo de datos de pokemon
    const formatoDeDatos = leer('./formato.txt');
    console.log(formatoDeDatos);
    
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

    const respuestaEstudianteUno = await prompts(datosIngreoPokedex);
    
    const nuevoRegistroUno = {
        id: contador, 
        nombre: respuestaEstudianteUno.nombre
    };
    contador = contador + 1;
    arregloDePokedex.push(nuevoRegistroUno);

    const respuestaEstudianteDos = await prompts(datosIngreoPokedex);
    
    const nuevoRegistroDos = {
        id: contador,
        nombre: respuestaEstudianteDos.nombre
    };
    contador = contador + 1;
    arregloDePokedex.push(nuevoRegistroDos);
    
    console.log('Cual usuario quieres Editar?');
    console.log(arregloDePokedex);

    // OPERADORES!!! -> REEMPLAZAR AL !FOR!

    const idABuscar = await prompts({
            type: 'number',
            name: 'id',
            message: 'Ingresa el ID del registro a Editar'
    })
    const indiceEncontrado = arregloDePokedex.findIndex( // return CONDICION ->
        function (valorActual, indice, arreglo){
            return valorActual.id == idABuscar.id; // Nos devuelve el INDICE
        } // Si encuentra nos devuelve el indice
          // No encuentra
    )
    console.log('Indice encontrado:', indiceEncontrado);
    const nombreAEditar = await prompts({
        type: 'text',
        name: 'nombre',
        message: 'Ingresa el nuevo nombre'
    })
    arregloDePokedex[indiceEncontrado].nombre = nombreAEditar.nombre;
    console.log(arregloDePokedex);

    const buscar = await prompts({
        type: 'text',
        name: 'nombre',
        message: 'Buscar por ID o por NOMBRE'
    });
    const estudianteEncontrado = arregloDePokedex
            .find( // return CONDICION
                function(valorActual){
                    return valorActual.nombre == buscar.nombre;
                }
            );
    console.log(estudianteEncontrado);

    const arregloFinal = JSON.stringify(arregloDePokedex);

    console.log(arregloFinal);


}

main().then().catch();

// ------------------------------------- funcion --------------------------------------