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


// ------------------------------------ programa --------------------------------------
 async function main(){

    const logoPokemon = await leer('./logo.txt');
    console.log(logoPokemon);
    //muestra formatoy ejemplo de datos de pokemon
    
    //console.log(formatoDeDatos, '\n');
    
    


    //contador
    let contador = 1;
           
    //definiendo arreglo
    let arregloDePokedex: estructuraDatosPokemon[] = [];
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
        console.log('1.       AÑADIR NUEVO POKEMON A LA POKEDEX');
        console.log('2.       BUSCAR POKEMON EN LA POKEDEX');
        console.log('3.       ELIMINAR POKEMON DE LA POKEDEX');
        console.log('4.       EDITAR POKEMON DE LA POKEDEX');
        console.log('5.       SALIR DE LA POKEDEX');

        let pedirAccion = await prompts (
            { 
                type: 'text',
                name: 'accion',
                message: 'Ingresa el numero de la accion que deseas realizar \n',
            }
        );
        await pedirAccion;  

        switch(pedirAccion.accion){
            case '1':
                await agregar();
                
                
                break;
            case '2':
                buscar();
                await buscar;               
                break;
            case '3':
                
                break;
            case '4':
                editar(); 
                break;  
            default:
                console.log('ffffffffffffffffff');
                // reenviar al programa     
            }
    }
    
    async function buscar(){

        
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
    
        const arreglo = JSON.stringify(arregloDePokedex);
    
        opciones();
        await buscar;
        console.log(arregloDePokedex);
    
    }
    
    async function agregar(){
  
        let respuestasDatosIngreoPokedex: estructuraDatosPokemon = await prompts(datosIngreoPokedex);
        
        arregloDePokedex.push(respuestasDatosIngreoPokedex);
        opciones();
        await agregar;
        console.log(arregloDePokedex);
    }

    async function editar(){

      
                
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
        console.log(arregloDePokedex);
                   
    }

}

main(); 

