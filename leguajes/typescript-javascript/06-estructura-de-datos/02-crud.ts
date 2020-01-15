// CRUD ---> significa .- create read update deleted
// const prompts = require('prompts');     ----> manera js para instalar libreria

import * as prompts from 'prompts';
//----------------------------------------------------------------------------//
function main (){
    obtenerDatosAnimalPerrito();
}

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

 main();