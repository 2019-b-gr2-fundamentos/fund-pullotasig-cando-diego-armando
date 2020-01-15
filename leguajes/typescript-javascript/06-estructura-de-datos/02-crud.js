// CRUD ---> significa .- create read update deleted
// const prompts = require('prompts');     ----> manera js para instalar libreria
var prompts = require('prompts');
//----------------------------------------------------------------------------//
function main() {
    obtenerDatosAnimalPerrito();
}
function obtenerDatosAnimalPerrito() {
    //Paradigma de programacion
    // SINCRONO vs ASINCRONO
    console.log("inicio");
    var promesaEdad = prompts({
        type: 'number',
        name: 'edad',
        message: 'Puedes darme tu edad ???'
    });
    console.log(promesaEdad);
    promesaEdad
        .then(function (datos) {
        console.log("datos", datos);
        // puedo seguir 
        //
        var promesaNombre = prompts({
            type: 'text',
            name: 'nombre',
            message: 'Puedes darme tu nombre???'
        });
        console.log(promesaNombre);
        promesaNombre
            .then(function (datos) {
            console.log('Nombre', datos);
            // puedo seguir 
        })
            .catch(function (error) {
            console.log('error', error);
        });
        //
    })
        .catch(function (error) {
        console.log("efe", error);
    });
    console.log("hasta la proxima");
}
main();
