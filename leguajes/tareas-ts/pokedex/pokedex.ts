/*

ejemplo de pokedex 
apodo:
nombre:
tipo:
nivel:
edad:
*/

// ------------------------------------ librerias -------------------------------------


import{leer} from './funcion-interfas/f-leer';
import * as prompts from 'prompts';
// import {agregar} from './funcion-interfas/añadir';
import {buscar} from './funcion-interfas/buscar';
import { editar } from './funcion-interfas/editar';
import {escribir} from './funcion-interfas/escribir';
import { estructuraDatosPokemon } from './funcion-interfas/formato-pokemon';

const logoPokemon = leer('./logo.txt');
console.log(logoPokemon);


// ------------------------------------ programa --------------------------------------
 async function main(){

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

    let arregloDePokedex: estructuraDatosPokemon[] = await archivoDatosPokemon;
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

    
    
    opciones(); 

    async function opciones(){

        console.log('BIENVENIDO A LA POKEDEX');
        console.log('QUE DESEA HACER');
        console.log('0.       VER POKEDEX');
        console.log('1.       AÑADIR NUEVO POKEMON A LA POKEDEX');
        console.log('2.       BUSCAR POKEMON EN LA POKEDEX');
        console.log('3.       ELIMINAR POKEMON DE LA POKEDEX');
        console.log('4.       EDITAR POKEMON DE LA POKEDEX');
        console.log('5.       SALIR DE LA POKEDEX');

        let pedirAccion = prompts(
            { 
                type: 'text',
                name: 'accion',
                message: 'Ingresa el numero de la accion que deseas realizar \n',
            }
        );
        await pedirAccion;  

        switch(pedirAccion.accion){

            case '0':
                const logoPokemon = leer('./logo.txt');
                console.log(logoPokemon);
                ver(); 
                main();
                await main;
                break;

            case '1':
                agregar(); 
                await agregar;
                break;

            case '2':
                buscar();
                await buscar;               
                break;

            case '3':
                break;

            case '4':
                editar(); 
                await editar;
                break;  
            
            case '5':
                console.log('bye bye')
                break;

            default:
                main();
                await main;

                break; 
                // reenviar al programa     
            }
    }
    
    async function buscar(){

        
        const buscar = await prompts({
            type: 'text',
            name: 'nombre',
            message: 'escriba el nombre del pokemon'
        });
        const estudianteEncontrado = arregloDePokedex
                .find( // return CONDICION
                    function(valorActual){
                        return valorActual.nombre == buscar.nombre;
                    }
                );
        console.log(estudianteEncontrado);
     
        opciones();
        await buscar;
    }
    
    async function agregar(){

        
  
        let respuestasDatosIngreoPokedex: estructuraDatosPokemon = await prompts(datosIngreoPokedex);
        
        arregloDePokedex.push(respuestasDatosIngreoPokedex);
        opciones();
        await agregar;

    }

    async function editar(){

      
                
        const nombreBuscar = await prompts({
            type: 'text',
            name: 'nombre',
            message: 'Ingresa el nombre del pookemon que deseas editar'
        })
        let nombreEncontrado = arregloDePokedex.findIndex( // return CONDICION ->
            function (valorActual, indice, arreglo){
                return valorActual.nombre == nombreBuscar.nombre; // Nos devuelve el INDICE
            } // Si encuentra nos devuelve el indice
            // No encuentra
        )
        if(nombreEncontrado = -1){

        }
        console.log('Indice encontrado:', nombreEncontrado);
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
        console.log(arregloDePokedex);
    
        const respuestasDatosIngreoPokedex = await prompts(datosIngreoPokedex);

        arregloDePokedex.push(respuestasDatosIngreoPokedex);
    
        const arreglo = JSON.stringify(arregloDePokedex);
    
        opciones();
        await editar;

                   
    }

    function ver(){
        console.log(arregloDePokedex);
    }

}

main(); 

