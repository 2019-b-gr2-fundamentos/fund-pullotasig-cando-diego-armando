import {pokedex} from './new';
import {leer} from './leer';
import {estructuraDatosPokemon} from './estructuraDato';
import * as prompts from 'prompts';
import {escribir} from './escribir'

export async function borrar(){
    const archivole = leer('./logo.txt');
    console.log(archivole);

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
            return valorActual.id == idBuscar.id; 
        } 
    );
    
    archivoConEstructura[idModificar] = '';

    const arregloFinal = JSON.stringify(archivoConEstructura);

    escribir(
        './arreglo.txt',
        arregloFinal
    );
   
    pokedex();

}