/*
pokedex 1.0.2

nombre:
tipo:
nivel:

*/

import {ver} from './ver';
import {agregar} from './agregar';
import * as prompts from 'prompts';
import { editar } from './editar';
import {buscar} from './buscar';
import {borrar} from './borrar'

//----------------------------------------------------------------------------

export async function pokedex(){

    console.log('1. ver');
    console.log('2. agregar');
    console.log('3. editar');
    console.log('4. buscar');
    console.log('5. borrar');
    console.log('6. salir');

    let pedirAccion = await prompts(
            { 
                type: 'number',
                name: 'accion',
                message: 'Ingresa el numero de la accion que deseas realizar ',
            }
        );
    await pedirAccion;

    switch(pedirAccion.accion){
        case 1:
            ver(); 
            break;
        case 2:
            agregar();
            break;
        case 3:
            editar();
            break;    
        case 4:
            buscar();
            break;
        case 5:
            borrar();
            break;
        default:
            console.log('bye bye');        
            break;
    }  
}

pokedex();
//----------------------------------------------------------------------------



//----------------------------------------------------------------------------