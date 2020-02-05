import {pokedex} from './new';
import {leer} from './leer';
import {estructuraDatosPokemon} from './estructuraDato';
import * as prompts from 'prompts';
import {escribir} from './escribir'

export async function editar(){

    const archivoleido = leer('./arreglo.txt');
    const archivoCargado = JSON.parse(archivoleido);
    
    const archivoConEstructura: estructuraDatosPokemon [] = archivoCargado;
    //
    const idBuscar = await prompts({
        type: 'number',
        name: 'id',
        message: 'Ingresa el ID del pokemon que desea editar'
    });
    const idModificar = archivoConEstructura.findIndex(   
        function (valorActual){
            const valorActual.id == idBuscar.id; 
        } 
    );
    const newApodo = await prompts(
        { 
            type: 'text',
            name: 'apodo',
            message: 'Ingresa el apodo del pokemon'
        }
    );
    archivoConEstructura[idModificar].apodo = newApodo;
    const newNombre = await prompts(
        { 
            type: 'text',
            name: 'nombre',
            message: 'Ingresa el nombre del pokemon'
        }
    );
    archivoConEstructura[idModificar].nombre = newNombre;
    const newTipo = await prompts(
        { 
            type: 'text',
            name: 'tipo',
            message: 'Ingresa el tipo del pokemon'
        }
    );
    archivoConEstructura[idModificar].tipo = newTipo;
    const newNivel = await prompts(
        { 
            type: 'number',
            name: 'nivel',
            message: 'Ingresa el nivel del pokemon'
        }
    );
    archivoConEstructura[idModificar].nivel = newNivel;
    const newEdad = await prompts(
        { 
            type: 'number',
            name: 'edad',
            message: 'Ingresa la edad en meses del pokemon'
        }
    );
    archivoConEstructura[idModificar].edad = newEdad;
/*

            


        archivoConEstructura[idModificar] = {
            id: idModificar,
            nombre: newdatosIngresoPokedex.nombre,
            apodo: newdatosIngresoPokedex.apodo,
            tipo: newdatosIngresoPokedex.tipo,
            nivel: newdatosIngresoPokedex.nivel,
            edad: newdatosIngresoPokedex.edad

        };

    */

    const arregloFinal = JSON.stringify(archivoConEstructura);

    escribir(
        './arreglo.txt',
        arregloFinal
    );
   
    pokedex();

}