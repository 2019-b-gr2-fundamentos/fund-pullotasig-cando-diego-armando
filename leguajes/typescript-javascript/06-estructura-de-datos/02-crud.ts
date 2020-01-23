// CRUD ---> significa .- create read update deleted
// const prompts = require('prompts');     ----> manera js para instalar libreria

import * as prompts from 'prompts';
import { RespuestaEdad } from './respuesta-edad.interface';
import { RespuestaNombre } from './respuesta-nombre.interface';

async function obtenerDatosAnimalPerritoSincrona(){
    //Paradigma de programacion
    // SINCRONO vs ASINCRONO
    console.log("inicio");
    const pregunta = [
        {
            type: 'number',
            name: 'edad',
            message: 'Puedes darme tu edad ???'
        },
        {
            type: 'text',
            name: 'nombre',
            message: 'Puedes darme tu nombre ???'
        },
        {
            type: 'text',
            name: 'cedula',
            message: 'Puedes darme tu numero de cedula ???'
        }

    ]
    const RespuestaEdad = await prompts(pregunta);
    console.log("Respuesta", RespuestaEdad);
    console.log("finn");
}
function main (){
    //obtenerDatosAnimalPerrito();
    obtenerDatosAnimalPerritoSincrona()
    .then()
    .catch();

}
main();



//----------------------------------------------------------------------------//

/*
function obtenerDatosAnimalPerrito(){
    //Paradigma de programacion
    // SINCRONO vs ASINCRONO
    console.log("inicio");
    const promesaEdad = prompts({
        type: 'number',
        name: 'edad',
        message: 'Puedes darme tu edad ???'
    })
    console.log(promesaEdad);
    promesaEdad
        .then (  // ok
            (datos)=>{
                console.log("datos", datos);
                        // puedo seguir 
                //
                const promesaNombre = prompts({
                    type: 'text',
                    name: 'nombre',
                    message: 'Puedes darme tu nombre???'
                })
                console.log(promesaNombre);
                promesaNombre
                    .then (  // ok
                        (datos)=>{
                            console.log('Nombre', datos);
                                // puedo seguir 
                        }
                    )  
                    .catch (  // :´(
                        (error)=>{
                            console.log('error', error);
                        }
                    )
                //
            }
        )  
        .catch (  // :´(
            (error)=>{
                console.log("efe", error);
            }
        )

    console.log("hasta la proxima");
}
*/
//------------------------------------------------------------------------------