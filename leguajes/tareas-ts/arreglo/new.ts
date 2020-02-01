/*
pokedex 1.0.2

nombre:
tipo:
nivel:

*/

import {ver} from './ver';
import {agregar} from './agregar';
import * as prompts from 'prompts';

//----------------------------------------------------------------------------

async function pokedex(){

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
                message: 'Ingresa el numero de la accion que deseas realizar \n ',
            }
        );
    await pedirAccion;
    
    switch(pedirAccion.accion){
        case 1:
            ver(); 
            pokedex();
            break;
        case 2:
            agregar();
            await agregar;

            pokedex();
            break;
        case 3:
            break;    
        case 4:
            break;
        case 5:
            break;
        case 6:
            console.log('bye bye');
            break; 
        default:
            pokedex();
            break;

    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //console.log('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
}

pokedex();
//----------------------------------------------------------------------------



//----------------------------------------------------------------------------